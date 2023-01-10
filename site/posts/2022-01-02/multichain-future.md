# Why I don't believe in a multichain future

As my year 2022 started out with a new year's resolution to reduce my social
media consumption, and since my information diet then contained less Reddit and
Hacker News, I aimlessly browsed around the web in search for anything
interesting.

But for some reason, this morning, I ended up checking out an article in [The
Defiant](https://thedefiant.io/) and saw that they use a neat little site
called "[Unlock Protocol](https://unlock-protocol.com/)" as a crypto-native
monetization mechanism. Wanting to try it out, I immediately got excited.

After some research, I realized that the Defiant uses the Unlock Protocol as a
generic paywall put in front of posts to monetize their content. So with my
curiosity caught, I clicked on the dialogue to pay for the article. And for
both desktop and mobile, the check out process is neatly done.

But then came the step that involved paying crypto currency and that's where
the process sadly fell apart. Paying was only possible with xDAI, a currency I
didn't own.

![](/assets/images/xdaicheckout.png)

## i.

Which brings me to the title of this post, namely my argument for why I think
that the multichain paradigm sucks.

See, had I owned xDAI, then surely I would have completed the process to pay
for the article. Now, faced with the currency compatibility issue, instead I
feel frustrated. I would have liked to read the article.

But the problem I want to highlight is bigger than the Defiant's checkout page:
It's that the ecosystem has carelessly promoted the "multichain is the future"
meme, without properly thinking about its user experience challenges.

Already at crypto conferences in 2017, some enthusiasts proclaimed a
"multichain future" publicly, saying that it wouldn't really matter with which
coins we'd be transacting with. An argument I saw on Twitter was that DAI and
USDC were akin to image formats like .jpg and .png.

But undeniably, there are not only qualitative differences between the PNG and
JPG format. But promoting such reductionist view point is hardly useful either.
Now, perfect interoperability between USDC and DAI would indeed be amazing; but
considering that in today's on-chain world we're not achieving it between two
tokens on the same ledger, it will take years before _achieving it across
ledgers_.

Sadly, I suspect that a call for a multichain future or for perfect
interoperability between chains is often an ETH-competitor's call for taking
over market share through deceiving marketing.

## ii.

But that aside, multichain has bad user experience too.

Would the Defiant accept Ether, then far more users would be capable of paying
for their articles. But since we're asked to pay xDAI, I'm implicitly asked to
bridge some amount of mainnet DAI onto the xDAI chain. And that's where the
"Multichain is the future" vision falls apart for me, because doing so is (1)
costly, (2) risky and (3) time-consuming. Instead, as a Defiant reader, I want
to consume their content. The payment is a means to an end.

But even if I were to hold some funds on side chains or L2s, having balances on
multiple networks becomes overwhelming quickly and I fear to lose oversight.
Neither do I feel comfortable with bridging. I don't know much about a
particular bridge's implementation. I know that they are often
semi-decentralized and that they are big honey pots for attackers. To pay for
an article, I'd prefer to not take this risk and not make the risk assessment
in the first place.

But there is an additional argument for why I think the xDAI integration of the
Defiant's checkout page isn't ideal. To steelman their argument for why xDAI is
a better fit than ETH mainnet, I'd propose that xDAI fits better considering
its lesser transaction costs. It'd awful for the Defiant reader's experience
would they have to pay 25€ in transaction fees just to unlock a 5€ article.

But the irony is that to bridge DAI to xDAI also has significant transaction
cost which are potentially even higher than just sending ETH to an address on
mainnet.

Now, of course, you could argue that once bridged to xDAI, all follow-up
transactions will be cheap. But, I'd like to reject that argument as there
would only be a small probability for your next on-chain interaction to be on
xDAI again. It's part of the multichain paradigm, to be fluid between chains.

## iii.

From the perspective of a multichain developer, the view is equally bleak.

Unless you've successfully ICO'ed a token and, hence, have a lot of liquidty to
pay a team, for individual developers the multichain future is hard to deal
with.

As an individual, already shipping code to a single chain can be a challenge.
Having to deal with multiple deploy targets, running more than one full node or
watching several event endpoints can quickly become a complex distributed
system.

Multichain is dreaded by individual developers. But my prediction is that even
business types will start disliking the idea once they've run the numbers and
understand that the multichain meme is a force of fragmentation.

It means less money for more code. Less composability, more security issues and
further transaction fees for bridging.

## iv.

Many love the multichain vision because it allows them to dream of future
crypto currency use cases. A future were we could store social information
on-chain and wouldn't have to rely on centralized social networks anymore.

xDAI, Polygon and BSC offer developers features that are simply unobtainable on
secure and decentralized chains like Ethereum's mainnet today. And many
developers understandably are convinced by those side chains' value
propositions. They're fulfilling their users' requests for reducing transaction
costs.

But the problem is that those who cheer for the multichain paradigm
purposefully ignore the issue of sustainably scaling block chain networks.

Considering Ethereum's rapid state growth, how can a project like Polygon with
a fractionalized cost for storage be as decentralized and secure sustainably?
It already costs me 200€/month to run an Ethereum L1 node: So what will Polygon's
node running costs be in a few years?

Yes, they have demonstrated that increasing throughput is possible, but even as
[Vitalik remarks](https://vitalik.ca/general/2021/05/23/scaling.html), it comes
at the cost of decentralization and scalability.

## v.

The multichain paradigm has caught on as the big network's puniness started
showing in last year's hype cycle. But unless we want to reintroduce databases
for managing money transfers, I think it's time to accept that insecure side
chains and the multichain paradigm aren't a quick fix to some of the space's
trickiest problems.

The rule is simple: If a dapp doesn't provide equal or more value to a user
than the current transaction cost on a more strongly decentralized chain, then
it's probably not worth integrating or using.

---

- published 2022-01-02 by timdaub
- rewritten 2023-01-10 by timdaub
