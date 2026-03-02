+++
date = '2026-03-02T01:26:26+02:00'
draft = false
title = 'Tornado of Lines'
description = ''
thumbnail = '/images/tornadothmb.svg'
showThumbnail = false
tags = ['Lines']
# coauthors = [
#   { name = 'Jane Doe', link = 'mailto:jane@example.com' },
# ]
+++

{{< img src="/images/tornado.gif"  width="100" >}}

This graph is defined by bunch of lines by defining two points, the start and the end, and then connect them.

Each pair of points is defined by four functions which is
$$X_1(n)=\sin\left(\frac{2\pi n}{1000}\right)-\cos\left(\frac{\pi n}{1000}\right)$$
$$Y_{1}(n)=\left(\cos\left(\frac{2\pi n}{1000}+\frac{2\pi}{5}\right)\right)^{3}$$
$$X_{2}(n)=\sin\left(\frac{5\pi n}{1000}+\frac{\pi}{3}\right)$$
$$Y_{2}(n)=\sin\left(\frac{\pi n}{1000}+\frac{\pi}{10}\right)$$

Hence each line as a function, $l:\mathbb N^+ \times \mathbb R ^{+}\to \mathcal P(\mathbb R^2)$, is defined as
$$l(k,o)=\set{\left(1-t\right)\left(X_{1}\left(k\right),Y_{1}\left(k\right)\right)+t\left(X_{2}\left(k\right),Y_{2}\left(k\right)\right) \in \mathbb R^2 \mid t \in [0,o]}$$

At the end, the graph is
$$G(o)=\bigcup _{k=1}^{1000}l(k,o)$$
and animation is just varying $o$ between $0$ and $1$.
