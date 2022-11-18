# How To Use Emscripten & WASM in Web Apps

A year ago, I published a post about [how I built WASM
SYNTH](https://timdaub.github.io/2020/02/19/wasm-synth/). As I learned a lot
during the process, the post ended up becoming huge. I even ended up putting a
whole section in the post's appendix.

Then yesterday, a friend of mine asked me about my opinion on emscripten, the
tool I had used to build [WASM SYNTH](https://github.com/TimDaub/wasm-synth).
Coincidentally, I ended up referring him to the WASM SYNTH post's
[appendix](https://timdaub.github.io/2020/02/19/wasm-synth/#appendix), where I
had described my build pipeline in detail.

Today, it made me realize that I could publish that appendix as an individual
post. And so that what I ended up doing. In the following sections, you'll
learn about the build process that I'm using in the WASM SYNTH project.

"How do I integrate WebAssembly into my regular web app build without bloating
it too much?" I wondered when I first started working with WebAssembly. To put
things into perspective: I had just recently switched from Webpack to rollup.js
as I was sick of spending hours setting up Webpack with its ten thousand magic
configuration options.

To my surprise, however, neither framework has reasonable defaults for handling
WebAssembly yet. Notably, when we generated the WebAssembly outputs using
emscripten and they [grew bigger than
4KB](https://developers.google.com/web/updates/2018/04/loading-wasm). But
there were other problems too:

- rollup.js bundles all source file into a single JavaScript file.
- Booting the app, also means booting react.js, which itself starts a continuous
  process that we'll somehow have to take into account.
- emscripten generates a `.wasm` and a `.js` file. The `.wasm` file contains
  all C++ source code as well as WebAssembly instructions. The `.js` file acts
  as the glue between WebAssembly and JavaScript.
  - In some cases, there's this 4KB size limit on loading `.wasm` files
  - The emscripten `.js` glue code is super useful. I can recommend including
    it into your code deliverable.
- The `AudioWorklet` is supposed to be included into the page by using `new AudioContext().addModule(<path>)` - It has a separate global scope. But emscripten's glue code relies on the
  global scope too (`Module` object)
- Rollup.js doesn't have good defaults or plugins for bundling
  emscripten-generated `.wasm` code.

In the end, this led me to build a custom pipeline to bundle emscripten builds
every time my source changed. But before I explain how, let's take a step back
to understand how emscripten's compilation works.

On installation, emscripten exports a command-line utility called `emcc` into
the shell. To demonstrate its capabilities, let's try compiling the `Hello World` example from the beginning of the post:

```c++
#include <iostream>
#include <emscripten/bind.h>

using namespace emscripten;

std::string hello() {
  return "hello world";
}

// NOTE: Using embind, we can define `hello`'s external name
EMSCRIPTEN_BINDINGS(my_module) {
  function("hello", &hello);
}
```

To make it executable by a browser, we'll use `emcc` to compile it to a `.wasm`
and a `.js` file.

```bash
$ emcc main.cc --bind -WASM=1 -o main.js
```

`emcc` here simply compiles all functions contained in `main.cc` into a
`main.wasm` file. Besides, it also generates this glue code (`main.js`) using
[Embind](https://emscripten.org/docs/porting/connecting_cpp_and_javascript/embind.html).
It allows us to invoke functions, initially written in C++, directly from
within JavaScript as if they were just regular classes. So to make emscripten's
outputs work correctly, we'll have to include the `.js` into the page. On the
initialization of the page, emscripten's clue code is loading the `.wasm` file
asynchronously. Through some trick, the browser skips the 4KB file size limit,
and all our C++ classes are now available as native JS classes:

```html
<html>
  <body>
    <script src="wasm/main.js"></script>
    <script>
      Module.onRuntimeInitialized = function () {
        console.log(Module.hello());
      };
    </script>
  </body>
</html>
```

So far, so good. But, as I've mentioned previously, one of the problems now is that
the `AudioWorklet`, being spawned in a separate thread with a separate global
scope, won't be aware of emscripten's `window.Module`. So how do we export code
from within a Worklet?

After spending quite some time researching that question, I discovered that the
Google Chrome Labs team
[recommends](https://github.com/GoogleChromeLabs/web-audio-samples/blob/master/audio-worklet/design-pattern/wasm/index.html)
transpiling all JavaScript source into [native
modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
and then simply use ES6's `import from` syntax. Well, it turns out the JS
modules syntax [isn't widely supported
yet](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules),
particularly not in `Workers`, let alone `Worklets`...

![](/assets/images/import-support.png)

But luckily, after banging my head another few days against JS modules and
other fancy new front end frameworks, I found a surprisingly simple trick.

I reduce emscripten's outputs to a single `.js` file that contains the `.wasm`
as base64 string using it's `-s SINGLE_FILE=1` option. As we need emscripten's
`.js` file to define `window.Module` in the `AudioWorklet`'s global scope, I
then simply append the emscripten JavaScript file with the `AudioWorklet`'
JavaScript file to make them configure the same global scope. That allows me to
execute WebAssembly from within a Worklet without using the poorly supported
`import from` syntax. Ultimately, I ended up with the following bash script (or
on
[GitHub](https://github.com/TimDaub/wasm-synth/blob/master/scripts/build.sh)):

```bash
#!/usr/bin/env bash

DIR=".wasm"

# NOTE: Generates the .wasm directory if it doesn't exist yet.
if [ ! -d $DIR ]; then
  mkdir $DIR
fi

# NOTE `-std`: To use modern c++11 features like std::tuple and std::vector,
# we need to enable C++ 11 by passing the parameter to clang through emcc.
emcc src/cpp/*.cc \
  -std=c++11 \
  -O1 \
  -s WASM=1 \
  -s ALLOW_MEMORY_GROWTH=1 \
  -s BINARYEN_ASYNC_COMPILATION=0 \
  -s SINGLE_FILE=1 \
  -s MODULARIZE=1 \
  --bind \
  -o $DIR/main.js

# NOTE: We concat the emscripten generated js and wasm file with the worklet
# such that we don't have to import it later as an es6 module. This
# achieves better cross-browser compatibility.
cat $DIR/main.js src/js/worklets/synth.js > public/worklets/synth.js
```

To update the page every time the source changed, I additionally used
[`npm-watch`](https://www.npmjs.com/package/npm-watch) to re-run the routine
each time file changes occur.

To find the latest version of this build process, check
[github.com/TimDaub/wasm-synth](https://github.com/TimDaub/wasm-synth). Stay up
to date by following my newsletter.

---

published 2021-02-25 by timdaub
