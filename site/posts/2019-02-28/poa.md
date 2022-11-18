# Reasons to not ship a PoA network

This story is written in response to “[Ocean on PoA vs. Ethereum
Mainnet?](https://blog.oceanprotocol.com/ocean-on-poa-vs-ethereum-mainnet-decd0ac72c97)”.
In this article, I’ll argue for why I think it is a bad choice to ship to a
Proof-of-Authority network for a project that wants to go permission-less in
the future.

## Introduction

Proof-of-Authority is an algorithm used in blockchains that delivers fast
throughput (tx/s), finality and low fees through a consensus mechanism based on
identity as stake. Both Geth and Parity can easily configured to run on POA. It
allows projects to orchestrate their own networks that run in parallel to the
Ethereum main chain. POA chains can be configured to be public or private. POA
has the following positives:

1. Finality (time for a block to be confirmed), throughput (e.g. tx/s), latency
   and fees can be configured, hence compared to the Ethereum main chain
   performance is significantly increased.

2. The Ethereum client running the POA can essentially be customized such that
   new use cases can be fulfilled. In the case of POA.network’s xDai, Dai is the
   native currency. Transaction fees are paid in Dai. Very cool.

3. POA chains benefit Ethereum. Its main chain is not scaling at this point.
   Even though Plasma (e.g. LeapDAO) and L2 (e.g. Raiden) are shipping, many see
   sidechains (e.g. POA networks) as a viable scaling mechanism.

I introduce Proof-of-Authority chains and their positives. The next section
dives into the problems of POA networks.

## Problems

Firstly, I’d like to say that there’s nothing inherently wrong with shipping on
a POA chain per-se. It’s more about the intend behind shipping to POA chains.

Are you orchestrating a POA chain in your company to issue private tokens for
your employees to send around. Great! Are you shipping a public plasma-enabled
POA chain that allows users to exit the chain fairly. Cool!

I’d like to argue, however, that when your goal is to arrive at a
permission-less, decentralized and transparent network, you shouldn’t ship to
POA first. In the following sections, I’ll argue for why that is.

## Security Guarantees

Proof-of-Authority in a public setting is a bad choice, as it has different
security guarantees compared to a PoW or PoS network.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Imagine how successful bitcoin would have been if Satoshi had launched Bitcoin with a &quot;coordinator&quot; and promised to add decentralisation later, when his research team had figured out how.</p>&mdash; nick.eth (@nicksdjohnson) <a href="https://twitter.com/nicksdjohnson/status/1102455394838822912?ref_src=twsrc%5Etfw">March 4, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

1. Users have to trust in your [wet
   code](http://unenumerated.blogspot.com/2006/11/wet-code-and-dry.html). Or
   simplified: How nodes are run is essentially defined in legal documents. Node
   operators agree to run the nodes according to these documents. If they don’t
   comply, they’ll face legal issues. To my knowledge, no precedence has been set
   in court yet. Note: I’m not a lawyer. Building a system with wet code leads,
   however, to the following properties: (A) It’s not permission-less as in:
   Everybody can, without the incurrence of a cost, to innovate or influence on
   any part of the infrastructure.(B) It’s not necessarily transparent as in:
   Everybody can follow the decision-making processes. (C) It’s not open as in:
   Everybody can choose to join the network without facing gatekeepers.

2. Identity at stake is not a strong incentive for businesses running nodes.
   When the only skin-in-the-game is identity, many node operators fail to even
   get off the ground. An example: Assume you want to run a POA network that’s
   about storing data. You get lucky and convince the Internet Archive to run a
   node on your network. You promise them: “By running a node on our network,
   you’ll easily break even by cashing-in on the transaction fees”. Now here’s
   what would happen: The Internet Archive is not in the business of running
   blockchains. Their core business model doesn’t depend on it. That means, in
   case they fail to run a node for some reason, they have almost nothing to lose.
   OK, then say you convince an aspiring blockchain startup to run a node. They’re
   in the business of making money on blockchains! Well, even though they might
   run the risk of suffering a reputation-crisis, that won’t affect their bank
   account much. Depending on their business model and product, they might still
   be able to make money. Alright, then let’s assume you score one of your
   customers to run a node. Well in that case, they might actually have vested
   interest in keeping the network up and running. Generally, I’d say then: A node
   operator needs to have significant money at stake (or skin in the game) for
   them to be acting in the interests of the network. Hence, PoS or PoW is usually
   a good choice in a public setting.

3. Collusion of entities is likely. To join a PoA network, entities will have
   to email their public keys back and forth. It makes total sense for them to
   stay in touch, as they’re responsible for keeping the network up and running.
   That, however, removes the anonymous nature of running a PoW or PoS network.
   All of a sudden it becomes very easy for entities to collude. Of course,
   they’re legally bound not to, but as we’ve seen from the previous points, they
   might not be incentivized through stake to act in the interest of the network.

4. Token-bridges are centralized. There’s a reason for Plasma to exist.
   Essentially, it allows users to exit the chain in case of e.g. a (Byzantine)
   fault. In Plasma, users don’t need the permission of any authority to exit.
   Exits are facilitated through an on-chain contract that’s tracking balances.
   Token-bridges, in contrast, are likely hosted on cloud providers like AWS by
   the same organization that’s potentially also running a node. This means that
   when a user transfers money to a POA chain, they have to not only trust the
   organizations running the nodes but also organization running the token-bridge!

5. Developers that ship to a POA chain will write different code than
   developers shipping on a main net. The security guarantees are simply
   different. On POA, developers can easily take short cuts without spending much
   time thinking about the horrors of adversarial open networks. Speaking from my
   own experience, when security guarantees change, the code is usually very
   costly (time and money) to port.

Now that I discussed the security guarantees of a POA network, let’s move on to
UX.

## User (and Developer) Experience

Running a POA network is going to give users bad experiences for these reasons:

![](/assets/images/clippy.jpg)

1. Let’s be honest. Today’s users struggle to understand what blockchains are.
   In deploying a separate network (e.g. POA), users will have to additionally
   learn what it is. They’ll have to manually set the endpoint in Metamask.
   They’ll have to always remember when to change the Metamask endpoint and for
   which application. They’ll have to understand what a token-bridge is. They’ll
   have to do the accounting for how much of their money is on the POA net vs.
   main net. Some apps won’t allow setting POA network endpoints. They’ll have to
   understand that even though POA addresses look the same as main net addresses,
   when sending money to a wrong address all their ETH could be gone. Should I go
   on? Ethereum user interfaces are built for the main net. User education happens
   on the main net. In terms of UX, [POA networks are the FTP protocols of
   blockchains](https://twitter.com/Iiterature/status/1099782348562870273).

2. Smart contract composability. IMO, the Ethereum killer feature. Essentially,
   the reason for why we have DeFi today. While token-bridges allow for
   cross-chain value transfer, transfer of state isn’t possible [and likely won’t
   be in the
   future](https://ethresear.ch/t/why-smart-contracts-are-not-feasible-on-plasma/2598).
   I’d like to make this extra clear: A contract deployed on a POA network will
   not be able to interact with a contract on the main network through state (e.g.
   calling functions). Yes, value can be sent through a token-bridge and that
   means one could potentially send ETH/ERC20 from: POA contract -> token-bridge
   -> e.g. Uniswap. Most DeFi requires the calling of contract’s methods, however.
   Not having smart contract composability leads to the following: (1) Developers
   will not be able to plug into your contract APIs unless they also ship on your
   POA network. (2) Your projects will not profit as much from open-source
   collaboration, assuming most developers want to ship on the main net.

3. POA prohibits layer 2 scaling. Most layer 2 scaling solutions are developed
   specifically to solve the problems of the Ethereum main net. On a POA (and
   sidechain), you’ll not directly profit when these technologies get rolled out.
   Instead you’ll have to spend significant time and money to customize them.

## Misc.

1. Building tools and deploying a POA network is work. In fact, it’s a
   distraction. The money you spend on customizing and deploying your POA will be
   wasted once you ship to main net. As outlined before, it will put the engineers
   in the wrong mind set. It’s distracting them from shipping the best product
   they possibly can, I’d argue.

## Solutions

I outline a few possible solutions that remove POA (but not side chains) from
the equation.

1. Ship to main net and wait for e.g. ETH 2.0/Polkadot. Least costly. Best
   security guarantees. Bad performance. UX will be painful but improving rapidly
   as you can profit from the community making progress (e.g. meta-transactions).
   Full focus on shipping product though. No distractions. You’ll profit from
   composability and projects integrating.

2. Ship to main net and investigate alternatives to POA that offer better
   security guarantees to users (e.g. Loom Network is shipping dPoS — node
   operators actually lose money when they misbehave). Not that costly, I imagine.
   Better performance than main net. Better security guarantees. UX will be same
   as POA. You won’t profit from main net innovation as much.

3. Ship to main net and investigate Plasma as an alternative. Most costly and
   complex, I imagine. Good performance. Better security guarantees than POA.
   You’ll profit from the innovation going into Plasma. UX will be as bad as POA
   but through community innovation will increase at rapid pace.

4. Ship to main net and consider L2 via e.g. Raiden. Costly as contracts have
   to be adjusted. Good performance. Better security guarantees than POA.
   Innovation in UX through community at rapid pace.

All the solutions outlined come as “off the shelf” to some degree and with
security guarantees similar to main net. They’re all more or less shipping
today.

## Conclusion

In this post I argue for why shipping a public POA network is a bad choice when
planning to go permission-less in the future by highlighting the security and
UX challenges users will face. I give alternative solutions to POA.

_(This article was originally posted on
[medium.com](https://medium.com/@timdaub/why-you-shouldnt-ship-to-a-poa-network-7e2b5aa83aa9))_

---

published 2019-02-28 by timdaub
