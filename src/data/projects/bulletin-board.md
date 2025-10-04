---
title: "Bulletin Board"
slug: "bulletin-board"
description: "Bulletin board using Python socket programming"
date: 2019-12-06
icon: "heroicons:chat-bubble-bottom-center-text"
github: "https://github.com/samrobbins85/NS-Networks-Coursework"
technologies:
  - "python"
---

This coursework was to implement a client-server system for a simple anonymous bulletin board system using TCP.

This system makes heavy use of the `socket` Python library for communicating between the client and server. There is also a large amount of error checking involved to ensure that commands can be properly executed.

## Error checking

The following errors were checked for

- Unavailable/busy port
- No message boards defined
- Specified board doesn't exist
- Invalid message

## Logs

The server program keeps logs of every request it receives during all client-server communication
