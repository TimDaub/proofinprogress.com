# The Kiwi News badge is a weird mix of an NFT and a Soulbound token


Before all the fun around the Kiwi meme on Farcaster and deciding to use it as
a brand name for Kiwi News, I had worked as a freelancer for clients and, in my
free time, on Soulbound token specifications for the Ethereum Magicians. I did
that until when a client contacted me wanting to adopt my specification around
ERC-4973 "Account-bound tokens," and so I consulted with them for a while and
speed-ran also another standard document in that period, called ERC-5192
"Minimal Soulbound tokens."

Original, with respect to all my prior work problems, by speccing out the
Soulbound tokens docs, an issue that always seemed to resurface was Twitter
calling out the ill-intended purpose of the token design by, for example,
comparing it to Herpes, as you also can't get rid of it. The fundamental design
flaw those critics pointed out in the specs was that these tokens could no
longer move addresses through transfers once sent to their minter. I had
purposefully called them "account-bound," as that was what they were, bound to
an EOA account. 

And while many criticisms were valid, they focused on addressable flaws that we
had managed to fix already in the first iterations. But that didn't matter as
people had made up their minds about Soulbound tokens - and that since they
were considered evil, the Ethereum community must not have them.

Feeling quite discouraged and misunderstood, I quietly quit my voluntary work
on ERCs in the Magicians forum and looked for diasporas not overcrowded with
newly minted privacy hall monitors. Coincidentally, I found Farcaster, joined
it, and suddenly had a community of fun people surrounding me, with none of
them having a main character aura surrounding them.

This was at the time of FTX's collapse and when I started thinking that we, the
old guard, were now asked to report for duty by stepping into the limelight and
mending the now-expanded space's issues. Driven by that, I wanted to be more
serious about founding a project and taking it all the way. In the following
months, I went to the US to participate in an accelerator, and I built the Kiwi
News peer-to-peer network protocol that I then shipped two months ago.

But Kiwi News's badge, which lets you upvote and submit links - a kind of gas
mechanism to bribe node operators to store your data - is really a mixture of
an NFT and a Soulbound token. While it works onchain just like any other NFT,
meaning you could sell it on OpenSea or send it to a new address, it also has
the above-mentioned gas-mechanism functionality which allows users to upvote
and submit new links: but only for signatures of the NFT's minter addresses!

If you buy one of our NFTs on Zora today and submit a new link to Kiwi signed
by that address, everything works as expected. However, if you transferred the
NFT to another address and upvoted a link from there, the peer-to-peer nodes
wouldn't accept it. They've made it their consensus, at least for now, to only
store the data of those addresses who originally _minted_ the NFT - and that
hence excludes any secondary addresses who just received it by transfer.

I wanted to tell this story because it seems essential to me. I sank a lot of
private time into the SBT specs - for which I, fortunately, was also
compensated in Optimism's latest RAPGF round. Still, I felt misunderstood by
some of the community, painting a picture of us wanting to reign in a
privacy-nightmare dystopia. By introducing the above-mentioned primitive, I
find myself redeemed from the criticism. I'm excited about what the future will
bring for Kiwi News, and I hope to contribute more to a token stack that makes
it more costly to defect.

---

published 2023-06-26 by timdaub
