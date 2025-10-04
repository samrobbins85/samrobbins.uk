---
title: "DNS Comparison Website"
slug: "dns-comparison-website"
description: "Compare the speed and blocking of DNS providers"
date: 2020-09-03
icon: "eos-icons:dns"
website: "https://dns-compare.vercel.app/"
github: "https://github.com/samrobbins85/dns-comparison"
technologies:
  - "tailwind-css"
  - "next-js"
  - "chart-js"
  - "axios"
  - "react-table"
  - "quad-9"
  - "cloudflare-dns"
  - "google-dns"
  - "papa-parse"
  - "javascript"
  - "react"
---

This site compares the performance of different DNS services. It does this in a range of ways, depending on your requirements.

## Single domain comparison

The homepage allows you to compare a single domain to see if it is resolved on different services. To do this it makes DNS over HTTPS requests using Axios, with a modifier to also include the latency.

![](https://res.cloudinary.com/samrobbins/image/upload/q_auto/v1599472461/homepage_urjka3.png)

## Bulk domain comparison

If you have a list of domains you want to compare, then the above method may become tedious as you have to type in every domain and check the results. To solve this problem, I created a page for bulk comparison. This uses the same method as the single comparison but in parallel to make a lot of requests.

This uses Chart.js for the data visualization and react-table for the paginated table.

![](https://res.cloudinary.com/samrobbins/image/upload/q_auto/v1599472616/Screenshot_2020-09-07_Bulk_Upload_DNS_Comparison_ik2lb8.png)

## Server generated results

While the bulk comparison is good for small amounts of domains, when the number gets larger you'd be waiting hours to get a result. To solve this, results based on open source datasets are processed on a server, which you can then view on the website.

This uses papaparse to parse in a CSV and Chart.js for the data visualization

![](https://res.cloudinary.com/samrobbins/image/upload/q_auto/v1599472803/Screenshot_2020-09-07_Server_Generated_Results_DNS_Comparison_ztf5hc.png)
