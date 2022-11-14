# How I Build JavaScript Apps In 2021

It's now roughly seven or eight years that I'm building dynamic front ends for
the web. From [digital art wallets](https://www.ascribe.io/) to games
([1](https://ipfs.leapdao.org/blog/Planet-A-ccc-ethberlin-recap/),
[2](https://timdaub.github.io/videogame)) and
[synthesizers](https://timdaub.github.io/wasm-synth), I've seen it all. And
since my process of creation has dramatically changed over the years, today,
I'd like to share how I'm developing web apps in 2021.

## I avoid build processes.
I still remember the debates with colleagues about using
[babel](https://babeljs.io/) a few years ago.  Within the front end development
world, transpiling had just become a thing, so we ended up babelifying our
builds to use ES6. Our argument back then was that one day, we would be able to
push our application's directory structure on a web server and since all
browsers would then support the augmented ES6 features, our app would just
work! Without a build process. WOW!
That must have been around 2015. When I look at the source code of these old
applications now, our technical visions didn't end up becoming reality.

Now, I try to keep my build process to a minimum. When I need to write a demo
app, I particularly like using [`<script
type="text/babel">`](https://babeljs.io/docs/en/babel-standalone#script-tags).
I love [preact's "no build tools
route."](https://preactjs.com/guide/v10/getting-started/#no-build-tools-route)
too.  When I have to set up an actual app, I avoid
[webpack](https://webpack.js.org/) and [rollup](https://rollupjs.org/). I
mainly get frustrated about the myriad ways of configuring them. Some minor
thing always ends up being broken, which leads to hours of debugging foreign
code. And that's frustrating. Using preact's no build route, finally something
like the above is possible:

```js
<script type="module">
  // NOTE: You literally don't need a build process with preact.
  import { h, Component, render } from 'https://unpkg.com/preact?module';
  const app = h('h1', null, 'Hello World!');
  render(app, document.body);
</script>
```

When having to use a build tool, I gravitate towards
[parcel](https://parceljs.org/) or
[microbundle](https://github.com/developit/microbundle) as they come
preconfigured. And in particular, parcel is excellent, as it's merely using an
HTML file as its entry point. To me, that's promising as it assumes a proper
directory structure and properly connected files such that maybe one day I can
push my app to the web without that build step.

## I avoid transpiling.
For the same reasons as pointed out above, I also try to avoid transpiling.
It's not because I don't like ESNext features, but more because I want to
minimize the risk of getting stuck with the transpiler. Hence, I try to avoid
using babel. [I also don't use
Typescript](https://timdaub.github.io/2020/09/01/typescript/). To me,
JavaScript is productive enough.  Additionally, for
[react](https://reactjs.org/)-style projects, no transpilers mean I stopped
using [JSX](https://reactjs.org/docs/introducing-jsx.html).  Instead, I found
an excellent library called [htm](https://github.com/developit/htm) that uses
JavaScript's template strings. It has a similar syntax to JSX, but it's not
breaking ECMAScript standards and hence needs no transpliation.

## I avoid the _new_ and _shiny_.
I even avoid changing the way I work if I don't feel comfortable or inclined.
For example, I never switched to [react
hooks](https://reactjs.org/docs/hooks-intro.html). The [lifecycle
methods](https://reactjs.org/docs/state-and-lifecycle.html) that I initially
know from iOS Objective-C programming are - in my opinion - a beautiful
metaphor for writing front end components. And neither did I have any issues
with my sites' performance. I would make the switch if I started to have
problems. But I don't.  The same goes for up and coming frameworks. Angular V2?
[Svelte](https://svelte.dev/)? Cool, but why relearn a framework when I'm already
productive with the one I use?

## I test EvErYtHiNg.
When I started front-end development, testing was complicated. Only a few front
end developer colleagues tested their apps properly. I ended up doing a lot of
testing by hand. It was frustrating and unproductive.  But testing front ends
has improved dramatically over the years. Not only have the tools been
significantly enhanced. 

We, as front-end developers, have now also figured out how to correctly write
front end tests.  Finally, we're able to distinguish between functional code
and presentational code.  For functional code, we now write unit tests. For
presentational code, we use snapshot-based testing and integration tests. I'm
pleased about tools like [cypress](https://www.cypress.io/) that is great for
integration tests. I also like [ava](https://github.com/avajs/ava/) for unit
tests.

## I optimize for performance and quality.
I used to be eager about building extensively functional software: the more
features, the better. I'm not anymore. Instead, I try to develop software that
works well for my users. I strive for quality. So I try to measure my build's
size. I take proper care about delivering my application, meaning I turn on
compression and
[caching](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching). I care
about optimizing my static assets like pictures. And I like to check my apps by
using tools like [PageSpeed
Insights](https://developers.google.com/speed/pagespeed/insights/?hl=de) or
[lighthouse](https://developers.google.com/web/tools/lighthouse).

## I use my own work
From experience, I learned that I hardly ever get stuck on a algorithmic
problem. On the contrary, I get motivated to learn something new and excel in
the process. However, I caught my self often spending many hours on debugging
other people's code. Mainly when it's third-party libraries that I included via
npm. Once, I thought that using npm packages was a JavaScript developer's
superpower.  Now, I know that it can also be their curse.

Instead of collecting heaps of third-party code, I now prefer following [Peter
Hintjens' principles for writing good code](http://hintjens.com/blog:96).  I
"use my own work." Meaning, I dare to write seemingly complex code myself. I
still won't roll my own crypto or write a date library, but I dare to implement
parts of a protocol or build an algorithm. It's not to say that I ditch every
npm package and go npm-keto-diet. No, instead, I take a more mindful approach
towards dependencies and only include them when I truly need them.

I try to do that by leaving my technical vision at the doorstep of my office,
so that I can now focus on solving the problems at hand. I try to stop worrying
about eventualities far in the future as I view that as speculation. In cases I
have past experiences, I use it to form my decision. For unchartered teritory,
I move carefully, step by step.

## I use open source to my advantage.
I'm building websites since I'm a teenager. And had I open-sourced and
maintained a few pieces of code that I need frequently, I'd be more productive
now.  Unfortunately, I was short-sighted. Surprisingly, I didn't think about 
still using JavaScript at 29 years of age 😂

I stopped framing open source mainly around certain virtues like free speech,
fairness or certain politics. They're still important virtues for me, but I
learned that I could use open source also for building a personal toolset.

Extracting a library from a codebase allows me to think about it from a user's
perspective. It means I'm able to think about a piece of code's interfaces
emphatically. Additionally, there's positive peer pressure. 
I'm not going to release shit to the world. When my project is public, it's
going to have a proper README and some docs. And it's going to be tested. Since
everybody can see it, I might as well create something I can be proud of.

Hence, contributing to open source, for me, is about building high-quality
software. Being anxious about not being able to monetize this particular piece
of code has become less of a concern.
[sindresohrus](https://github.com/sindresorhus) inspired me to treat open
source packages like my personal toolbox.

## Conclusion
And that's my incomplete list of principles. I'm sure there's more than just
these. Anyway, I still find some of these points quite controversial.  I'm sure
they won't work for everyone as all our contexts differ.  But working solo as a
freelancer, I've found that these principles contribute to me being content
about what I'm doing. Hence, I was eager to share them.

I'm curious to hear other's thoughts and see if they've taken similar paths.
Please reach out! Also, don't forget to subscribe to my newsletter!
