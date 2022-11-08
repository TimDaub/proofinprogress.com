# SSSP - Simple Signal Sharing Protocol

## Abstract

The Simple Signal Sharing Protocol is an interactive application-level protocol
making use of Ethereum smart contracts and the WebSocket standard for streaming
signal data over a period of time between two participants; a signal streamer
and a signal consumer.

A trustless payment mechanism is the core of the protocol; allowing the signal
streamer to gradually monetize their their signal and the signal consumer to
receive access to novel data streams.

## Overview

Data sharing over the Internet has been made out to be technically challenging
by a few emergent companies e.g. Ocean Protocol, streamr and others. Key
challenges include the pricing of a data set and the trustless and atomic swap
of payment and data. Similarly, so called "data escapes" have been portrait as
"deal breakers" in the space too.

Having taken a look at some approaches to data sharing; we think there's still
amazing potential to improve the space with actual technical innovation. In the
following document; we hence like to introduce a simple Ethereum-based protocol
that allows to parties to share data verifiably and gradually - hence reducing
the risk of either party betraying the others.

## Problem

All anonymous data sharing protocols currently require two parties to trust
each other. Indeed, totally anonymous sharing of data that involves crypto
currencies is nearly impossible without accepting the risk of one party
betraying the other.

For the scope of this work; we'd like to highlight two paths where data sharing
can fail in traditional protocols.

(1) Assuming that the data consumer pays the data publisher upfront; then the
risk of the data publisher just sending a random set of zeros and ones is high
and irretrivable. If e.g. on Ocean Protocol, I transferred some coins to a data
publisher and then proceeded to download the data set; I'd have no option for
recourse considering that anonymous users can enter data sets. Now, I'd have
lost money and didn't receive any data.

(2) Similarly, in the case that the data consumer pays the data publisher
_after_ receiving the data; then the risk of the data consumer exit scaming the
data publisher is high and irretrivable. If e.g on Ocean Protocol, I downloaded
a data set from a publisher but then simply forgo payment afterwards - then the
data publisher would have no option for recourse considering that I could have
do all previous actions perfectly anonymous using e.g. the TOR network. Now I'd
have the data set and it wouldn't have cost me any money.

Being aware of these two scenario makes one realize that, in fact, the problem
isn't an easy one to solve atomically either as we'd argue it's rather
difficult to understand what equates a valuable data set.

Humans are fundamentally not good at understanding large corpuses of data and
so in cases where e.g. users download data sets; they may end up not being
aware of its quality until they've done some tests.

Hence, a key lesson that lies within the scope of this work, is that "shipping
data sets in objectified containers" isn't the right conceptual metaphor for
tackling the over all problem.

Indeed, data is often portrait as lake, package, container, zip file, csv etc.
But the reality of anyone working with data is that any point that makes a set
of data can be viewed as its own self-contained set of data too. Hence, in
future paragraphs of this work, we tend to favor the term "stream" or "signal"
over data as they correctly identify data as time-continuos resource rather
than one that is akin to an object.

### Mechanism

A smart contract hosted on an EVM-enabled platform like Ethereum allows a data
publisher to offer a signal stream by publishing some basic meta data, e.g.:

```
{
  stream: {
    name: "ETH/USD"

  }
}
```

## Definitions

### Theoretical Model of a Digital Signal

A digital signal is used to represent data as a sequence of discrete values.
In theoretical terms, a signal is modeled within a vector space $\reals^d$,
where $d$ represents a function's domain. Commonly-used domains to model
digital signals include $d=1$ to model time series data, or $d=2$ to model
signals dependent on location [1]. Within the scope of this work, we assume
that a digital signal's domain is descrete, hence representing a finite number
of isolated points.

## Sampling

Sampling is the process of reducing a continous-time _source_ signal into a
discrete-time _replication_ signal by repeatedly applying inputs to the source.

## Aliasing

Aliasing is an effect appearing in signal sampling. It can lead to a
replication signal becoming indistinguishable from its source [3].

## Nyquist–Shannon Sampling Theorem

Shannon's theorem states that if a function $f(x)$ contains no frequencies
higher than $B$ hertz then it can be determined by polling a series of points
spaced $1 / 2B$ seconds apart. It can, hence, be assumed that taking more than
$2B$ samples of a function $f(x)$ with a frequency no higher than $B$ hertz
yields a perfect reconstruction $f_s$ through sampling [2].

## Asynchronous System

Asynchronous systems are able to handle the program flow as well as the
occurrence of independent events without the need for a a global coordination
mechanism like a clock or a centralized consensus. They do not rely strictly on
arrival times of messages or their ordering.

## Stateless System

A system is stateless when it treats a any occurring message independently and
without the need for keeping track about messages in memory.

## Introduction

### Purpose

The Simple Signal Replication Protocol is an application-level protocol with
the lightness and speed necessary for distributed and collaborative information
systems. It allows the replication and discovery of digital signals over the
Internet.

## Example

The following shows an example of a source initializing the signal replication
by replacing (`PUT`) the current entity (`BTC-USD`) with an incomplete `csv`
content. Using `PATCH`, the source then partially modifies the entity through
additional data.

```http
PUT /signals/BTC-USD HTTP/1.1
Host: destination.com
Content-Type: text/csv

timestamp,value,currency
2021-02-19T22:37:26.102Z,55,529.65,USD
2021-02-19T22:39:09.973Z,55,550.11,USD
```

```http
PATCH /signals/BTC-USD HTTP/1.1
Host: destination.com
Content-Type: text/csv

2021-02-19T22:37:26.102Z,55,529.65,USD
2021-02-19T22:39:09.973Z,55,550.11,USD
```

## Unfinished thoughts

- Data needs to be replicable asynchronously. It may come out of order, but
  that's OK because each data point shall be encoded such that the signal's
  intel does not depent on it or that it can be ordered by the receiver later.
- A sampler should be able request samples of data randomly from the source
  through an dialog.
- Samples should allow to include authentication data such as hashes or proofs

## References

- 1: [Wikipedia.org: Signal](https://de.wikipedia.org/w/index.php?title=Signal&oldid=207389957)
- 2: [Wikipedia.org: Nyquist Shannon samply theorem](https://en.wikipedia.org/w/index.php?title=Nyquist%E2%80%93Shannon_sampling_theorem&oldid=1002056076)
- 3: [Wikipedia.org: Aliasing](https://en.wikipedia.org/w/index.php?title=Aliasing&oldid=996719536)
- 4: [Wikipedia.org: Sampling (signal processing)](<https://en.wikipedia.org/w/index.php?title=Sampling_(signal_processing)&oldid=1000373153>)
