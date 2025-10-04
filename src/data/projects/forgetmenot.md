---
title: "ForgetMeNot"
slug: "forgetmenot"
description: "A tool to help people with dementia"
date: 2019-11-01
icon: "mdi:brain"
github: "https://github.com/tomnudd/durhack"
technologies:
  - "node-js"
  - "mongo-db"
  - "capital-one"
  - "twilio"
---

![Tabs Me, My Day, My People and My Money with a calendar beneath](https://res.cloudinary.com/samrobbins/image/upload/v1591793300/images/portfolio/images_portfolio_durhack2019_pyn6xr.png)

Our project was to build a tool to help people with dementia remember things, this is implemented in various ways, as described below.

### Capital One

For this, we used the Capital One API to model new transactions coming in and checking if repeat payments are being made. This is done by checking the location and cost of the payment against the previous payments. The reason why this would be useful is that for people with dementia they may forget that they have already bought things, and so buy it again, wasting money. This will allow them to save money by giving them a guess as to if they have already bought that item

### Twilio

We use Twilio to notify the person about important things they should remember. We simplified this process by creating a one-line solution to sending a message through Twilio to any phone number.

### MongoDB hosted on the Google Cloud

We store user account data on the Google Cloud and authenticate users with Auth0. The database also stores information about each user, such as their hobbies and interests, to help them retain their sense of self despite memory loss.
