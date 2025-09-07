---
title: "My LaTeX Boilerplate"
date: 2021-06-05
description: "The boilerplate I use for LaTeX"
---

The basic place most LaTeX documents start is like this

```latex
\documentclass{article}

\begin{document}
First document. This is a simple example, with no
extra parameters or packages included.
\end{document}
```

This will give you everything you need to get started, but I like to have additional options configured to make pages look in the way I like.

## Title

When it comes to the title, I don't make too many changes, you set the contents of the title in your preamble, and then use `\maketitle` in the body of your text to add the title. I generally use the following options

```latex
\title{Title of my article}
\author{Sam Robbins}
\date{}
```

I keep the date empty, which removes it from the title, this is because for most things I write, the date on which they were written isn't important.

## Language and format

I can't remember ever running into a problem for not having these, but `inputenc` allows you to specify which input encoding is used (e.g. utf-8), and `babel` lets you specify which language you're using (e.g. english). You can set these like this:

```latex
\usepackage[utf8]{inputenc}
\usepackage[english]{babel}
```

## Margins

I like to shrink down the margins as LaTeX has very wide margins at 1.875 inches, I prefer 0.7 inches, and this can be done with the `geometry` package

```latex
\usepackage[margin=0.7in]{geometry}
```

## Hyphens

I don't like my words to be hyphenated, and instead would prefer them to be on a new line, this can be done in a [range of ways](https://www.texfaq.org/FAQ-hyphoff), but my choice is:

```latex
\hyphenpenalty=10000
```

## Symbols

LaTeX has a lot of symbols integrated, but there are some extras that I like to import. `amssymb` provides the ones I need, such as $\mathbb{R}$ and $\leqslant$. You can use this with

```latex
\usepackage{amssymb}
```

For things like $\degree$, I use the `gensymb` package

```latex
\usepackage{gensymb}
```

And for the `mathscr` font, I use the `mathrsfs` package

```latex
\usepackage{mathrsfs}
```

## Maths

LaTeX includes a few nice maths environments, but to get some more, the package `amsmath` is needed, for example, this gives the cases environment

$$
y = \begin{cases}
    x^2 & \text{if x}\geq 2\\
    0 & \text{otherwise}
\end{cases}
$$

```latex
\usepackage{amsmath}
```

In addition, I don't like that I have to do `\lceil` and `\rceil` for the ceiling function, and so instead I turn it into a paired delimiter. This can be done like this:

```latex
\usepackage{mathtools}
\DeclarePairedDelimiter{\ceil}{\lceil}{\rceil}
\DeclarePairedDelimiter{\floor}{\lfloor}{\rfloor}
```

So now I just need to do `\ceil{x^2}` and I will get the same effect as doing `\lceil x^2 \rceil`

## Sans serif

This one depends on what type of writing it is, but if it's just for me, then I find sans serif more readable, and you can enable this using.

```latex
\renewcommand{\familydefault}{\sfdefault}
```

## Images and Figures

Images are crucial in a wide variety of documents, and you can use them by using the package `graphix`

```latex
\usepackage{graphix}
```

Then you can add an image using

```latex
\includegraphics[width=\textwidth]{image}
```

Images will often be included in figures, and you can use figures by doing

```latex
\begin{figure}[h]
\centering
\includegraphics[width=\textwidth]{image}
\caption{Caption the image}
\end{figure}
```

However using the options in LaTeX, you don't have a way to place the figure exactly where you put it in the flow of text, and so I use the `float` package, which gives the option `H` which will place it exactly where you tell it to

```latex
\usepackage{float}
```

## Lists

There are two (somewhat incompatible) packages for lists, `enumerate` and `enumitem`. Enumerate is the simpler of the two, it allows for specifying the type of list you want, for example if you want it to use roman numerals rather than numbers.

You have the options of:

- A
- a
- I
- i
- 1

To control if you want alphabetic, roman or numeric numbering. Just put these in square brackets after the enumerate like this

```latex
\begin{enumerate}[i]
    \item Foo
    \item Bar
\end{enumerate}
```

And you can control the surroundings, such as adding a dot afterwards

```latex
\begin{enumerate}[i.]
    \item Foo
    \item Bar
\end{enumerate}
```

Enumitem is more complex, but also allows for control over the spacing between the items. I've commonly used this for lists inside tables, as you want them to be more compact

To change the numbering, instead you do

```latex
\begin{enumerate}[label=\roman*]
    \item Foo
    \item Bar
\end{enumerate}
```

which is a bit more complex, but is more detailed, so if you had very specific requirements, this option is more likely to offer it. But if you do want the simpler syntax of `enumerate`, then you can do this, by passing the option `shortlabels` to `enumitem` like this.

```latex
\usepackage[shortlabels]{enumitem}
```

As for making the lists more compact, in the same square brackets after the list, for either the itemize or enumerate environments, change it to `[nosep,noitemsep]`. `nosep` will shrink the gaps around the list and `noitemsep` shrinks the gap between the items.

A less likely need, but one I've had in the past is to have deeply nested lists. By default, LaTeX will only let you nest itemize 4 deep (large dot, dash, star, small dot). However enumitem allows you to change this if you want to go deeper. This requires configuration for a few different bits, first off, we want to change itemize to go deeper. This is done by

```latex
\renewlist{itemize}{itemize}{20}
```

This will give you 20 levels of nesting instead, and you can change this if you want to go deeper. Beyond the limit for itemize, there is also a general LaTeX limit of 6 deep, and so you need to change this too

```latex
\setlistdepth{20}
```

Finally, you need to tell the itemize environment what the levels should be, as it only knows 4. For this, I set every level to $\cdot$, and then customize the first few levels

```latex
% initially, use dots for all levels
\setlist[itemize]{label=$\cdot$}

% customize the first 3 levels
\setlist[itemize,1]{label=\textbullet}
\setlist[itemize,2]{label=--}
\setlist[itemize,3]{label=*}
```

## Spacing after a paragraph

The default way to start a new paragraph in LaTeX is to have an indentation at the start. Instead, I prefer a new line between my paragraphs, this is less "academic", but I think it gives a better appearance. You can do this like so:

```latex
\usepackage[parfill]{parskip}
```

## Page spacing

I don't want a tiny bit of a section on one page before moving on to the next page, so I check that there are 5 lines of space before putting in a section or subsection. This can be done as follows:

```latex
\preto{\subsection}{\Needspace{5\baselineskip}}
\preto{\section}{\Needspace{5\baselineskip}}
```

## Colours

The library to provide colours is `xcolor`, and you can expand the number of colours available to the list shown [on overleaf](https://www.overleaf.com/learn/latex/Using_colours_in_LaTeX) using the `dvipsnames` option. Leading to the import looking like this

```latex
\usepackage[dvipsnames]{xcolor}
```

## Code

The first type of code I use is pseudocode, this is done using the `listing` package. Alongside this I also want the `pxfont` package, which gives varieties of monospace fonts, allowing for using bold for keywords. These imports look like this

```latex
\usepackage{listings}
\usepackage{pxfonts}
```

To start styling first I define a language using `lstdefinelanguage`:

```latex
\lstdefinelanguage{pseudocode}{
    morekeywords={if, else, then, print, end, for, do, while, Let},
    morecomment=[l]\#
}
```

This defines the keywords I want highlighting and that I want # to be the comment symbol.

Then I want to decide how I want the code to be highlighted, my options are:

```latex
\lstset{
    basicstyle=\ttfamily,
    keywordstyle=\bfseries,
    showstringspaces=false,
    tabsize=4,
    frame=top,
    mathescape=true,
    frame=bottom,
    numbers=left,
    commentstyle=\color{gray},
}
```

This gives me line numbers and top and bottom frame, and highlights the keywords in bold, and makes the comments gray.

If I'm using a defined language however, I prefer to use `minted` which provides nice coloured syntax highligting. Minted is a bit of a pain to set up because it requires `pygments` to be installed on your computer, and needs the `-shell-escape` flag set when compiling. However, it does produce very nice syntax highlighting.

You can just use it like a normal environment, and pass the language in through curly braces:

```latex
\begin{minted}{python}
print("Hello world")
\end{minted}
```

one thing to watch out with minted is that it produces a `_minted-*` folder, which is used to cache the computation of the syntax highlighting. This is very useful for large projects as they compile quickly, but if you're using git, make sure that pattern is in your `.gitignore`.

## Theorems etc

In the past I have used more complex solutions for theorems, but I've come to the conclusion that it's generally easier to just use the built in methods. For this, you can just specify a `newtheorem` like this:

```latex
\newtheorem{theorem}{Theorem}
```

Then you can do

```latex
\begin{theorem}
Here is my theorem
\end{theorem}
```

anywhere in the text. The first curly brace specifies what you want to `\begin` and the second what the title of the environment printed on the page should be.

You can extend this for other things too, for example, if you also wanted a lemma environment, you could do it like this:

```latex
\newtheorem{lemma}{Lemma}
```

If you want proofs to go with these environments, then you can import the package `amsthm`, and then:

```latex
\begin{proof}
I have discovered a truly marvelous proof of this, which this margin is too narrow to contain
\end{proof}
```

## References

I don't do anything fancy for references unless required, in my preamble, I do:

```latex
\usepackage{biblatex}
\addbibresource{bibliography.bib}
```

Then at the end of the document

```latex
\printbibliography
```

and throughout the document doing `\cite{reference}` as required

## Importing configuration

This is quite a lot of configuration and it'd be a hassle to write it out every time, so I put it in a file called `format.tex` and then use the `input` command in my preamble, which has the same effect as if everything in `format.tex` had been typed there. So you just do

```latex
\input{../format.tex}
```

and it all works.
