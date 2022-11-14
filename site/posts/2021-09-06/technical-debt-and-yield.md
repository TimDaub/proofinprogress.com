# On "Technical Yield" (and Technical Debt)

In software engineering, when there's a lack of budget or time, we do things
improperly. I'd argue that for most code I've written, there's a hidden ideal
of that code failing to come to fruition. Objectively speaking, any code can
hardly be ideal. As there's no universally aesthetic poem or an infinitely
funny joke (except in the Monty Python universe), so is there no
hyper-functional piece of code.

<iframe width="560" height="315" src="https://www.youtube.com/embed/FBWr1KtnRcI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Funnily enough, we engineers, hence, say that when code passes from development
into production that it has become "_legacy_." Legacy, herein, is being used as a
synonym for the financial term of liability.

Legacy code is problematic as it can slow us down in the present, as it can
forcefully direct budgets towards maintenance and since its structure mandates
what is and possibly can be.

But when, during development, we take deliberate shortcuts to pump code into
production with more velocity, then this type of behavior may later qualify as
_incurring technical debt_.

Having had no professional background in any financial domain, as a junior
software engineer, I liked to talk about technical debt as exactly described
above. I'd think that a bad piece of code that requires maintenance symbolizes
technical debt. Never did I dive into the epistemic definition of the term:
**debt**. Why would I - debt had never been a relatable topic of mine.

But more recently, by taking on more financial work through building
[rugpullindex.com](https://rugpullindex.com), I've come to realize the
powerfulness of painting the full picture that is _technical debt_. On my walk
here, it came to my mind that for technical debt to incur, the _borrower_ must
engage in a deliberate process of _collateralizing a piece of
[scope](https://timdaub.github.io/2021/06/18/when-scope-blows-up/)_.

In practical terms, what this may mean is that, e.g., a software engineer
neglects unit testing their code. Considering that unit tests increase
confidence about a software's correction after changes occur, now suddenly the
SE (or borrower) traded in future confidence for improved short-term progress.
If suddenly no testing is required, adjusting a small piece of software is
quicker and cheaper to send into production.

However, the catch is that now their debt position starts accumulating
_negative interest_. In case a month later, the engineer wants to make another
change to the code, it now means that adjusting it already became more complex.
Since no tests are available and because their memories about the code's
functionality have faded, how can the engineer ship the adjusted code into
production with confidence?

They can't. And the most damning part is that at this stage, many engineers
fold, accept their fate and start incurring even more debt.

![When I googled "debt spiral", this royalty free image of a sausage came up.](/assets/images/debt-spiral-sausage.jpg)

And that's the ingenuity I found when thinking about technical debt. Not only
is it a synonym for a piece of code that is bad. Rather it's a term to express
that a few lines may carry huge liabilities for whoever has taken
responsibility to maintain them. It's really debt, in the financial sense.
Except that its deleveraging will take place through various proxies.

But the real reason I sat down to write this blog post wasn't because of
technical debt. But because, logically, when there's debt - **there also has to
be technical interest or yield**.

So in a way, it's funny that many of us are constantly obsessed with continuous
shipping, when instead, clearly, there's also **yield** to be harvested from
great engineering. And intuitively, I believe it exists. There's definitely
that one brilliant and well-oiled machine producing incredible yield for its
owner.

My mind wanders from the image of a combustion engine to the invention of
higher-level programming languages and computers and to all the brilliant
physical and chemical breakthroughs that allowed us to engineer around many of
our life's inconveniences. I'm thinking of the thousands of hours that planes
are in the air without crashing much. The countless lifes that have been safed
by airbags. Refrigerators, washing machines, light bulbs.

Initially, many things were likely produced, incurring technical debt. However,
seeing the immaculacy of some engineered concepts: I can't think but believe
that when there's technical debt, there's also the option for technical yield.

And so I hope through this rhetorical discovery, in the future, I'll code more
things properly to **stack yield and not debt**.
