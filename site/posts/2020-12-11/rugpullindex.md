# Meet rugpullindex.com, an index fund for data sets

## TL;DR

**TL;DR:** I built a financial index that **rates data sets** by their markets'
performance (**liquidity** and **equality of liquidity shares**). **Check out
the [website](https://rugpullindex.com)** and the minimalistic
[blog](https://rugpullindex.com/changelog.txt), or keep on reading the article.

<img src="/assets/images/rugpullindex.png" alt="A screenshot of the
rugpullindex.com website" style="border: 5px solid #2bbc8a; border-radius: 5px;">

## Why Building a Data Set Index?

**Would you pay a stranger on the internet** to buy a data set they're offering
without knowing them or ever having seen the data? Tough decision! But that's
precisely the type of situation [Ocean Protocol](https://oceanprotocol.com)
users face in its newly-launched decentralized [data set
market](https://market.oceanprotocol.com) [3].

I'll spare you most of the details of how it all works and say this:
2020's most transforming technology has been **on-chain markets**. In
particular, the implementation that [uniswap.org](https://uniswap.org/) is using
called **automated market makers**.

Simply put, they work by incentivizing users to _pool_ a pair of assets at a
ratio they deem as the assets' current prices. These users, I herein call them
**liquidity providers**, e.g., pool 1 ETH and 540 USDC, so that when a buyer of
either asset comes along, they can immediately trade 1 ETH for 540 USDC or 540
USDC for 1 ETH. This principle works fantastically at scale, as the pool
incentivizes liquidity-providing by charging buyers and sellers a small fee,
which is distributed by the pool to each liquidity provider, respectively [1].

<img src="/assets/images/marketmakers.png" style="background-color: white;
border: 5px solid black; border-radius: 5px;">

This model has been so successful that there've been days where
decentralized trading on Uniswap outperformed volumes on Coinbase! Which, of
course, has lots of implications on the cryptocurrency space. I think it's no
overstatement to say that automated market makers may be **the killer app for
crypto**.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">🤯 Wow, <a href="https://twitter.com/UniswapProtocol?ref_src=twsrc%5Etfw">@UniswapProtocol</a> 24hr trading volume is higher than <a href="https://twitter.com/coinbase?ref_src=twsrc%5Etfw">@coinbase</a> for the first time ever<br><br>🦄 Uniswap: $426M<br>🏦 Coinbase: $348M<br><br>Hard to express with how crazy this is. <a href="https://t.co/48o0xRkiUo">pic.twitter.com/48o0xRkiUo</a></p>&mdash; hayden.eth 🦄 (@haydenzadams) <a href="https://twitter.com/haydenzadams/status/1300034164830408704?ref_src=twsrc%5Etfw">August 30, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

But there's one implication I've been particularly keen on exploring: all **the
openly-accessible data produced by on-chain markets**. See, if you ever tried
building a trading bot, you'll have noticed the terrible resolution
publicly-available market data has. You might have also noticed that it's quite
difficult even to find data at all. It's not by accident. **Trading data is
valuable**.

## Rating a Data Set by its Market's Performance

Remember when I asked you at the beginning of this article about **buying a data
set from a random stranger on the internet?** Well, it turns out that Ocean
Protocol is now betting on the same technology that made Uniswap
successful. They allow users to publish a data set, along with a fungible
**data token** and an integrated **automated market maker**. Meaning, you can
now buy access to a data set by purchasing tokens. These tokens get priced by
liquidity providers providing a ratio of OCEAN Tokens to _data tokens_.

However, just because data sets are now available for sale on the market, doesn't
mean you know they're valuable! After all, if ebay.com didn't have a rating
system for sellers, how would you know which seller to trust?

On ebay.com, you know which seller to trust because you can see how many
articles they've sold and what each buyer's experience was. It's a simple
identity-based rating system.

But within the anarchistic world of cryptocurrencies, there are no working
identity-based rating systems! Instead, the space is filled with [sock
puppets](https://en.wikipedia.org/wiki/Sock_puppet_account) and
[sybils](https://en.wikipedia.org/wiki/Sybil_attack). **Then, without buying a
data set first, how are we supposed to know if a data set is valuable or an
outright scam?**

## Introducing rugpullindex.com

That's where [rugpullindex.com](https://rugpullindex.com) comes into play. **We
crawl all of Ocean Protocol's data token pools daily** and rate each market's
liquidity provider distribution by its equality using the [Gini
coefficient](https://en.wikipedia.org/wiki/Gini_coefficient). While ranking
markets based on their liquidity is common industry-practice, calculating a
Gini score for each market's liquidity provider shares isn't. The idea behind
this is that the more liquidity providers with an equal share back an asset in
the market, the less likely it is for a "rug pull" attack to happen (details
[here](https://github.com/oceanprotocol/multi-repo-issue/issues/30#issuecomment-726132174)).
By factoring in a pool's relative liquidity, it allows us to derive a score $s$
that is $0 < s < 100$.

For users of [rugpullindex.com](https://rugpullindex.com), this **yields a
few attractive benefits**:

1. They can now choose to adjust their data set investments based on market
   data.
2. They can decide to invest in data sets relative to their performance on
   to _increase their diversivication and hence lower their exposure risk_.
   And finally;
3. If they're unsure about **sending a random stranger on the internet money
   for a data set**, they can check out the data set's market performance to
   make an informed decision.

It's a widely-known fact that index-based investment yields superior results
compared to stock picking [2]. The same is true when _investing_ in data, which
makes me excited about working on this project.

## What Does The Future Hold?

I have many ideas for [rugpullindex.com](https://rugpullindex.com) and not as
much time as I'd like to have. However, my overarching goal is to make the
ranking so reliable that I can build a smart contract-based index fund on top
of it.

I think that rating assets based on their markets' performance is valuable
occupation in itself. Not only within the data set market but beyond. I'm
particularly interested in rating a wide range of on-chain asset markets, but
I'm also thinking about rating more on-chain intellectual property markets. I'm
eager to crawl more data and explore. Until then, I hope you're having fun
using [rugpullindex.com](https://rugpullindex.com).

_**If you have questions, feedback, or business inquiries, please contact me:
tim@daubenschuetz.de**. If you want to follow along by building journey,
**please subscribe to my newsletter at the end of the page!**_

## References

- 1: [Ethresearch: Improving front running resistance of x\*y=k market
  makers](https://ethresear.ch/t/improving-front-running-resistance-of-x-y-k-market-makers/1281)
- 2: KAHNEMAN, Daniel. Thinking, fast and slow. Macmillan, 2011.
- 3: [Ocean’s on Ethereum Mainnet](https://blog.oceanprotocol.com/oceans-on-ethereum-mainnet-ba9be1aee0ce)
