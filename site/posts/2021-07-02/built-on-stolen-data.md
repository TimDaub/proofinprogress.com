# Built on Stolen Data

A few days ago, GitHub released a new tool for developers called
[CoPilot](https://copilot.github.com/). It's a software plugin for text
editors as [VSCode](https://code.visualstudio.com/) that allows developers to
"Just Hit Enter" to autocomplete the code they've written so far. I recommend
checking out CoPilot's [website](https://copilot.github.com/). Their showcases
are pretty incredible.

In fact, they're so awe-inspiring that I had a few chats with people about it
in recent days. "Man! We're the next to get replaced by AI!" and so on, where
the initial reactions. I'm sympathizing with those emotions - but I was also
fairly skeptical. I immediately had doubts about that bot helping me write
helpful unit tests - which I find the most tedious and analytically-laborious
task in writing software. I don't think it'll understand different testing
contexts.

But some people on the Internet managed to get ahold of this program quickly
and started exploring its outputs. Suddenly it became conceivable that the
"public" data GitHub had used to train CoPilot may include restrictively
licensed code like those residing under ,e.g., the
[GPL](https://www.gnu.org/licenses/gpl-3.0.de.html).

Someone pointed out on Twitter:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">github copilot has, by
their own admission, been trained on mountains of gpl code, so i&#39;m unclear
on how it&#39;s not a form of laundering open source code into commercial
works. the handwave of &quot;it usually doesn&#39;t reproduce exact
chunks&quot; is not very satisfying <a
href="https://t.co/IzqtK2kGGo">pic.twitter.com/IzqtK2kGGo</a></p>&mdash; eevee
(@eevee) <a
href="https://twitter.com/eevee/status/1410037309848752128?ref_src=twsrc%5Etfw">June
30, 2021</a></blockquote> <script async
src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Shortly after, another person followed up by having CoPilot generate the
infamous [fast square root
algorithm](https://github.com/id-Software/Quake-III-Arena/blob/dbe4ddb10315479fc00086f08e25d968b4b43c49/code/game/q_math.c#L552)
from Quake III ([GPL
licensed](https://github.com/id-Software/Quake-III-Arena)).

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I don&#39;t want to say anything but that&#39;s not the right license Mr Copilot. <a href="https://t.co/hs8JRVQ7xJ">pic.twitter.com/hs8JRVQ7xJ</a></p>&mdash; Armin Ronacher (@mitsuhiko) <a href="https://twitter.com/mitsuhiko/status/1410886329924194309?ref_src=twsrc%5Etfw">July 2, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Indeed, the later tweet author even tricked the auto-completion algorithm into
suggesting a license for the code as well.

Now, I think it shouldn't come as too big of a surprise that the inputs of a
machine learning algorithm can reappear as fragments in output later. I guess
that for ML-generated images, our brains are just not good enough to compute
matches. Hence, we credit most contemporary algorithms as "pretty original". In
contrast, it seems relatively easy for code-copy-cats to be debunked.
Particularily, when this one suspicious-looking random-ass hex value
"0x5f3759df" is auto-suggested.

For me, what I found much more scandalous is, however, this other dimension
where it appears we've caught Microsoft stealing from all GitHub users. Could
it be that it simply had dumped all sorts of restrictively licensed open source
code (including MINE!) into their model? Could it be true that they're now
profiting by stealing from my work?

That'd be outrageous! And so, as I was informing myself some more, this subtle
anger - triggered by my sense of justice feeling hurt - started growing.

It only got worse when I read more Hacker News comments. Specifically, one
which claimed that many image recognition algorithms were likely just trained
with copyrighted image data too. I mean, I don't even know what to say about
that.

Indeed, now when I'm writing these lines - it's so absurd - I feel like
doubting myself. Is it really that bad? But see, for me, it didn't even occur
until now that training a model on copyright-protected images is _an option_.
My most prolonged understanding of how these models were built was: (1) Launch
a successful social network. (2) Setup shitty T&Cs. (3) Harvest data from
users _legally_ (but maybe immorally).

However, to now learn that a giant like Microsoft dares to just release a
product built on looting is genuinely a shock. Particularly when considering
that I could be part of the wronged ones. Or; that I could be part of the damaging
party by having accidentially used such an illicit algorithm .

Right now, it feels absurd. I'm classifiying the usage of copyrighted content
in machine learning as deeply immoral and illicit. Involuntarily, an image of a
blood diamond comes to mind.

I think it should be illegal and pursued to distribute such a piece of code.

**Edit on July 8, 2021:**

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">oh my gods. they literally have no shame about this.<br><br>GitHub Support just straight up confirmed in an email that yes, they used all public GitHub code, for Codex/Copilot regardless of license. <a href="https://t.co/pFTqbvnTEK">pic.twitter.com/pFTqbvnTEK</a></p>&mdash; ✨ Nora Tindall 🪐 (@NoraDotCodes) <a href="https://twitter.com/NoraDotCodes/status/1412741339771461635?ref_src=twsrc%5Etfw">July 7, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

---

published 2021-07-02 by timdaub
