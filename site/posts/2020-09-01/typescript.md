# TypeScript is weakening the JavaScript ecosystem

In recent months, I've noticed a dramatic increase in TypeScript packages
on GitHub. I usually come across them when checking repositories of the
people I follow like. Or, when I'm looking for dependencies to solve a
problem in my projects. And the more TypeScript packages I'm encountering,
the more often I get reminded of this little annoyance towards the project.

My context is that I've not looked into TypeScript yet. That means I have no
idea how it works. Unfortunately, this is now starting to become kind of a
problem when searching for dependencies.
It does, when I either willingly or accidentally include a TypeScript package
into my projects. Mainly because my package-choosing criteria include:

- picking packages that I potentially can contribute to (e.g., a lesser-known
  package that contains well-written code); or
- picking packages that are well-maintained by a large community but may
  include code that I'd not be able to easily contribute to (e.g., a popular
  package using a C library internally)

I've put these criteria in place willingly to achieve a certain quality
standard when building applications. Either because I can fix bugs myself
quickly, or because I'm able to rely on a strong community to fix them.
However, with TypeScript packages in npm, there's now this opaque problem of
not knowing the language or quickly telling a package's language and its
community size. Also, TypeScript could be just another CoffeeScript.

So essentially, the problem is that TypeScript authors publish their packages
on npm, the package manager for Node.js. And to me, that's what is weakening
the JavaScript ecosystem. Since its inception, and throughout trends like
Coffeescript, npm has mostly held the promise of only hosting JavaScript
packages. However, this promise is `rejected()` (lol) by many authors
publishing their TypeScript-to-JavaScript transpiled packages.

Indeed, it makes sense considering that Microsoft markets TypeScript as a
"superset of JavaScript" and since it "compiles" to JavaScript, why not publish
packages to npm? But in terms of equality and identity, TypeScript is not
JavaScript. After all, you'd not consider C and Objective-C the same either, or
would you? In both examples, the languages are subsets/supersets but were
conceived with different goals in mind to solve other problems.

Therefore, TypeScript authors should, in my opinion, do something along the
following lines:

- namespacing their TypeScript packages; or
- build and publish their packages to their package manager.

However, continuing to publish TypeScript packages to npm is, in my opinion
weakening the JavaScript ecosystem as it's splitting its community and
polluting the npm namespace.

## Controversy

- For a short time, there was an [intense
  conversation](https://news.ycombinator.com/item?id=24344506) on Hacker News.
  But for unknown reasons, my post got marked as `[flagged]`. I've written an
  email to the operators.
