# Hey Ethereum, Let's Break Solidity's Composability!

**Written by: [pinkiebell](https://github.com/pinkiebell) and
[TimDaub](https://twitter.com/timdaub).**

Composability is a quality of EVM-based smart contract singletons to expose an
immutable and openly-accessible API. The property of composability in
Ethereum-based smart contracts paired with the tokenization of assets made it
possible to create Decentralized Finance (short: "DeFi"), crypto currencies'
greatest driver of innovation yet.

If "2022 is the year of the DAO", then all years prior were probably "the years
of financial composability" as this unique property of smart contracts has
given rise to the most innovative monetary applications developers have ever
seen before.

But **is it time to move on from Solidity-level composability?** Is it worth
breaking it for the sake of scalability and utility of the overall Ethereum
network? A discussion.

## Composability, software's greatest property?

First of all, the concept of composability isn't new, and EVM-based languages
didn't invent it either.

We argue that most readers will likely be intimately familiar with the last big
composability paradigm shift in software engineering. It was all web developers
agreeing on making their web APIs RESTful.

By using JSON and being mindful of the shared state on the web, we managed to
successfully scale the web into a broadly-useful network of services. It's why
today, most programming languages ironically include the "**JavaScript** Object
Notation" (short: "JSON"), as with the adoption of the REST composability
paradigm, it has become the most popular serialization format.

We, hence, define the term composability independently from EVM-based
interfaces. We say that two distinct pieces of software are composable when
their interfaces allow them to be used together.

Given that definition, we argue that properly semantically-versioned open
source software is "composable," as are POSIX-compliant tools.

Still, Solidity smart contract composability differs as it does not only allow
programs to collaborate on managing information but money. Hence, Ethereum's
composability property is innovative as it enables gluing together various
financial applications.

However, in the past month, we've come to realize that today's composability of
EVM-based contracts more of an obstacle than a beneficiary feature to all.

## DeFi, Ethereum's "Poster Child"

We probably don't have to convince anyone of the greatness of DeFi. But for any
crypto hodlers awaking from cryostasis, YES, Ethereum's killer application has
been found, and it's DeFi.

DeFi is such a great killer application that it has started to impact the
viability of other use cases on Ethereum. It's because it has made using
Ethereum very expensive.

See, the problem is in DeFi degen on-chain trading. Before the advent of
automated market makers (short "AMM"), using Ethereum was fairly cheap, with
transaction fees ranging from a few cents to maybe a dollar or two.

Only with the "recent" influx of on-chain trading has it become widespread and
rationally accepted that any transaction goes for as long as it's profitable.
If you inspect the chain today, you'll find that some traders in the past took
on massive costs to execute trades with only dubious profit. To draw an extreme
picture, we argue that it may technically be rational to pay the equivalent of
999 ETH in transaction cost just to make back 999.000000000000000001 ETH
(difference: 1 WEI) of profit in the process.

It's because traders can control Ethereum's transaction atomicity and
profitability to a fair degree until the very moment of execution. In contrast
to an intransparent order book of a centralized Wall Street exchange,
Ethereum's transaction pool is entirely inspectable by any participants,
allowing them to "guarantee" certain results.

And beyond just that, much more is possible through specifying conditions in
Solidity (and recently MEV):

```sol
require(profit > msg.value, "non profitable trade")
```

## Gas-change is real!

At this point, it should hence not surprise anyone when we claim that
market-based pricing may not reflect the inclusion of external costs.

On Ethereum, the egoistic behavior or running every DeFi trade possible as long
as it's profitable comes with the external cost of forcing less viable projects
to migrate to, e.g., other chains. Is that digital gentrification?

For sure, though, it's a real problem that has led to shifting dynamics in the
world of software development.

While it may have formerly been acceptable to put the entirety of a dapp's
transactions on-chain, today, it's a really bad idea. Heuristically, it has
come to mean that if a decentralized application doesn't provide the equivalent
value of, say, DeFi provides to traders, then this non-DeFi application is
likely to have a hard time competing for viability - given its enormous gas
costs.

A striking example of this may have been the abandoning of Aragon and the
simultaneous rise in popularity of snapshot.org voting. While Aragon used to
put all transactions on-chain to implement a mixture of token voting and
multi-signature wallet, today's snapshot.org off-chains the whole vote by
default and leaves solving the multi-signature use case to others (e.g., Gnosis
Safe).

But by and large, the above-described dynamic visualizes the space's greatest
problem well: It's that if your non-financial application isn't capable of
providing similar viability to DeFi, then we're better off not building it on
Ethereum.

## Future State Will Be Expensive Too

Those who understand the dilemma of scaling blockchains, as, e.g., Vitalik had
laid it out in one of his blog posts [1], also must realize that state being
competitively-priced isn't going to go away in the future.

Not to say that it may eventually get cheap when we all start owning
super-fancy quantum computers. But until those unlikely inventions become
realities, we'd argue that state will remain expensive. It'll stay expensive on
Ethereum, and the market will take care of equating prices between peripheral
chains like Polygon.

For those that don't understand or value the original concept of storing state
on blockchains, it may continue to be cheap. After all, there's always a
database or less secure chain to store it on.

But for those that value the guarantees that Ethereum and other projects were
built upon, state will continue to be competitively priced.

## Why We're Arguing For Breaking Solidity-level Composability

In the end, breaking composability with Ethereum smart contracts can mean many
different things in practice. Rollups and L2 contracts exemplify composability
paradigms being actively broken and "moved upwards." Yes, calling "through to
L2" will one day be a possibility; but other roll-up architects may want to
consider more extreme variants to increase scalability.

We, the authors, have experimented with breaking composability for the sake of
reducing gas costs by selectively applying some principles used in roll-ups
too. While roll-ups have come to define themselves as a combination of
trustless bridges and on-chain data validation, through experimentation, we
found that breaking composability can significantly reduce contracts' gas costs
by deliberately applying L2-scaling strategies to regular L1 contracts.

In this article, we call for breaking the Solidity-level composability as,
e.g., adding gas-optimizations to the Solidity compiler or using, e.g., sparse
Merkle trees as alternative state storage may indeed save significant levels of
gas for the user but can lead to incompatibilities with traditional contracts
that rely on the composable Ethereum message call interface [2].

If e.g., we'd break the composability of ERC20 tokens and allow those contracts
to batch validate transfers, we'd make everyone in DeFi unhappy as we'd now
require everyone to submit their transactions through an off-chain sequencer
rather than the standard (& composable) Solidity call interface.

Suddenly, calling a third-party contract's `transferFrom` would stop being
straightforward. As composability was broken on the Solidity level, it'd likely
require us to set up a sequencing server as well.

We want to argue that we believe that making deliberate breaking changes to the
ecosystem's architecture would benefit it over the long term. We think the
current stateful composability paradigm for L1 contracts blocks scaling, and
new solutions will have to be discovered.

Distributed systems have a high computational overhead in comparison to their
centralized counterparts. Thus, using those systems only for the minimum viable
enforcement is a requirement if we want them to be the "World's Computer." As
developers, we must agree and accept that on-chain state and its validation is
a scarce resource and should be treated with economic care. Posting data to the
blockchain is cheap; transforming and storing it is expensive.

Hence, we propose to move the composability to another layer without
sacrificing security to receive better scaling results.

**Written by: [pinkiebell](https://github.com/pinkiebell) and
[TimDaub](https://twitter.com/timdaub).**

## References

- 1:
  [https://vitalik.ca/general/2021/05/23/scaling.html](https://vitalik.ca/general/2021/05/23/scaling.html)
- 2:
  [https://github.com/rugpullindex/indexed-sparse-merkle-tree](https://github.com/rugpullindex/indexed-sparse-merkle-tree)
