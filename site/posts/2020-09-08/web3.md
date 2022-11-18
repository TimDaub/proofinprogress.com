# web3 is a stupid idea (🔊)

<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1205435200&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/timdaub" title="timdaub" target="_blank" style="color: #cccccc; text-decoration: none;">timdaub</a> · <a href="https://soundcloud.com/timdaub/web3-is-a-stupid-idea" title="Web3 is a stupid idea" target="_blank" style="color: #cccccc; text-decoration: none;">Web3 is a stupid idea</a></div>

---

A long time ago, I gave a talk in front of a full audience talking about
BigchainDB, a company I worked for to create a (scalable) decentralized
database. As we just had released our browser-compatible JavaScript driver,
enthusiastically, I told the audience: "... and so by using our driver from
within the browser, your app won't need a backend anymore"!

That must have been around 2017 when I first discovered Metamask, and started
drinking Ethereum's web3 cool-aid. Arguably, web3 quickly became
something extraordinary. All of a sudden, users could download a browser
extension and directly interact with a public network. In a sense, it still
is extraordinary.

If you have an extension like Metamask installed in your browser today, you can
visit sites on the web that allow you to do the craziest things with your
digital money. An excellent recent example of this are DeFi (short for
"Decentralized Finance") websites. They allow a user to engage in trading
cryptocurrencies, providing liquidity, and peer to peer lending. With the
click of a button and no mandatory signups, you're able to pool thousands of
dollars. That is super cool and confirms the viability of the web3 vision.

But actually, what is the web3 vision? It may be that there never was such a
thing in the first place. All I know is that someone named a library "web3.js".
Developers use it to talk to remote or local Ethereum nodes when working in a
browser environment (JavaScript).

On a web3-enabled website, when a user now clicks a button to, e.g., pool ether
in a smart contract, most calculations are supported by the web3.js library
that periodically talks to an Ethereum node. Ultimately web3.js allows the user
to send the transaction to the node to transfer the user's money.

Often, a key-management program, like Metamask, is running on the user's
browser. It allows the user to sign transactions with the same key on different
websites.

In a nutshell, that's web3. It's supposed to be a play on words regarding "web
2.0". Web 2.0 is the upgrade of web standards that gave us modern single-page
applications and dynamic AJAX loading. And Web3? An advancement towards what
exactly? Money websites?

Indeed, if you were capable of cleaning your mind of specific memories,
specifically, let's say you could do `grep -l web3 brain | xargs rm`. And then
someone asked you how you'd envision a blockchain-based and
smart-contract-enabled web3; you'd likely describe an ecosystem vastly
different to what it is today. You'd think about peer-2-peer networks, light
clients, and renewed web standards. That's precisely not web3.

In today's experience it will instead be mostly shitty react websites that
crash or stop working when you've neglected to install Metamask (or other
key-management plugins). Opening a web3 website's network console, you'll see
that it's making an excessive amount of RPC request to an Ethereum full node.
Sorry, I meant to say Infura node, a hugely-popular cloud provider hosting
Ethereum full nodes. That's kinda stupid.

And since Metamask allows developers to prompt the user for specific contract
calls, what's even more stupid, is that all your money may be at the risk of
continually getting stolen with the accidential click of a button. Either by
someone hacking the website's server. Or by the website provider
becoming corrupt themselves. Or simply because a website pretends to do X when
it does Y (stealing all your money).

But instead of continuing to rant, I'd now like to now point out what I think
should change about web3:

- We should stop building key-management plugins and start thinking about a
  standardizable web API. We must stop training our users to install shitty
  browser plugins!
- We need to make light clients work as soon as possible and become independent
  from third-party services like thegraph and Infura.
- We need to improve our client libraries (ethers.js and web3.js) by
  dramatically simplifying them and making them bug-free (god damn it!)!
- We need to take advantage of some of the blockchain's fundamental properties.
  Most data is immutable so let's start caching things.

And finally, I think we should stop focusing all of our attention on bumping
the web's version number. Maybe we should reconsider writing more backends. We
should promote more work on permissionless networks like Open Gas Station
Network that allow developers to upgrade a user's experience. And, we should
start thinking of a machine network of blockchains more often. In many ways,
web3 was just a cool demo. But let's come up with something better. Just
imagine what happens once there's a deeper integration of money into computer
systems!

---

published 2020-09-08 by timdaub
