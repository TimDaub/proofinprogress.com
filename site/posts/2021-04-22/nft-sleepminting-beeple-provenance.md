# What Is Sleepminting And Will It Ruin NFT Provenance?

Today, while browsing /r/ethereum, I stumbled upon an impersonation attack
using NFTs called "sleepminting." I ended up taking a closer look as I wanted
to understand the idea of the attack. Here's how it works.

## The Bait

Oh, look, it's beeple's multi-million dollar piece "[the first 5000
days](https://rarible.com/token/0x5fbbacf00ef20193a301a5ba20acf04765fb6dac:40914:0xc6b0562605d35ee710138402b878ffe6f2e23807)"
for sale on rarible. Check the screenshot, It clearly says "Creator: beeple."
Wow,
[Metakovan](https://www.reuters.com/article/uk-auction-christies-nft-buyer-idUKKBN2B42MM)
must have gotten badly rekt having to sell that $69M combo-breaker for a
handful of [WEIs](https://eth-converter.com/).

![](/assets/images/rariblesleepminting.png)

Please don't fall for it! It's a scam. Or shall I saw an [art
piece](https://nftheft.com)? That's right! Its creator, **Monsieur Personne**,
that also goes by the self-proclaimed alter ego _The Banksy of NFTs_,
deliberately minted the piece under beeple's name using a technique he calls
**sleepminting**. Why? Because Monsieur is disappointed in NFTs. So how did he
do it?

## The Basics

NFTs are created using ERC-721 smart contracts. They the ownership record of
NFTs as a list of pairs. One address and a piece's serial number make up a
pair. Like this (I replaced "Bob" with "Booble"):

- Alice: 1
- Booble: 2
- Malory: 3

Upon a sale, Alice can transfer her piece to Boople by:

- transfer 1: Alice ==> Booble

Now, the list of pairs is updated as follows:

- Alice:
- Booble: 2, 1
- Malory: 3

In Ethereum, we don't use clear names for identification but addresses. And we
need to sign transfers to authorize them. But in the examples provided in this
post I'll use clear names to simplify explaining.

Now, usually developers implement ERC-721 contracts in a reasonable way. As we
expect Alice can then only transfer a piece if she owns it and can deliver a
valid signature. But what happens if a developer doesn't respect this
convention?

See, the ERC-721 standard is just a social contract that defines a interface to
allow art platforms to interoperate. There's no criteria for what's a good and
what's a bad implementation. As long as a contract's interface matches that of
an ERC-721 contract, any machine is considering it as valid.

But, as we've now seen, that can lead to safety issues with NFTs' provenance on
Ethereum. It can be tampered with!

## The Attack

As I said, any reasonable ERC-721 contract would allow a minter only to mint to
themselves and to only transfer the pieces they own.

But say we customize our ERC-721 contract such that we can mint to other
accounts. And say that we adjust the transfer function so that our account can,
in a minor exception, also transfer another person's pieces. **Well then, we
can build a contract that allows us to sleepmint pieces**. So as the attacker
Malory, we'd do the following: We'd mint a piece with the serial number 1 to
Booble:

- mint 1: address(0) => Booble (executed by Malory)

Now our pairs look as follows:

- Alice:
- Booble: 1
- Malory:

Then, since Malory has adjusted the contract to transfer the piece with serial
number 1 from Booble's account to any other account, she can offer it for sale
on an NFT platform like rarible.

As she minted from `address(0)` to Booble as "Creator: Booble" is displayed.

![](/assets/images/rariblesleepminting.png)

Once Malory successfully deceived a buyer, she receives her Ethers and
transfers the piece to the buyer:

- transfer 1: Booble => Buyer (executed by Malory)

The updated ownership record now reads:

- Alice:
- Booble:
- Malory:
- Buyer: 1

And with that, Malory has successfully tampered with the NFT's provenance
record to sell her piece for more than it's worth.

## The Specifics

So is this attack breaking NFTs? Should you panic sell your collection of
crypto punks? What about poor Metakovan. He rekt now?

I'd say no. Sure, rarible and Etherscan state wrongly that beeple has minted a
piece that genuinely he didn't. However, that's more of an interface issue than
it is a security vulnerability. Nobody ever had access to beeple's account.

Also, the impersonater can be spotted when taking a closer look at the origin
transactions:

- [Fake mint transaction](https://etherscan.io/tx/0x57f23fde8e4221174cfb1baf68a87858167fec228d9b32952532e40c367ef04e)
- [Fake transfer transaction](https://etherscan.io/tx/0x57f23fde8e4221174cfb1baf68a87858167fec228d9b32952532e40c367ef04e)

Let's take a closer look at these transactions.

![](/assets/images/etherscansleepminting.png)

For the mint transaction, we can see that Etherscan displays two "From" fields:
One for which `msg.sender` sent the transaction and another one to state the
NFT's sender.

For the transaction's from field, the `msg.sender`, it _cannot be manipulated_
as it requires a valid signature from the sender's private key. The
authorization of the "From" field for the NFT's sender is, however, subject to
the smart contract's implementation and, hence, may not display authenticated
information.

Simply put, the NFT's sender field could display any data an attacker picks.

Hence, to spot a sleepminted piece from an original, one has to check if both
the mint transaction's sender and the NFT's sender match beeple's correct
address. If not, it's a fake.

## Conclusion

I love this attack. It's similar to [rug pulling](https://rugpullindex.com) in
that it also plays with the user's trust towards an online identity. We think,
now that we use blockchain, all our web2 problems are gone. Every piece of data
is authenticated and checked for authorization. But the truth is that these
problems aren't gone. They've just shifted somewhere else.

We humans cannot reproduce cryptographic verification in our brains. Sure, we
can be extra careful and only trust green checkmarks and lock symbols in user
interfaces. But can we recompute hashes of files or the validity of a digital
signature? No.

And so the rise of new attacks on web3 is inevitable. I for one am looking
forward to learning from them.

---

published 2021-04-22 by timdaub
