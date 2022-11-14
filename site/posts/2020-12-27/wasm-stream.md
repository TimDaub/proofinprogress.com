# WASM-STREAM, a virtual stage for digital artists

**TL;DR:** I built a synthesizer that allows streaming directly to an internet
radio stream for rc3 2020.

**UPDATE from April 1, 2021:** I've now taken WASM STREAM offline as its
purpose was mainly to serve last year's rc3. The rc3 world has been taken
offline too. This means that some links in this blog post are not available
anymore. Probably all source code that was used in the project is available on
GitHub.

<hr/>

It's that time between Christmas and new year again, where you can usually find
me at Leipzig's Congress Zentrum on my computer hacking away. It's chaos
congress time. Given this year's pandemic, the "37c3" however, was moved to the
internet and renamed to ["rc3", the Remote Chaos Communication
Congress](https://rc3.world).

Earlier this month, the iconic congress build-up started. This time around,
building up didn't involve moving heavy crates of mate tea around. Instead, it
meant that everyone started designing, drawing, and building their assembly
maps for the "rc3.world". A [2D virtual
space](https://events.ccc.de/2020/09/04/rc3-remote-chaos-experience/) that's
supposed to replace this year's lack of physical space.

The rc3.world software is a fork of [workadventu.re](https://workadventu.re/),
a 2D game simulating a virtual work environment with avatars. Within this 2D
map of the virtual congress, the organizers invited all assemblies to build
their own spaces. And so, as the build-up for [Social Dist0rtion
Protocol](https://www.dist0rtion.com/) assembly began, I had an idea for a
project.

![[wasm-synth](https://audio.daubenschuetz.de/assets/), the project I
launched at last year's c3](/assets/images/wasm-synth-screenshot.png)

At last year's congress in Leipzig, I had launched
[wasm-synth](https://audio.daubenschuetz.de/assets/),
a synthesizer built in WebAssembly. Naturally, this time I was eager to take
the project to the next stage. Hence, roughly a week ago, I started to work on
a new project called "WASM-STREAM" - an extension to wasm-synth.

[WASM-STREAM](https://github.com/social-dist0rtion-protocol/wasm-stream) is a
virtual stage for digital artists. Using WASM-STREAM, an artist can broadcast
their play with wasm-synth to an internet radio stream. More importantly,
though, this means that they can take the stage on the [Social Dist0rtion
Protocol](https://www.dist0rtion.com/)'s assembly and jam away to a virtually
present audience.

![Social Dist0rtion Protocol's dance floor in the rc3.world](/assets/images/wasm-stream.png)

So how did I build it?

## A First Little Demo

[wasm-synth](https://audio.daubenschuetz.de/assets/) is a project that I built
deliberately to showcase the power of the web. At the beginning of the year, I
wrote [a blog post](https://timdaub.github.io/2020/02/19/wasm-synth/) outlining
its technical details. It's using the `AudioWorklet` and some
WebAssembly-transpiled code to render audio in real-time in the user's browser.

Now, workadventure, the software ccc uses to run their rc3.world, is also built
on the web and allows embedding audio streams. So I thought, why not take the
audio generated in wasm-synth and stream it to everyone in the rc3 world.

In a way, it sounds like not that big of a deal to build an audio streaming
client within a website. But remember that a browser's networking ability is
limited. While we've come a long way from the `XMLRequest` API to `fetch`,
`WebSocket` and `WebRTC`, these concepts only allow talking upstream if their
authors deliberately built their upstream application for supporting them.

Naive as I Am, I started by deploying [icecast2](https://icecast.org/) to a
small Hetzner instance. I configured an authorized mount point that allows a
streamer to connect using client software. Then I looked for a way to stream
audio directly to icecast from a browser. And found... nothing.

Well, I did find something. It's called [webcast](https://webcast.github.io/),
and it's a [WebSocket-based
subprotocol](https://github.com/webcast/webcast.js/blob/master/SPECS.md) that
allows sending binary audio data between a client and a server. In their
[README.md](https://github.com/webcast/webcast.js#server), the authors also
mention webcast's compatibility with
[liquidsoap](https://www.liquidsoap.info/), a DSL for audio stream processing.

So my first attempt at plugging these things together involved encoding the
`Float32Array` data from the `AudioWorklet` into an mp3 stream using
[libshine](https://github.com/toots/shine/) (that has a wasm JavaScript
package) and then sending it to a [liquidsoap
"harbor"](https://www.liquidsoap.info/doc-dev/harbor.html) via webcast.
Liqidsoap would then convert the mp3 stream to ogg-vorbis, make it stereo, and
forward it to the icecast server.

And, to my surprise, it worked. When I hit some keys on the wasm-synth, they
got encoded and sent to the audio stream. With a bit of delay, I heard what I
had just played. Cool!

Anyways, with my small little demo, I was galvanized and motivated enough to
spend more time building something that would work for the congress.

## The WASM-STREAM Architecture

Ultimately, liquidsoap was not well-suited for my purpose. I also quickly
realized that all I had to do was build a proxy between the [icecast
protocol](https://gist.github.com/ePirat/adc3b8ba00d85b7e3870) and the [webcast
protocol](https://github.com/webcast/webcast.js/blob/master/SPECS.md). And
that's what I ended up building. A small [JavaScript
application](https://github.com/webcast/webcast.js/blob/master/SPECS.md)
implementing two protocols. It listens for incoming WebSocket connections
and calls icecast with a loooooonng PUT request to establish a stream.

WASM-STREAM itself doesn't do any encoding. It can, however, route an
`audio/ogg` or an `audio/mpeg` stream from webcast to icecast. The encoding
from WAV to mp3 takes place on the user's device already when the play the
synthesizer.

## How To Use WASM-STREAM

Whether you have a ticket to rc3 or not, you can tune into the stream at
[https://audio.daubenschuetz.de/stream](https://audio.daubenschuetz.de/stream).
It's an mp3-encoded stream, meaning it won't work in all browsers equally
(Firefox works natively; Chrome et al. only support ogg/vorbis natively). If it
doesn't, try a desktop application like iTunes or VLC.

The stream is continuously online. But if you don't hear anything then that's
because nobody is currently playing the
[WASM-SYNTH](https://audio.daubenschuetz.de/assets/).

Finally, you're able to "dance" on the Social Dist0rtion Protocol's assembly
dance floor. The rc3 orga was nice enough to allow us streaming audio on our
map. [Click
here](https://rc3.world/rc3/room/93840a8f-88f7-4f11-bb61-68800c4d4962/) to
visit us directly on the rc3.world map.
