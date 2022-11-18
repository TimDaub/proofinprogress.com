# Non-Skeuomorphic Harberger Properties may not be implementable as ERC721 NFTs

This post is part of my series, which covers ETHDenver. Today, I had the honor
of meeting with members of the [RadxChange Harberger tax working
group](https://www.radicalxchange.org/concepts/partial-common-ownership/). In
the following sections, I want to iterate on a topic that I deemed relevant and
important in today's conversation that nicely ties into my previous post on
creating non-skeuomorphic ownership experiences.

## The Problem of Private Property

Harberger taxes, a topic extensively discussed in "Radical Markets" and the
Radical Exchange movement, is a mechanism for more fairly pricing a particular
scarce property. The book features an example of the government in California
trying to build a high-speed rail from Los Angeles to San Francisco. And facing
the problem of real estate owners taking advantage of their monopolistic
property possession when asked by the railway constructor to sell their homes.

Weyl and Posner argue that the last remaining property owner along that
high-speed railroad positions themselves monopolistic as, assuming the
necessity for a straight rail, they can leverage their property's geography to
ask for a price almost as high as it'd take to plan and execute an alternative
route or whatever would be the total cost of the entire high-speed rail project
failing.

Within a private property owner's mind, the case is clear: Sell or as high as
possible or drag the whole process out to increase leverage.

## Understanding Harberger Properties

To address this problem, Weyl and Posner argue that a different way of pricing
real-estate in California could help build the high-speed rail project more
efficiently. Their suggestion is based on the idea that each real estate is
continuously available for sale and where the owner is voluntarily setting a
self-assessed price on which they have to additionally pay a reoccurring
percentual fee: The "Harberger tax."

![](https://github.com/rugpullindex/libharberger/raw/master/assets/harbergerschema.jpg)

If, e.g., there was a 0.2% Harberger tax on California homes and an owner would
self-assess their property to be $100k, they'd be required to pay $$100000 *
0.02 = 200$$ USD worth of Harberger taxes. Interestingly, both the property
being continuously on sale and the tax needing to be paid incentivizes the
owner to evaluate their property at the possibly most accurate price.

If they'd assess it too low, since it's always on sale, it could be easily
picked up by a property flipper while it'd incur unsustainable reoccurring
Harberger taxes if it were priced too high.

## Harberger Property forks Private Property.

What I deemed to be an interesting talking point in today's meeting on
Harberger taxes at ETHDenver, however, started as a discussion around measuring
a property's turnover rate. Given that setting a property class's tax rate well
may have to be adjusted dynamically; one argument was that naturally, a
property owner always has the lowest possible tax rate at interest.

It makes sense intuitively too. While arguably living in a "Harberger
universe," so a place where all property is priced using Harberger taxes
creates meaningful collective outcomes, a rational individual understanding the
monopolistic qualities of private property must want to either lower or abolish
their Harberger tax as it'd mean being able to increase their property's value
(without incurring higher total tax costs) or improving their uncertainty of
continued ownership.

## "Harberger Escapes"

So in that case, and since we're heavily hypernormalized in a private property
society, a fenced-off Harberger Property system that, e.g., can be created with
smart contracts on Ethereum would always end up having to make sure that
property owners don't "escape" from the "Harberger universe" into the realm of
"private property."

The California railway example goes like this: Assume you're the last
Californian property owner, but the state had prior agreed-upon Harberger
pricing. However, through a loophole in the law, you're able to change the
property owner's name on the deed of ownership. You understand the private
property principles, and you're a degen, so you give Wall Street a call and
explain to them your situation: You tell them that you're the last person on
the high-speed rail needing to sell the property: But you don't have enough
capital to sustain pricing it high until the railway construction company gives
in to your demands.

In that case, Wall Street might give you a loan, or since your property is
"alwaysonsale", they might buy it from you right away for a higher than usual
rate, assuming they can further increase pressure on the railroad constructor.

Now, in the constructed case of a wet-code law that allows for appropriate
recourse, that may mean that indeed the property will end up being priced
better under Harberger law than as private property.

However, e.g., Harberger properties implemented on Ethereum, that may not be
the case. And that's where the group today had, I think, a slight disagreement.

## Is ERC721 compatible with Harberger Properties?

Consider the case where we create an ERC721 NFT that is continuously on sale
using Harberger tax mechanics but still is entirely compliant with ERC721. In
that case, e.g., that `transferFrom` method might allow sending the deed of
ownership from one account to another. But, it also allows an owner to make an
internal accounting transfer where they sent their property from one of their
accounts to another.

We want to allow an owner to send their deed of ownership from one address to
another as, e.g., their keys get compromised. Although, this "maintenance
functionality" may then easily be abused by owners wanting to "Harberger
escape" into private property: By selling their property over the counter for
more than what it is worth to a buyer, the seller profits from the premium
while the buyer profits from lower taxes.

While it is true that this deal may be fragile as the information the private
agreement was based on could easily leak, and hence the property picked up by a
sneaky arbitrageur, I still believe "Harberger escapes" into private properties
could become a reality.

I understand my attempt at playing devil's advocate is not ideal yet. However,
I feel that it's rather just a challenge of finding a well-enough positioned
new owner with just enough opposed interest in Harberger-taxed property. E.g.,
if it wasn't enough to keep the deal's basis a secret, then, e.g., a malicious
buyer's hedge could be some bet directly opposed to the railroad company's
success: e.g., shorting its stock.

## Do we need an ERC721 2.0 for Harberger Properties?

Despite all this skepticism, I'm still a firm believer in the idea, while I
believe it'll have to carefully be implemented as a fenced-off system for it to
work. An elegant solution I have not explored further came from the [Geoweb
Network](https://www.geoweb.network/) team that suggested only ever allowing a
smart contract to truly "privately possess" the property.

It's because what this would allow is anyone being always able to "pick up" the
property, particularly in the case of leaked alpha. However, it'd mean
restricting the ERC721 token's `transferFrom` function only to be called by the
Harberger tax management contract. Assuming marketplaces like Opensea would
recognize this limitation in the collection, it wouldn't pose a problem,
whereas I still see the issue of not complying with ERC721.

There's an implicit private property assumption in ERC721's `transferFrom`
function that'd always allow the current owner to send the token to another
address. Interfaces like Metamask and Opensea are built with those assumptions
in mind. While technically approving the transfer with the managing Harberger
contract may be a possibility, I still believe that to cause trouble and
confusion.

Given our hypernormalized suffering and our need to further build
non-skeuomorphic ownership models, I'd like to argue herein that we should look
beyond ERC721 and ERC1155 and do everything necessary to abandon the
assumptions of private property in all Ethereum infrastructure. Ethereum (and
its standards) should "get weird," and it shouldn't be opinionated about
property laws: Those should be programmable or configurable.

Today, I feel grateful for having been given a chance to participate in this
mind-opening meeting and work on such awesome intellectually-challenging work.
It's great to be here, Denver!

## See also:

- [github.com/rugpullindex/libharberger](https://github.com/rugpullindex/libharberger)

---

published 2022-02-19 by timdaub
