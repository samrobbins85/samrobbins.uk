---
title: "Installing pgf-pie"
description: "Installing the LaTeX package pgf-pie"
language: "LaTeX"
date: 2021-04-22
---

1. Download [the zip](http://mirror.ctan.org/graphics/pgf/contrib/pgf-pie.zip)
2. Run the following commands

```shell
unzip pgf-pie.zip
mkdir -p ~/texmf/tex/latex/pgf-pie
cp pgf-pie/pgf-pie.sty ~/texmf/tex/latex/pgf-pie/
mkdir -p ~/texmf/doc/latex/pgf-pie
cp pgf-pie/pgf-pie-manual.pdf ~/texmf/doc/latex/pgf-pie/
```
