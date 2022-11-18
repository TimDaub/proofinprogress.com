# I got 99 problems but `SameSite` cookies ain't one

Browser vendors like Mozilla or Google have introduced new default values for
the `sameSite` attribute when setting browser cookies [1]. While this change is
great for preventing third-party tracking through cookies, it can make a
developer's life quite frustrating when wanting to debug a local front end
pointing to a remote server.

Especially, when Chrome and Firefox give confusing or no warnings at all. Here's
an example of Chrome complaining:

![](/assets/images/chrome_samesite.png)

In Firefox, there'll likely be a small warning in the console:

```
Some cookies are misusing the “SameSite“ attribute, so it won’t work as expected
```

## The Problem

For me the problem was the following: I had a staging server running online. It
contained sample data that I preferred using to test my front end over a local
backend server.

There's a similar problem that developers run into with this type of setup:
CORS. I usually encounter it either when:

- I host front end and back end on different domains
- I spin up a local front end development server and connect it to a backend
  running online.

That problem, I tend to prefer solving it by downloading a browser plugin that
temporarily disabled CORS. The recent `sameSite` cookie attribute change,
however, is different in that it's recent. I only found limited information
about bypassing it online. There are no browser plugins yet either. Still, it
can be easily fixed by modifying some settings in your browser.

## Disabling sameSite policy in Google Chrome

1. Navigate to `chrome://flags/#same-site-by-default-cookies`.
2. Set _"SameSite by default cookies"_, _"Enable removing SameSite=None
   cookies"_, _"Cookies without SameSite must be secure"_ to `Disabled`.
3. **Make sure to restart Chrome.**

When trying your `Set-Cookie` request, the yellow overlay in the
request inspection tab should now be gone and your cookies should show up in
the "Application" tab.

## Disabling sameSite policy in Mozilla Firefox Developer Edition

Go to `about:config` and make sure you have the following settings
[2]:

```
network.cookie.sameSite.laxByDefault: false
network.cookie.sameSite.noneRequiresSecure: false
```

## Conclusion

Issues with blocked `SameSite` cookies in local development environments can be
fixed by temporarily disabling sameSite policies in Firefox and Chrome. To
learn more about the `sameSite` cookie attribute, check [`sameSite` cookies on
MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite).

## References

- 1: [Mozilla Hacks: Changes to SameSite Cookie Behavior – A Call to Action for
  Web
  Developers](https://hacks.mozilla.org/2020/08/changes-to-samesite-cookie-behavior/)
- 2: [Answering my own question on StackOverflow about disabling SameSite
  cookies in
  Firefox](https://stackoverflow.com/questions/65130753/disable-samesite-cookie-policy-in-firefox-developer-edition/65130891#65130891)

---

published 2020-12-03 by timdaub
