# Subtractive Problem Solving

I know, usually, this format is rather spontaneous - so presenters don't
prepare talks upfront. But I wanted to promote an idea that I can't freely give
talks about elsewhere, and; It's the idea of solving a problem through
subtraction.

## Negative Sum Games

Look: If I attend a regular tech conference in my field, then usually, a
solution is introduced through addition. So, buy X to solve problem P for
9.99€.  I'm not sure why that is, although I have an idea  - and so it's
probably because you can't sell subtractive problem-solving.

I mean, just think about going to a JavaScript conference with the intention of
convincing people to stop using react.js.  You could say something like, "Hey
👋 Browsers have progressed a lot since react.js was created. Just try using
vanilla JS instead of including react as a dependency."

But then also asking the crowd to open up their wallets, saying: OK, and now
pay 9.99€ a month for this neat advice of NOT using react.js.  Clearly, people
would boo us off-stage. Why would one want to pay for reduction or subtraction?

## Blogologic Problems

So here I was the other day, being frustrated about my blog. It's hosted on
GitHub Pages, and I use this ancient version of hexo, a JavaScript static site
generator, And all it really does is render markdown documents into HTML. 

But I'm also burnt on JavaScript frameworks, HTML5, responsive web design,
PWAs, and what have you.  I'm sick of having to download and use yet another
super complicated tool that brings me this plethora of functionality I'm not
gonna use anyways.  And neither do I want to spend much time figuring out a
nice CSS theme or, god forbid, designing my own site.

## The Magic Lines

And so, while I was contemplating what to do, I remembered a Hacker News post
titled "58 bytes of CSS to look great nearly everywhere," and after some online
searching, I found the CSS snippet again:

```
main {
  max-width: 38rem;
  padding: 2rem;
  margin: auto;
}
```

So I took a markdown render package from npm I was familiar with, added the
render function to my npm scripts, and just ran it on the CLI.

Actually, after playing around for a bit, it worked so well that I then copied
over all my old blog posts into that new project - I also finally got my own
DNS name (and hence migrated from the github.io subdomain).  And I'm now just
hosting the page on a zero-carbon VServer from Hetzner.

## Regaining Control over my (Online) Life

And with these updates, I finally feel in control again of what should have
anyways been mine, to begin with: 

- I now run a website that I almost entirely set up myself.
- I know nearly all components and all code, and most of it is manually maintained.
- I run an nginx and deploy the site with rsync.
- And the CSS and HTML are minimal. The navigation structure and CMS functionality too.

I feel hopeful that this blogging software I created myself in just a few hours
is simple enough that I can maintain it for a very long time - and where I
don't have to deal with upstream major version changes and deprecated packages.

## The Sales Pitch

So having made this great experience that fills me with joy, I now would like
to sell it back to you: Subtractive Problem Solving is nice, and I'm actually
not gonna charge you for this talk. Have fun.

---

published 2022-11-29 as the transcript of a talk given at Hack and Tell at
cbase in Berlin. Written by timdaub.
