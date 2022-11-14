# Existential Challenges of Dapp Builders

If you read my blog regularly, you've probably noticed that I like to complain
about the state of my favorite cryptocurrency: Ethereum. It started years ago
when I claimed that "[shipping to a Proof of Authority network is a bad
idea.](https://timdaub.github.io/2019/02/28/poa/)" I followed it up with two
posts rambling about [how Ethereum's design makes it challenging to build
excellent web applications](https://timdaub.github.io/2020/09/08/web3/) and how
its [finance-oriented market politics ruin dapps for most users as gas prices
keep rising](https://timdaub.github.io/2021/02/22/ethereum-isnt-fun-anymore/).

The context is that I'm trying to build a decentralized app (short: dapp)
myself ([rugpullindex.com](https://rugpullindex.com/)). In that process, I face
challenges that I journal here. Today - big surprise - I'm back with another
one of these! With one that's focused on a pet peeve of mine: Trying to scale
with insufficient technological sophistication.

Here's what's happening right now in the Ethereum ecosystem: Though the Berlin
hard fork and its subsequent block gas limit increase was a success, gas fees
have continued to be insane. Tangible Layer 2 (short: L2) scaling solutions are
[visible on the horizon](https://optimistic.etherscan.io/), but my vision is
blurred - there's lots of new information to take in and process. Having
dedicated significant parts of my career towards finding scaling solutions for
blockchains: I'm trying to reassess where we are. I can't say for now. I'll
need more time and dedicate more research.

![Ethereum gas fees of 1000 gwei per gas from May 21,
2021](/assets/images/ethgasfees.png)

But here's the more significant problem: Not being able to strategically assess
what to build and where is a problem in execution. See, in November, [I started
a project that rates data sets by their market's
quality](https://timdaub.github.io/2020/12/11/rugpullindex/). I'd say it's been
going well so far for anything but the blockchain-related technical components.
The project's eventual idea is to create an ERC20 token akin to an index fund's
ETF that holds multiple assets in a specific quantity. Think of
[rugpullindex.com](https://rugpullindex.com) like an S&P500 but for data sets
instead of American companies.

![A screenshot of my project's website in May 2021](/assets/images/rpiscreenshotmay.png)

I'm burning to make it happen, but I'm struggling to move forward on a
technical level. There are no "technical challenges", as I could build on the
Ethereum mainnet. After all, I'm familiar with the tech, and I'd be able to code
that.

**However, the blocker at this point is of an existential matter: How's Ethereum
going to look like in, e.g., three months, one year, five years?** How am I
supposed to make an informed decision about building on mainnet when I don't
know where it's going to go?

For now, the facts are these: Executing a single on-chain asset swap is in the
range of 100k gas. At times, that can be 500 to 1000 USD in transaction fees.
Multiply that by 10x, and you have the transaction fee for a single rebalancing
of rugpullindex's fund assuming ten assets. Don't get me wrong, for sure, is
there a way to rationalize that action by only executing it when it's
economically sound for its users - e.g., when enough capital uses the index.

However, the problem is that having my product directly dependent on the
Ethereum mainnet's performance may impact its safety and quality.

What if we need to rebalance the index, but the network's congestion continues
to increase, making the product's position permanently economically unsound? An
example: Assume we've distributed the index token to, say, 20 users. It's
financially sound for them to pay a transaction fee of 5$ / month to rebalance.
But then gas prices increase, and now suddenly it costs them 50$ / month for the
same service. Now, for many, it may not be a sound investment anymore. What
about the index's functionality - does it still make sense in that environment?

Of course, I thought deeply about solutions for this. But there weren't a lot
of options that came to mind. Here are two tangible things that developers are
doing these days to avoid the problem:

1. Ship to a side chain.
2. Ship to a rollup.

**About (2) shipping to a rollup**: The problem is that they don't exist yet on the
mainnet. I mean, they do exist, but primarily specialized to a use case.

I could be building on the beta version of, e.g., Optimism's L2 rollup. That
to me, however, is the equivalent of gambling with my time and focus on the
hypothesis that Optimism will indeed ship a conceptually ideal platform for my
decentralized app. Don't get me wrong; I don't doubt that their product will be
great eventually. But there's an undeniable chance that they won't ship what I
need. And there's even a chance that they won't ship at all. Also, I don't want
to make bets when building software. I want to base decisions on facts.

**Then, the answer must be in (1)**, shipping to a side chain-like, e.g., Polygon.
But there are even more significant problems. In fact, I find it incredibly
short-sighted and inconsiderate of many projects in the space to "just" ship to
side chains. It's like taking the easy way out when uploading your contracts to
side chains like xDAI, Polygon, etc..

[In 2019, I argued that the context you in ship matters as it determines your
assumptions when engineering the
product](https://timdaub.github.io/2019/02/28/poa/). I want to double down on
that statement today: When you ship on a side chain, you get a side chain
product and vice versa. That's not a new insight but just another facet of
[Conway's
law](https://en.wikipedia.org/w/index.php?title=Conway%27s_law&oldid=1024184133).

**I think most of us agree that the primary value of the Ethereum mainnet, so
far, has come from the composability of its smart contracts, the possibility of
projects to cross-pollinate, and its liquidity**.

And now I'm supposed to solve high gas fees by shipping on a side chain? I
think we're deliberately ruining all of the above positives to serve our user's
apparent lust for convenience by shipping on sidechains. I consider such a
problem-solving strategy a "don't." That's development driven by instant
gratification and short-term gain. Nothing more.

So then, finally, given this existential execution crisis: how am I supposed to
address the issue? My idea: with direct control and a principled approach.

I know that value is concentrating on the most technically sophisticated
network - that being Ethereum L1 mainnet right now. I know that L2 is superior
from a safety perspective compared to side chains. Transitively, this means
that more value will accrue on L2 than on side chains eventually. I also know
that by either building on L1 or L2, I'll build my dapp "the right way" (from
an assumptions perspective) - but also: that I'll remain in control over my
application's execution environment when shipping towards the mainnet (either
on L1 or L2).

**Finally, it's essential to realize that I won't have to ship towards either
option**. I can invent a third option too. And in fact, that's what I've
started to do.

If my problem is Ethereum mainnet's gas prices, then what can I do to decrease
them? Recently, I gave suggestions that could cut transaction fees in half for
automated market maker apps [by avoiding sending an on-chain `approve`
transaction](https://timdaub.github.io/2021/04/19/ethereum-web3-saving-gas-mainnet/).
I started reaching out to L2 builders to learn more about rollups, too. And [I
spent a considerable amount of my time recently trying to learn more about
rollups and layer
2](https://github.com/rugpullindex/documents/tree/master/research).

![A drawing from my research on rollups](/assets/images/rollupsresearch.png)

It's been an empowering journey of learning so far. I even have an idea of
building a rollup-inspired dapp myself now. One that may not need complicated
off-chain consensus. But generally, the idea has been trying to understand the
technology better to improve my decision-making. I want to optimize the
outcomes of my engineering by knowing and understanding the situation as best
as I can.

**I want to base decisions on facts, not bets, And that's where I am
today. Fingers crossed!**
