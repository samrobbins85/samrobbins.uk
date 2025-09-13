---
title: "Next Auth Authentication Token"
description: "Get the Authentication token from Next Auth, so you can interact with the API"
language: "JavaScript"
date: 2021-08-22
---

This example is for GitHub, but it should work for all providers

```js
export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async jwt(token, account) {
      if (account?.accessToken) {
        token.accessToken = account.accessToken;
      }
      return token;
    },
    async session(session, token) {
      session.accessToken = token.accessToken;
      return session;
    },
  },
});
```
