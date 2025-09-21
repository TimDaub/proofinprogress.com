# The Biggest Coding Mistakes I Made Building Kiwi News

Kiwi News is my 2.5 year old startup project. I blog about its bootstrapping
over at [Bootstrapping Kiwi](https://bootstrappingkiwi.substack.com/). Kiwi is
supposed to be an Ethereum-based Hacker News clone that cannot be taken hostage
by its operator as all user data is constantly copyable by a network of peer to
peer nodes.

Controversially, it is a [code base](https://github.com/attestate/kiwistand)
entirely written in vanilla JavaScript. By many criticized as a bad choice in
this day and age.

I started the project right around the time when ChatGPT was released, and
among my peers I was one of the few people who vibe coded from the get go. I'd
paste whole files in the ChatGPT interface and have it generate code for me
that I'd then copy back into vim. 

Later, when better tooling became available, I switched to
[gpt-cli](https://github.com/kharvd/gpt-cli) before becoming aider and Claude
Code pilled. 

The part of KN that's entirely handwritten is the p2p consensus
algorithm. Its tests as well as the entire implementation was painstakenly
written during an incubator phase in the US where I figured out how to
build a set reconciliation algorithm using the libp2p library.

The idea to write a blog post talking about the biggest mistakes I made with
Kiwi News came to me during bed time. "This would click really well with some
of my more technical followers", I thought. That is as I have had countless
arguments already about the code base and how I ought to change it.

So in the following, I'll talk about my biggest regrets.

## Mistake #1: Build on top of Ethereum.

Throughout most of the project's existence I've been a diehard fan of Ethereum.
I liked the project for its simplicity and elegance and for its visionary
idealism around improving a complex system like finance for the better.

Ethereum's price rise in 2021 made me a lot of money and I somehow started to
feel indebted to its community. I built Kiwi News with a sense of optimism in
Ethereum's expansive capability. I basically used all the money given to me in
Ethereum's price rise to build Kiwi News. With Ethereum's core layer becoming
more and more corrupted, I felt that contributing to Ethereum by strengthening
its social layer through Kiwi, I'd do a good deed to improve the project's
longevity.

And indeed, in the first years Ethereum also provided for me and my cofounder.
We'd get public goods funding for our work and this helped us build without
having to focus on getting a real job.

In the beginning, I built Kiwi News being convinced that if the project would
pass the Ethereum maximalists's purity tests then this would be my entry ticket
into the upper echelons of its community. I also thought that this would be a
brilliant go-to-market strategy and that Ethereum maximalists would be easily
pursuated to switching from X and other platforms to Kiwi News, given that its
guarantees and economics were much more meaningfully than the big tech
alternatives.

However, none of this did ever happen. I credit a couple of reasons for why I
think catering to these people proved very difficult for Kiwi News:

1. The purity test is dynamic and continuously increasing. The purity has to be
   proven repeatedly and over time. The factors of the purity test are changing
   and so as soon as you sail out with a project trying to capture new
   territory, some of the elite's goals might shift during your journey, making
   it extremely difficult to keep catering to them.
2. The "number go up" goal is more important than anything else. With Kiwi
   News, for example, we'd frequently get discriminated against as we take
   transaction volume off chains and into our own network. This is seen as
   detrimental to furthering the Ethereum ecosystem's goal as the network's
   stop loss is how much money can be made from rent seeking in the consensus
   algorithm.
3. The Ethereum community is too immature with regards to caring for consumers.
   In fact, I also think this has a political dimension where someone in the
   Ethereum community might even entirely reject the idea of "consumption," and
   therefore will also reject simplifying applications to cater to really dumb
   user behavior. 
4. There is no prestige for building visually beautiful things. Ethereum
   maximalists do value beautifully designed things like developer interfaces
   and beautifully written code. But they do not seem to have a sensor for
   recognizing really beautifully visually designed UIs and applications. Or,
   in any event, that sensor is much less developed than other sensors. Heros
   in the Ethereum community are consensus researchers and DeFi hackers.
   Consumer application developers aren't celebrated or made famous. They're a
   risk factor to incumbents' power.
4. The L2 roadmap is just bad. Everyone knows it and talks about it offline.
   But admitting it is like failing one of the above mentioned purity tests.
   Admit it and your project will stop receive attention or funding. Not a good
   environment to build the best possible system.

Now, the above can be interpreted as if I'd try to blame the Ethereum community
for my own failure to build a good product, which is not my intention at all!

I want to continue building Kiwi News and so in general I don't failing to
attract the Ethereum community as a proxy for failing to build Kiwi News
entirely. 

I do, however, want to stress that I think it was a major mistake to build
foundational parts of the Kiwi News architecture on Ethereum. I would have
wished that the Ethereum community would have grown by now much more aware of
its UX failings. I expected that we'd now have flawless UX, beautiful and
fully-working wallets and that we'd have a much more diverse set of
applications other than the handful of DeFi that has proven to work.

My pragmatic advice for someone who still wants to cater to the Ethereum
community would be that if you think you've been an integral part of the
Ethereum community already and that you feel very much like them, then I think
you'll have a good shot at succeeding at building a product for them. 

If you, however, ever so slightly feel like not belonging, I'd strongly suggest
to not even try, unless you want to spend years as the outcast screaming
towards the core.

## Mistake #2: Chosing the wrong templating language and frontend stack.

The Kiwi News frontend has a server-side rendering part which is implemented
using [developit/htm](https://github.com/developit/htm). To enable dynamic
functionality of UI components after the page has loaded we insert React into
"islands" of the website. This means we'll insert a React root, for example,
into a specific button on the page to make it load or send information
dynamically.

This turns out to produce a lot of boilerplate. It also makes maintenance of
styles quite cumbersome.

As a decade-long-experienced frontend developer, I should have known better.
But at the time, I had felt so depressed by the frontend ecosystem that I
decided to go frontend-framework-less entirely.

Think about it this way: If you need a client-side JavaScript button on the
website then you'll have to build that button's styling on the server in
an entirely separate file. And then you'll have to name that button e.g. with
an ID or a class. The client-side JavaScript will then seek out this button
with a query selector to replace it with a React root that enables the
client-side JS functionality.

Surprisingly, this works really well and it's also super simple. But it is also
a real pain if you want to avoid layout shifts.

I decided for this approach as it is a principle I started living by during
coding, which is that I prefer explicit and visible code over abstracted-away
framework magic. A apparent benefit of this approach is that you can literally
just trace through the code base and find how everything works. It'really plain
and stupid and this is why I favored that approach over a more complex one.
That said, it is starting to become a bit overwhelming after 2.5 years.

## Mistake #3: Building a website, not an app.

While being a major regret, I think this one has been a life lesson I managed
to cope well with.

I started my career as a web developer as this was always more accessible to me
even before I started computer science. I didn't even consider building an app
for Kiwi News in the first place. In fact, I loved the idea of an open web so
much and where anything is accessible using links that I really built the
entire project around that: link sharing. 

But building the product as a website and as part of the web not only
preselects a style of solutions, it also brands the product differently. The
truth is that consumers socially value websites as much less desirable than
apps in my experience. It's not something you'll hear them say outloud. But
it's certainly a perception that many have.

Seeking advice from designers, I'd hear them say that I should try to become
more like an app and I'd counter "but we are an app!" pointing to the PWA icon
on my phone. But consumers' mental model of an app is far different from the
distinct lines we software developers draw. 

If I could, I'd probably really start building Kiwi News first and foremost as
an app. I'd then invent the tech to make the app work.

## Conclusion

I don't expect there to be any common wisdom to be drawn and synthesized from
these three mistakes. I didn't write the article to arrive at that conclusion
either. 

I guess I hope that by writing and publishing this, however, I gain the
confidence and the inspiration to move on from these regrets in some way.

For what concerns the Ethereum community, I'm not proud of what I say about
them, but I feel like it is a necessity for better story telling and to share
what I truly think deep down that makes me publish this. I do think they're an
annoying cult and I wish I could just exit their sphere of influence.

---

Published by timdaub on 2025-09-20
