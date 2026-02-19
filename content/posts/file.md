+++
date = '2025-09-09T19:46:00+03:00'
draft = false
title = 'Testing'
description = 'A TikZ diagram showing set products and complements'
thumbnail = ''
tags = ['red', 'green', 'tikz']
+++

## TikZ

TikZ diagram:

{{< tikz >}}
\begin{tikzpicture}[scale=1.8, every node/.style={font=\small}]
% Draw S axes
\draw[thick] (0,0) -- (5,0) node[anchor=west]{$S$};
\draw[thick] (0,0) -- (0,5) node[anchor=south]{$S$};
% Mark A on x-axis and C on y-axis
\draw[ultra thick] (1,0) -- (4,0) node[midway, below]{$A$};
\draw[ultra thick] (0,1) -- (0,3) node[midway, left]{$C$};
% Shade complement regions with patterns
% A^c x S: vertical line pattern
\fill[pattern=vertical lines, pattern color=red!60] (0,0) rectangle (1,5);
\fill[pattern=vertical lines, pattern color=red!60] (4,0) rectangle (5,5);
% S x C^c: horizontal line pattern
\fill[pattern=horizontal lines, pattern color=blue!60] (0,0) rectangle (5,1);
\fill[pattern=horizontal lines, pattern color=blue!60] (0,3) rectangle (5,5);
% Draw the A x C rectangle (no fill)
\draw[thick] (1,1) rectangle (4,3);

% Labels inside regions
\node at (2.5,2) {$A\times C$};

% Legend explaining shading patterns
\begin{scope}[shift={(5.5,2.5)}, every node/.style={font=\small, anchor=west}]
% A^c x S legend
\fill[pattern=vertical lines, pattern color=red!60] (0,0) rectangle (0.3,0.3);
\node at (0.4,0.15) {$A^c\times S$};
% S x C^c legend
\fill[pattern=horizontal lines, pattern color=blue!60] (0,-0.5) rectangle (0.3,-0.2);
\node at (0.4,-0.35) {$S\times C^c$};
\end{scope}
\end{tikzpicture}
{{< /tikz >}}
