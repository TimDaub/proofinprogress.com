# Six unpopular opinions about software standard development

"Situation: There are x+1 competing standards."

If you're reading this, I assume you know which meme I'm talking about. But my
problem with that comic, or rather with those that excessively post it in
online forums to further their case that divergence is bad, is that they
fundamentally misunderstand the attention market dynamics that standards are
built on.

"There are now x+1 competing standards" is a good thing because it means any
implementor looking at those x number of standards can choose carefully which
one best fits their use case. And I must stress here: If you're implementing a
standard X that solves your use case A but that also undifferentiatedly solves
for use case B and is hence willing to make compromises towards solving B,
then, respectfully, I think you're doing a bad job at engineering. A useful
solution S to a problem P is only solving problem P and not problem Q. Any
other interpretation is a failure to separate concerns - as Dijkstra knows.

And that previous reasoning is in line with the often proposed argument that
standards development must always be structurally convergent: Hence factoring
in concerns of all the standard's stakeholders and generally seeking to find
the smallest common denominator is considered appropriate.

I think it is a fatal fallacy of our generation of software engineers (or even
humans): The unreflected and undoubted assumption that convergence is always
morally-sound (or "good") because, really: It's complicated. That's why I like
pluralism and intersectional feminism: They're divergence-compatible
philosophies and can produce great outcomes!

But even respected engineers fall prey to the convergence=good kind of zero-sum
thinking: For example, Moxie points out the impossibility of upgrading the
email standard for encryption because its decentralization brings about
divergence in implementation. Still, potentially unconsciously, Moxie's project
Signal is standardizing around a protocol for encrypted communication: The
Signal Protocol. And that is my next point: That upgradeability of standards is
often falsely expected.

Here's the axiom: A standard's killer feature is that the standard never
changes. That's because if a standard is essentially immutable, that means
implementers can reliably integrate it, and their software's compatibility is
guaranteed in the future. Hence, an upgrade that changes the standard would put
an implementer's software compatibility at risk: And so ideally, standards
never change - they never upgrade. And this is not to say that major version
changes that break compatibility can't exist: IPv4 and IPv6 exist; the same is
true for various versions of HTTP and other networking protocols.

But in the case of blaming the email protocol for still being unencrypted, I
think it's really unfair to blame the standard or its process.

Email is unencrypted because some value-extracting tech companies are
controlling large parts of the infrastructure, and there is a systemic problem
with gatekeeping that suppresses innovation. Sure, you can say: "It's the
standard that is bad!" But Google and others truly "stop the ecosystem from
moving."

In reality: we could have encrypted email as a standard if we really wanted it:
But we don't have it, so I guess we're collectively fine with that. And anyway,
I use Signal to share truly private information, lol.

Finally, I want to move to my biggest pet peeve about creating successful
standards: It's the popular belief that mainstream adoption creates authority
for standardization. As with any general assertion: This one isn't universally
true, and its why - sure, we have a web components standard now, and it is
essentially a generalization of react components, but really the killer
standards over the past five years have been the EIP-20 and EIP-721.

So it is surprising that the legend of "mainstream adoption creating authority
for standardization" lives on: EIP-721 was literally created when there was no
market for NFTs but crypto kitties. At the time, sure, it looked like there was
"some" ecosystem behind it: But really, if we're talking in today's terms: When
EIP-721 was finalized, NFTs were born, and only now, several years later, we're
seeing mainstream adoption.

So, in fact, it is the exact opposite: The standard generated a Schelling point
and a tension for projects and their implementers: "If we implement EIP-721 for
our digital property, we're making a bet on the future of our app's
compatibility, and potentially our NFTs will be used more."

To conclude this post, in summary, all of the above points in short: (1)
Divergence in standards development isn't automatically bad. (2) The more
differentiated a standard, the more useful it may be to its implementors. (3)
An attention market for standards is good and leads to good outcomes. (4)
Upgradability for standards is achievable through incompatible changes. (5)
Standards innovation can happen through substitution (Email => Signal or
Bitcoin => Ethereum), and that's OK. (6) Surprise, mfs! There is no 1-sentence
truth to how to develop a successful standard, and going for mainstream
adoption isn't guaranteed standard adoption.

Idk. Writing this felt a bit like ranting. But sadly, I see that there is so
little reflected thinking and genuine commitment towards standardization: most
efforts are directly profit-linked: And so often, you get people to say those
empty phrases like: "Mainstream adoption then standardization." So it felt
necessary to just put this out there for people that feel misunderstood like
me! Thanks for reading!
