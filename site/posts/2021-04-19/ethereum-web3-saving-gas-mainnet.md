# Saving Gas on the Ethereum Mainnet

To an Ethereum developer, it shouldn't come as a surprise that Ethereum's
mainnet gas fees are insane. For months or weeks now, ERC-20 transfers and
decentralized exchange (short: "DEX") swaps have come in at roughly $50 in
transaction fees. Suddenly finding myself affected by the situation, too, I
took to the pen to publicly claim that "[Ethereum isn't fun
anymore](https://timdaub.github.io/2021/02/22/ethereum-isnt-fun-anymore/)." And
while some say that [flashbots](https://github.com/flashbots) and the rollup
rollout may make matters more bearable, it's my opinion that it'll be another
while.

But then how's a practical software engineer supposed to solve the solution?
Indeed, my inner VC would blab something like "[Apps => Infrastructure => Apps
=>
Infrastructure](https://www.usv.com/writing/2018/10/the-myth-of-the-infrastructure-phase/),"
but is that genuinely actionable advice for builders?

I've tried convincing others that Ethereum's infrastructure could be better. My
take: [Light clients could help to save
gas](https://rugpullindex.com/blog#ScalingEthereumOneTxAtATime). However, I'm
neither too influential in the space nor can I have canons full of VC fiat to
further my ideas. So then what's left?

## Following Pieter's advice

It's always a good idea to trust the legacy knowledge of a dead person, right?
Well, let's say, at least they won't have much of a chance of turning out to be
an idiot on Twitter later simply because, you know, they're dead and hence
can't tweet.

But putting that tangentant/weird thought aside for a second, here's one of
Pieter Hintjens' great ideas: "**Don't have a technical vision. Solve
problems!**" [3]. OK, so gas prices are too damn high. What can we do about
it?

Well, hear me out, **how about... we make transactions use less gas!**

![](/assets/images/unwantedadvice.png)

And how do we make transactions use less gas? We do so by reducing the usage of
expensive [EVM opcodes](https://ethervm.io/) in our blockchain scripts. Or by
sending less transactions. Hence, the rest of this post summarizes my research
into how to use less gas.

## A Problem: Wasteful `approve` Transactions

On April 18, 2021, Ethereum processed 1,396,766 transactions, of which 915,104
(65,5%) were ERC-20 token transfers [1, 2]. Having an ERC-20 contract interact
with another contract (e.g., a DEX) means that there will be an
[`allowance(address owner, address spender)`](https://docs.openzeppelin.com/contracts/2.x/api/token/erc20#IERC20-allowance-address-address-)
transaction first _before_ transferring any value from A to B.

But why is that? See, conceptually, an ERC-20 token is a script that runs as a
singleton on Ethereum. It's akin to an ordinary object (as in "Object-oriented
programming," short "OOP") but technically called a "contract" (as in "smart
contract"). A developer constructs it upon deployment to chain. Other contracts
like automated market makers are, too, built like singletons.

Further, this means that a contract can own state and make it selectively
accessible. It's similar to how classes work in, e.g., JavaScript. There's a
state variable, and we must access it through getters and setters.

```js
class Store {
  constructor(a) {
    this.a = a;
  }
  set a(value) {
    this.a = value;
  }
  get a() {
    return this.a;
  }
}
```

Hence, for an object `store,` that is an instance of the class `Store`, we
wouldn't be able to directly access `this.a`. Instead, we can only set it using
its setter method. Hence, we have no control over `this.a` from the outside.

EVM languages like Solidity and their token contracts (e.g. ERC-20) use this
exact logic to transfer tokens between parties. Do you want to send one from A
to B? Sure, then to move your token, call the contract's setter function
[`transfer(address recipient, uint256 amount)`](https://docs.openzeppelin.com/contracts/2.x/api/token/erc20#IERC20-Transfer-address-address-uint256-)
to edit the underlying mapping between addresses the number of tokens they own.

Now, the problem of having to call the `allowance` function before making a
`transfer` arises when interacting with a token through a third-party contract.

A typical use case is to swap two tokens on a decentralized exchange. As it has
to send back the counter pair of your swap (e.g., you trade WETH for USDC),
it'll have to guarantee to receive your WETH when its sending out USDC in
return.

Hence, when a user calls a DEX's swap function, the DEX will contact the user's
token contract to [`transferFrom(address user, address DEX, uint256 amount)`](https://docs.openzeppelin.com/contracts/2.x/api/token/erc20#IERC20-transferFrom-address-address-uint256-)
to ingest the user's WETH and then transfer its USDC to the user.

As all of this happens in a single and atomic transaction, that will fail if
any of its sub-operations fail, a DEX contract can ensure the safety of
swapping of two tokens. However, since the swap contract has no authority over
setting another user's token balance by, e.g., calling [`transferFrom(address user, address DEX, uint256 amount)`](https://docs.openzeppelin.com/contracts/2.x/api/token/erc20#IERC20-transferFrom-address-address-uint256-),
an upfront [`approve(address DEX, uint256 amount)`](https://docs.openzeppelin.com/contracts/2.x/api/token/erc20#IERC20-approve-address-uint256-)
transaction is required.

That's why you have to do two transactions when you're starting out trading on,
e.g. Uniswap.

## Quantifying "wasteful"

Still, you may say that an `approve` transaction may only have to be sent once
for a given token and a third-party contract. And that's an acceptable
hypothesis. But let's look into how wasteful that is.

We can do so using the logs of Ethereum called "events." To query for them, we
take an event's function signature and hash it using
[Keccak-256](https://emn178.github.io/online-tools/keccak_256.html).

```
keccak256("Approval(address,address,uint256)")
> 8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925
keccak256("Transfer(address,address,uint256)")
> ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef
```

Using [Dune Analytics' brilliant API](https://duneanalytics.com/queries/35211),
we can then query all of last week's logs in Ethereum (from block
[12230342](https://etherscan.io/block/12230342)) to find how many `Approval`
and `Transfer` events there are. Comparing
[`Approval(address,address,uint256)`](https://docs.openzeppelin.com/contracts/2.x/api/token/erc20#IERC20-Approval-address-address-uint256-)
and
[`Transfer(address,address,uint256)`](https://docs.openzeppelin.com/contracts/2.x/api/token/erc20#IERC20-Transfer-address-address-uint256-)
events there were. It's

- 41759397 `Approval` events; and
- 445308438 `Transfer` events.

Of all Ethereum `transfer` transactions last week, it means that 9,4% signaled
an `Approval` event. Assuming that the goal of every `Approval` event is a
future `transfer` transaction, then 9,4% of `transfer`s still require an
upfront on-chain `approve` transaction today. Put differently: Approving
transactions before a transfer is a potentially wasteful practice that we can
optimize to save the Ethereum network roughly 10% of transaction fees.

## Gas-Saving Improvement Proposals

Indeed there are a few canonicalized ways to avoid upfront `approve`
transactions. Using [ERC-2612](https://eips.ethereum.org/EIPS/eip-2612), an
additional `permit` function allows a user to sign and relay an approval
message offline. In turn, that allows skipping the need for an on-chain
`approve` transaction. A battle-tested implementation is available in [Uniswap
V2's ERC20 token
script](https://github.com/Uniswap/uniswap-v2-core/blob/master/contracts/UniswapV2ERC20.sol).

Another way of forgoing an additional `Approval` is by implementing either
[ERC-677](https://github.com/ethereum/EIPs/issues/677) or
[ERC-777](https://eips.ethereum.org/EIPS/eip-777). Both of these proposals
detail an extended `transfer` function that, upon calling, would reach out to
the receiving third-party contract to update its state too solving the problem
of having to send two on-chain transactions.

## A Call for Further Work

Shaving of gas from transactions or shrinking transaction processes seems like
a helpful method for significantly improving a dapp's user experience and for
unclogging the Ethereum mainnet.

The above-quoted Ethereum Improvement Proposals look useful to generate gas
savings today. They should be implemented by contract owners ASAP.

However, I feel there's a need for further work in this direction. Using
compression and indexing techniques, I'm sure there are additional economically
sound gas-saving opportunities.

In case you are the author of an approach or the finder of one, please make
sure to forward them to me via email (tim (at) daubenschuetz (dot) de). Please
consider subscribing to my newsletter too. Thanks!

## References

- 1: https://etherscan.io/chart/tx
- 2: https://etherscan.io/chart/tokenerc-20txns
- 3: HINTJENS, P. Social architecture. Peter Hintjens, 2016.
