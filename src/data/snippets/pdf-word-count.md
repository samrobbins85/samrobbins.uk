---
title: "PDF word count"
description: "Get the word count of a PDF, minus the last page to allow for references"
language: "Shell"
date: 2021-03-30
---

```shell
pdftotext -l $(pdfinfo "File.pdf" | grep Pages | awk '{print $2-1}') "File.pdf" -| wc -w
```

Replace `File.pdf` with the name of your file
