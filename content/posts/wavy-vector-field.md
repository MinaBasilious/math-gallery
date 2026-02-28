+++
date = '2026-02-27T19:30:06+02:00'
draft = false
title = 'Wavy Vector Field'
description = ''
thumbnail = '/images/wavyfield.gif'
# showThumbnail = false
tags = ['Vector Field']
# coauthors = [
#   { name = 'Jane Doe', link = 'mailto:jane@example.com' },
# ]
+++

Firstly, we define a vector field each of its points depends on functions of its coordinates.
So the two functions are $u,v : \mathbb R^2 \to \mathbb R$, such that
$$u(x,y)=x+y, $$ $$ v(x,y)=\tan(x^2+y^2).$$

Our vector field function depends not only on the point but also on another parameter $t$ which we will use to mimic the animation, so
$$f(x,y,t)=(u(x,y),t v(x,y))$$
However, we are not finished yet.

We will stick each vector from the function at the point at which it's evaluated. This will be just a line starting from the point $(x,y)$ and ending at the point $(x,y)+f(x,y,t)$.

But since I care about symmetry in my drawing, I put the negative side of the function to the point. So overall it will be a line starting from $(x,y)-f(x,y,t)$ and ending with $(x,y)+f(x,y,t)$. Explicitly, each line is defined as
$$l(x,y,t)=\set{(1-a)\left((x,y)-f(x,y,t)\right)+a\left((x,y)+f(x,y,t)\right)\mid  a \in [0,1]}$$

At the end the whole graph is
$$G(t)=\bigcup_{(x,y)\in I}l(x,y,t)$$
where
$I=\set{0.0075(x,y) \mid -\frac{80}{3}\le x,y \le\frac{80}{3},(x,y)\in \mathbb Z^2}$.

This weird $0.0075$ is just for rescaling the grid.

And the animated graph is done just by varying $t$ between -1 and 1.
