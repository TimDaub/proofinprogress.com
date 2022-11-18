# Sending COVID-19 Vaccination Appointments in Telegram

My good friend and collaborator [Alberto Granzotto](https://www.granzotto.net/)
recently started helping to get people vaccinated at home in the Italian
Regione del Veneto. He has helped deliver 16 shots, with 173 sleeves already
being rolled up and ready for vaccination.

Since my move to Berlin in 2015, Alberto and I have been collaborating on
projects. But with [Serenissimo](https://github.com/vrde/serenissimo), a
Telegram bot that books COVID-19 vaccine appointments automatically, Alberto is
on a personal mission.

**T: I've heard you're helping get people vaccinated now. How come?**

A: I wanted to get my mom vaccinated. She's 74 and had become frustrated with
trying to book a vaccination appointment online. So I decided to help her.

**T: What was the problem?**

A: To get vaccinated against COVID-19, she had to visit a website provided by
the Regione del Veneto and book an appointment first. The process is as
follows:

1. She goes to the official website
   [https://vaccinicovid.regione.veneto.it](https://vaccinicovid.regione.veneto.it)
   to find the public health office where she's registered. Then;
2. she enters her data.
3. If there is an available spot, she can reserve it and get vaccinated.
4. If there is none, she has to go back to step number one.

To receive her vaccine, my mom started constantly checking the website but
ended up getting frustrated by having to enter her information over and over
again.

<img src="/assets/images/regionevenetoit.png" alt="A screenshot of Regione del Veneto's vaccination booking website.">

**T: So what did you do?**

A: I asked myself how I could help to improve the situation. I thought: Why not
reverse the communication structure? Instead of constantly having to check the
website, why not have a computer do the laborious work?

**T: Great idea. So instead of asking everybody to poll the website repeatedly,
your bot inform subscribers when a spot is available?**

A: Correct. But do note that the vaccine situation in Veneto is complex.
It's not "first come, first served". There are different cohorts and right now
only people over 80 or with pre-existing health conditions are eligible.

**T: Is that why you ended up building a Telegram bot?**

A. When I heard from friends that their elderly parents were struggling too, I
saw a way to help. My idea is to smooth the UX to make booking appointments
more accessible. I also released the bot's source code on
[GitHub](https://github.com/vrde/serenissimo) as a commitment towards
transparency.

**T: How's is going so far?**

A: As of today, I've managed to get 16 people vaccinated! Then there are 173
eligible people signed up with Serenissimo who are waiting for a vaccine and
1218 people who want a vaccination but are currently not eligible.

**T: Wow! And is your bot handling personal data?**

A: Yes. To get an appointment on the official website, users must provide their
"[codice
fiscale](https://en.wikipedia.org/w/index.php?title=Italian_fiscal_code&oldid=1006804529),"
the Italian tax code. Anyone can calculate that code using their first and last
name, date of birth, and city of birth. The code ends up being a sequence of
letters and numbers. It's personally identifiable information (short: "PII"),
but not personal health information (short: "PHI"). I'd say it's your unique ID
for the Italian government. It's private, but not a secret.

_Note from the editor: You can find websites that let you calculate it
yourself. See below._

<img src="/assets/images/codicefiscale.png" alt="A screenshot of Tim's hypothetical codice fiscale.">

**T: Interesting. I think we have something similar in Germany. It's called a
"Sozialversicherungsnummer." And in the US, I guess it's called the "Social
Security Number." You built your bot in Telegram; how do you make sure your
users' PII is protected?**

A: I have a privacy policy. If a user removes themselves from the service, I
make sure to delete their data. I've looked into [Telegram's Privacy
Policy](https://telegram.org/privacy#10-deleting-data), and they, too, are
deleting all data.

**T: Could your bot also work by sending SMS?**

A: Yes, I'm currently refactoring it such that it's an option in the future.

**T: What do you think is more important, protecting personally identifiable
information or protecting a person's health?**

A: That's a good question; I think it's a gradient. For example, the "codice
fiscale" is personal, but you cannot do much with it alone. The important thing
is to have a policy to delete the data once you don't need it anymore.

**T: Fair! Where's the source code?**

A: It's open-source on GitHub at
[vrde/serenissimo](https://github.com/vrde/serenissimo).

**T: Great! I'll take a look. Thanks for answering all my questions. I wish you
the best of success in helping to get more people vaccinated!**

A: You're welcome. If you're in Veneto and need an appointment for a COVID
shot, check out [t.me/serenissimo_bot](https://t.me/serenissimo_bot).

---

published 2021-04-18 by timdaub
