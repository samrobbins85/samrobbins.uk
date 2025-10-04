---
title: "Placing table here in LaTeX"
description: "Ensuring a table ends up exactly where you want it"
language: "LaTeX"
date: 2021-04-09
---

To ensure that tables don't get presented different to the flow of text when close to a page boundary

In the preamble:

```latex
\usepackage{float}
```

For your table

```latex
\begin{table}[H]
\end{table}
```
