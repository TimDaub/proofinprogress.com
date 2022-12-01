# Multichain sucks!

This year started out with a new year's resolution of using even less social
media than in 2021. As my diet now excludes Reddit and Hacker News, for the
last two days, I've been aimlessly browsing the web in search for interesting
stuff. It's quite boring out there... Do I feel cold turkey? Am I OK???

But for some reason, this morning, I ended up checking out an article of
[thedefiant](https://thedefiant.io/) and saw that they use a neat little site
called "[unlock protocol](https://unlock-protocol.com/)" as a crypto-native
monetization mechanism. I immediately got excited as I love me a simple but
honest implementation of some "future tech." For the definat, the unlock
protocol is a generic paywall they put in front of their posts so that users
are asked to pay before they can access content.

With my curiosity caught, I went on Unlock's GitHub and looked at their code. I
also stalked their employees (as you do, right?) and their founder. In fact, I
suddenly found myself on the [founder's blog](https://www.ouvre-boite.com/)
playing with the Unlock paywall integration (the founder's blog is using it
too). Actually, I was even interested in giving it a shot. The blog posts
sounded interesting, so I tried to become a "member":

![](/assets/images/hyperfollow.png)

Both on Desktop and Mobile, the intergration that Unlock Protocol did with
WalletConnect and Metamask is neatly done. I even had to sign something and I was
guided nicely through the process.

But then came the step that involved paying money and there I was basically
kicked in the stomach. Paying was only possible with xDAI...

![](/assets/images/xdaicheckout.png)

## The Multichain Future is Multi Problematic

See, had my wallet contained xDAI then surely I would have paid for the
article, enjoyed reading it and moved on with my life. But it didn't and so now
I'm upset for missing out on the article but also because I'm realizing that
the problem is far bigger than Unlock Protocol's unlucky checkout page.

It's that the ecosystem has falsely promoted the "multichain is the future"
narrative, without properly thinking about its consequences.

A quick intermittened definition of what I mean by "multichain" is that instead
of picking and transaction on one chain to rule them all (e.g. Ethereum or
Bitcoin), a multichain application would feature support for many different
chains (e.g. Ethereum and Bitcoin and Polkadot and Tezos).

I almost feel reactionary to say this right now, but multichain is really
problematic. And that isn't news.

Already in 2017 and before, some crypto currency enthusiasts went on stages
publicly and proclaimed a "multicoin future" and that later on, it won't really
matter what coins we're transacting with. The same people later proclaimed that
DAI and USDC are to the USD what file formats like .jpg and .png are to images.

Clearly, and also undeniably, there's not only qualitative changes to .png,
.jgp or DAI and USDC - promoting such a reductionistic view point is simply
harmful for everyone wanting to work by applying reason. For sure, there's
something uniquely good about arguing for interoperability; but I remain
skeptical about the motivation's of those that call for it.

A call for a multichain future or a call for interoperability is often just a
competitor's call for taking over market share through moral highground.

## Multichain Has A Terrible User Experience

But that aside, multichain simply has dreadful user experience. Had the Unlock
founder asked me to pay Ether, a widly distributed asset, then far more users
would be capable of also buying. However, since I'm asked to pay xDAI, I'm
implicitly also asked to bridge some amount of DAI (which I may not own either)
onto the xDAI chain. That's where the "Multichain is the future" vision falls
apart for me, because it's just a nightmare.

I just want to consume a simple blog post and I'm not at all interested in
bridging assets to a myriad number of other networks. How much DAI should I
buy? What'll be the transaction costs? How do I bridge safely to the xDAI
network? Hell, maybe I've never heard of xDAI before?

Having money on multiple networks for investing already, honestly, it just
leaves me anxious and frankly I've started losing oversight. A few Satoshis
there, a couple of Weis on ETC... Or was it ETH?

Also: I don't feel comfortable with bridging either. Last time I checked,
bridges are often semi-decentralized and therefore sem-safe. I don't want to
pay the risk of bridging, I don't want to risk my funds during bridging and I'd
appreciate paying as little transaction costs as possible.

So for me, not having a balance on xDAI, would it be more expensive to send
Ether on Ethereum's L1 or bridging to xDAI? Clearly, sending Ether on L1 would
be cheaper. I'd pay more than $5 for the membership in L1 transaction fees; but
onboarding to xDAI I'd have to pay that too.

Now, of course, you could argue that "hey Tim, but once you've bridged to xDAI
your transaction's are cheap". But, I'd like to reject that argument as there'd
only be little probability for your next on-chain action to be xDAI related.
It's because the multichain paradigm doesn't consider factoring in a user's
chain choice.

## Multichain Makes Developer Experience Dreadful too

From the perspective of a developer, the experience is equally bleak.

Unless you've ICO'ed a sick token the other year and, hence, have a shit ton
of shitcoins to pay for coders, really the "Multichain future" is entirely
unobtainable.

Isn't it hard enough to ship something of quality to a single chain already?
Who has time to support five other full nodes, watch three other event
endpoints and write code that works for six different networks but always
slightly differently?

Multichain is or will be dreaded by every developer. But even business types
will eventually start disliking it once they've run the numbers that the
multichain vision also means fragmenting their community. Multichain means less
money for more code. I just don't wanna do it.

## Why Multichain then?

People love the Multichain idea because it allows them to dream of use cases
that'd only be possible if we were further into the crypto currency future.
xDAI, Polygon and BSC offer developers features that are simply unobtainable on
secure and decentralied chains like Ethereum's L1 today. Many are sick of gas
fees, they hate not being able to build their product given high storage costs.

We want what we can't have. We want super fast and cheap transactions. The
future of Unlock Protocol would be so bright if only all blockchain
transactions would finalize so fast as on xDAI. Why can't everybody bridge
their DAI onto it then? Why are we still stuck with Ethereum transactions
costing hundreds of dollars?

But, the proponents of the multichain paradigm purposefully ignore that scaling
blockchain to unsustainable limits [isn't
real](https://vitalik.ca/general/2021/05/23/scaling.html). Decentralized
blockchains can't scale as Polygon does today. They may never scale that well!

And even today, its become incredible costly and hard to run and keep a BSC
node online. Some even say, running a BSC node is "[a lost
cause](https://github.com/binance-chain/bsc/issues/553)".

Additionally, many side chains contain immature and centrally managed code.
Polygon, BSC and others offer dramatically different security guarantees as
e.g. Bitcoin or Ethereum.

Such dramatic guarantees that just recently, a bug that that put
[~9,276,584,332
MATIC](https://medium.com/immunefi/polygon-lack-of-balance-check-bugfix-postmortem-2-2m-bounty-64ec66c24c7d)
(or $20,594,017,217!) at risk, was fixed over-night through [overwriting
Polygon's bridge
bytecode](https://github.com/maticnetwork/bor/commit/488ea2bcb4d9771e05b1fad12d8b86562558aab5).

Ultimately, the multichain paradigm has caught on as the big network's puniness
started showing in last year's hype cycle. But unless we want to reintroduce
databases for managing money transfers, I think it's time to accept that
insecure side chains and the multichain paradigm aren't a quick fix to some of
the space's trickiest problems.

The rule is simple: If a dapp doesn't provide equal or more value to a user
than the current transaction cost on a strongly decentralized chain, then it's
probably not worth building.

---

published 2022-01-02 by timdaub