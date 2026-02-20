+++
date = '2026-02-20T23:51:39+02:00'
draft = false
title = 'Fat Star'
description = ''
thumbnail = '/images/fatstar.gif'
# showThumbnail = false
tags = []
# coauthors = [
#   { name = 'Jane Doe', link = 'mailto:jane@example.com' },
# ]
+++

We define a function $f: \mathbb N \times \mathbb R \to  \mathbb R$ such that $f_0(x)=1$ and for $n \ge 1$
$$f_n(x)=\prod_{j=1}^n \arctan(jx)$$
and then define a function $P: \mathbb N \times [0,2\pi] \to \mathbb R^2$ which correspond to a parameterization of paths over $\mathbb R^2$, where $$P_n(t)=(f_n(\cos(t)),f_n(\sin(t)))$$
So, the green path is just $P_5$ while $t$ ranges from $0$ to $2\pi$ and the pink lines are connected points represented by $P_k$ for each natural $k\le 5$ which emulates that kind of animation of drawing the green path.
