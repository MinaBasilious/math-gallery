+++
date = '2026-02-19T18:36:07+02:00'
draft = false
title = 'Random Horse(Paths)'
description = ''
thumbnail = '/images/horserandom.svg'
tags = ['Random', 'Recursion']
# coauthors = [
#   { name = 'Jane Doe', link = 'mailto:jane@example.com' },
# ]
+++


For each index $m\in{0,\dots,20}$ define a discrete planar random walk $f_m:{0,1,\dots,1000}\to\mathbb{Z}^2$ by the recurrence

$$
f_m(0) = (0,0),
$$

and for each integer $n\ge 1$

$$
f_m(n) = f_m(n-1) + \big(X_{m,n},Y_{m,n}\big),
$$

where $X_{m,n}$ and $Y_{m,n}$ are independent random variables taking values in ${-1, +1}$ (each with equal probability). In words: at each step the walker moves one unit horizontally and one unit vertically, each independently chosen to be +1 or −1.

So, the next step is a diagonal step. From $f_k$, there are four equally likely choices, each with probability $\frac{1}{4}$:
$$f_{k+1} \in \set{ f_k + (\pm 1,\, \pm 1) \}$$
which looks like the following [graph](#fig-1).
{{< tikz >}}
\begin{tikzpicture}[transform shape, scale=2]

    \coordinate (C) at (0,0);
    \fill (C) circle (2pt);
    \node[above=10pt] at (C) {$f_m(k)$};


    \coordinate (N1) at (-1,  1); % +(-1,1)
    \coordinate (N2) at ( 1,  1); % +(1,1)
    \coordinate (N3) at (-1, -1); % +(-1,-1)
    \coordinate (N4) at ( 1, -1); % +(1,-1)


    \draw[dashed] (N1) -- (N2) -- (N4) -- (N3) -- cycle;


    \draw[->,thick,shorten >=2pt] (C) -- (N1) node[above left,font=\small] {$f_m(k+1)=f_m(k)+(-1,1)$};
    \draw[->,thick,shorten >=2pt] (C) -- (N2) node[above right,font=\small] {$f_m(k+1)=f_m(k)+(1,1)$};
    \draw[->,thick,shorten >=2pt] (C) -- (N3) node[below left,font=\small] {$f_m(k+1)=f_m(k)+(-1,-1)$};
    \draw[->,thick,shorten >=2pt] (C) -- (N4) node[below right,font=\small] {$f_m(k+1)=f_m(k)+(1,-1)$};


    \draw[thin,->] (-2.2,0) -- (2.2,0) node[right] {$x$};
    \draw[thin,->] (0,-2.2) -- (0,2.2) node[above] {$y$};
\end{tikzpicture}
{{< /tikz >}}
Graphing all possible branches of $f_{k-1} \to f_k \to f_{k+1}$, we notice that exactly one of the four possible steps from $f_k$ leads back to $f_{k-1}$, giving a probability of $\frac{1}{4}$ of returning, which explains the isolated spikes observed in the [graph](#fig-2).
{{< tikz >}}
\begin{tikzpicture}[>=stealth,thick, transform shape, scale=2]

\tikzset{
  n0/.style={circle,fill=orange!80!red,   inner sep=4pt},
  n1/.style={circle,fill=blue!60!black,   inner sep=3pt},
  n2/.style={circle,fill=teal!60!black,   inner sep=2pt},
  a0/.style={->,orange!80!red,  thick, shorten >=3pt, shorten <=3pt},
  a1/.style={->,blue!60!black,  thick, shorten >=3pt, shorten <=3pt},
  ab/.style={->,teal!60!black,  thick, shorten >=7pt, shorten <=3pt},
}


\draw[teal!60!black, line width=1.6pt] (0,0) circle (9pt);


\node[n0] (r)  at (0,0)   {};
\node[font=\scriptsize, orange!70!black] at (0,0.75) {$f_{k-1}$};


\node[n1] (k1) at ( 2.2, 2.2) {};
\node[n1] (k2) at ( 2.2,-2.2) {};
\node[n1] (k3) at (-2.2, 2.2) {};
\node[n1] (k4) at (-2.2,-2.2) {};

\node[font=\scriptsize,blue!60!black] at ( 2.3, 2.8) {$f_k^{(1)}$};
\node[font=\scriptsize,blue!60!black] at ( 2.3,-1.6) {$f_k^{(2)}$};
\node[font=\scriptsize,blue!60!black] at (-2.1, 2.8) {$f_k^{(3)}$};
\node[font=\scriptsize,blue!60!black] at (-2.1,-1.6) {$f_k^{(4)}$};

\draw[a0](r)--(k1); \draw[a0](r)--(k2);
\draw[a0](r)--(k3); \draw[a0](r)--(k4);


\node[n2] at ( 4.4, 4.4) {};
\node[n2] at ( 4.4, 0.0) {};
\node[n2] at ( 0.0, 4.4) {};
\draw[a1](k1)--( 4.4, 4.4);
\draw[a1](k1)--( 4.4, 0.0);
\draw[a1](k1)--( 0.0, 4.4);
\draw[ab](k1)--(r);

\node[n2] at ( 4.4,-4.4) {};
\node[n2] at ( 0.0,-4.4) {};
\draw[a1](k2)--( 4.4, 0.0);
\draw[a1](k2)--( 4.4,-4.4);
\draw[a1](k2)--( 0.0,-4.4);
\draw[ab](k2)--(r);


\node[n2] at (-4.4, 4.4) {};
\node[n2] at (-4.4, 0.0) {};
\draw[a1](k3)--( 0.0, 4.4);
\draw[a1](k3)--(-4.4, 4.4);
\draw[a1](k3)--(-4.4, 0.0);
\draw[ab](k3)--(r);


\node[n2] at (-4.4,-4.4) {};
\draw[a1](k4)--( 0.0,-4.4);
\draw[a1](k4)--(-4.4, 0.0);
\draw[a1](k4)--(-4.4,-4.4);
\draw[ab](k4)--(r);

% legend
\draw[teal!60!black,line width=1.4pt] (5.8, 0.6) circle (5.5pt);
\fill[orange!80!red]  (5.8, 0.6) circle (3.5pt);
\fill[blue!60!black]  (5.8, 0.0) circle (2.8pt);
\fill[teal!60!black]  (5.8,-0.6) circle (2.0pt);
\node[font=\scriptsize,orange!70!black] at (7.2, 0.6) {$f_{k-1}$};
\node[font=\scriptsize,blue!60!black]   at (7.2, 0.0) {$f_{k}$};
\node[font=\scriptsize,teal!60!black]   at (7.2,-0.6) {$f_{k+1}$};
\draw[ab,shorten >=0pt,shorten <=0pt]
  (6.6,-1.2)--(5.6,-1.2);
\node[font=\scriptsize,teal!60!black] at (6.5,-1.5) {returns to $f_{k-1}$};

\end{tikzpicture}
{{< /tikz >}}
The simplest closed loop occurs along the path
$$f_k \to f_{k+1} \to f_{k+2} \to f_{k+3} \to f_{k+4}$$
where $f_{k+4} = f_k$, yet $f_k \neq f_{k+2}$ and $f_{k+1} \neq f_{k+3}$, tracing a tilted square, as shown in the [figure below](#fig-3).
{{< tikz >}}
\begin{tikzpicture}[>=stealth,thick, transform shape, scale=2]

\tikzset{
  pt/.style={circle, fill, inner sep=3.5pt},
  arr/.style={->, thick, shorten >=4pt, shorten <=4pt},
}

% dashed diamond outline
\draw[dashed, gray!45, thin]
  (0,0) -- (2,2) -- (4,0) -- (2,-2) -- cycle;

% step labels along each edge
\node[font=\tiny, gray] at (0.6,  1.4) {$(+1,+1)$};
\node[font=\tiny, gray] at (3.4,  1.4) {$(+1,-1)$};
\node[font=\tiny, gray] at (3.4, -1.4) {$(-1,-1)$};
\node[font=\tiny, gray] at (0.6, -1.4) {$(-1,+1)$};

% arrows
\draw[->, thick, blue!70!black, shorten >=4pt, shorten <=4pt]
  (0,0) -- (2,2);
\draw[->, thick, blue!70!black, shorten >=4pt, shorten <=4pt]
  (2,2) -- (4,0);
\draw[->, thick, blue!70!black, shorten >=4pt, shorten <=4pt]
  (4,0) -- (2,-2);
\draw[->, line width=1.8pt, teal!60!black, shorten >=7pt, shorten <=4pt]
  (2,-2) -- (0,0);

% teal ring on f_k to show loop closure
\draw[teal!60!black, line width=1.8pt] (0,0) circle (7pt);

% filled dots
\fill[orange!85!red] (0, 0) circle (3.5pt);
\fill[blue!60!black] (2, 2) circle (3.0pt);
\fill[blue!60!black] (4, 0) circle (3.0pt);
\fill[blue!60!black] (2,-2) circle (3.0pt);

% labels
\node[font=\scriptsize, orange!70!black] at (-0.75,  0.25) {$f_k$};
\node[font=\scriptsize, teal!60!black]   at (-0.75, -0.35) {$=f_{k+4}$};
\node[font=\scriptsize, blue!60!black]   at ( 2.0,   2.6)  {$f_{k+1}$};
\node[font=\scriptsize, blue!60!black]   at ( 4.75,  0.0)  {$f_{k+2}$};
\node[font=\scriptsize, blue!60!black]   at ( 2.0,  -2.6)  {$f_{k+3}$};

% caption
\node[font=\scriptsize] at (2.0, -3.6)
  {4 diagonal steps close a square: $f_{k+4}=f_k$};

\end{tikzpicture}
{{< /tikz >}}
