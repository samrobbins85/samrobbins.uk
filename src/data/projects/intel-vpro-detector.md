---
title: "Intel vPro Detector"
slug: "intel-vpro-detector"
description: "Detect the presence of Intel vPro and the status of Intel AMT"
date: 2020-09-03
icon: "heroicons:cpu-chip-solid"
github: "https://github.com/samrobbins85/electron-intel-vpro"
technologies:
  - "tailwind-css"
  - "next-js"
  - "electron"
  - "intel"
  - "javascript"
---

This tool was produced to detect the presence of Intel vPro and the status of Intel AMT. Intel vPro is a collection of security features included in Intel processors. One of these features is Intel AMT, this allows for remote access from the BIOS level, meaning it can be recovered from more serious failures.

I initially wrote this tool in Golang as a proof of concept. This was functional, but suffered from two major problems.

1. I was using a separate executable to find the raw statuses, and this would have to be downloaded separately to the tool I was creating
2. It was difficult to add a good GUI

For these reasons I decided to look into alternate ways of creating desktop applications. One that stood out to me was Electron as I am already very familiar with web development and it had a range of bundling options that help solve my first issue.

For the exact implementation of Electron, I chose [nextron](https://github.com/saltyshiomix/nextron) as I was recently learning Next.js and wanted to get more experience in it, and it provides lots of boilerplate code to get me started.

To solve the first problem, I used the `extraFiles` key from [electron-builder](https://www.electron.build/), this allows you to include a file that the program will see in it's root directory, perfect for what I need.

To run the file I used [sudo-prompt](https://www.npmjs.com/package/sudo-prompt), which allows me to run a command using administrator privileges, which the executable needed as it reads from the registry. I then processed the output of that using the built in XML parser in JavaScript to get the values I need.

These values were then inserted into the user interface in the following way

![](https://res.cloudinary.com/samrobbins/image/upload/v1600508183/Intel_Result_ewxzwi.png)
