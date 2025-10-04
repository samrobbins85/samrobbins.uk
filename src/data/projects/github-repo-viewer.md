---
title: "GitHub Repo Viewer"
slug: "github-repo-viewer"
description: "View your GitHub repositories grouped by tag"
date: 2021-11-06
icon: "octicon:repo-24"
website: "http://repo-viewer.vercel.app/"
github: "https://github.com/samrobbins85/repo-viewer"
technologies:
  - "next-js"
  - "swr"
  - "tailwind-css"
  - "react"
  - "javascript"
  - "next-auth"
  - "graphql-request"
  - "github"
---

## Problem

This project is designed to help me find my repositories that use specific technologies or themes by making use of the GitHub Topic system. The home screen shows all the topics on all my repositories, and I can click any of these topics to see all the repositories that have that topic.

## Solution

### Authentication

The first thing to do is to get a GitHub token to be able to access their API and get the data needed. As I was using Next.js I decided to use NextAuth, this is a great library that makes use of the Next.js API routes to make setting up authentication really simple. First was setting up the provider in the way I wanted it to, which involved increasing the scope to `"repo, user"` and changing the name to the username, which I needed for searching later:

```js
providers: [
    Providers.GitHub({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
        scope: "repo, user",
        profile(profile) {
            return {
                id: profile.id,
                name: profile.login,
                email: profile.email,
                image: profile.avatar_url,
            };
        },
    }),
],
```

By default the providers just give you the user information, rather than any access tokens, luckily you can use callbacks to pass the additional information through by following [their docs](https://next-auth.js.org/configuration/callbacks). So all I needed was:

```js
callbacks: {
    async jwt(token, _, account) {
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
```

and the final step in the configuration for authentication is wrapping the app in their provider, which can be done like this:

```jsx
<Provider session={pageProps.session}>
  <Component {...pageProps} />
</Provider>
```

Now I can use the `useSession` hook to get access to both the access token and their username, all I need to make my requests.

### Data Fetching

Now I can access the API key I'm ready to get some data from it. GitHub has both a REST and GraphQL API but the GraphQL one was more suited for this project as I was going fairly deep wanting every topic from every one of my repositories and so this would have required many REST requests for what I can do in a single GraphQL one.

For the homepage, my request looks like this (with some additional logic I'll get to in a bit)

```graphql
{
  viewer {
    repositories(first: 100) {
      nodes {
        name
        repositoryTopics(first: 100) {
          nodes {
            topic {
              name
            }
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
}
```

The outermost part of this is `viewer` which just means that the query should be done on the account of the logged-in user. Then it's saying to get the first 100 repositories and in those repositories, get the first 100 topics. The additional `pageInfo` part is to allow me to perform pagination.

I wanted to use pagination as I have more than 100 repositories and so this request wouldn't list them all and 100 is the limit for a for the `first` property. So what I need to do is make requests over and over again for each 100 until all the repos are shown. I could've chosen to write all this logic myself, but luckily my favourite data fetching library SWR has a feature called `useSWRInfinite` which is designed for pagination and allows for programmatically fetching more data.

To set up SWR, you first have to choose a data fetcher to use with it, the most common choice for me here is to use the `fetch` web API, but for this project as I was working with GraphQL I decided to use the `graphql-request` library which has some nice additional features for making GraphQL requests.

I needed these requests to be authenticated, and so to do this I created a component around the `SWRConfig` provider, first just a component that takes the children and returns the SWRConfig wrapping the children, then using the `useSession` hook to get the Access Token. With this, I could then create a new GraphQL client with the token as a header, and create a fetcher function from the client and pass this to the SWRConfig. The end result of this is that if `session.accessToken` is defined, an authenticated request can be made anywhere in the app. The code for all this looks like this:

```jsx
export default function SWRProvider({ children }) {
  const [session] = useSession();
  const client = new GraphQLClient("https://api.github.com/graphql", {
    headers: { authorization: `Bearer ${session?.accessToken || ""}` },
  });
  const fetcher = (query) => client.request(query);
  return (
    <SWRConfig
      value={{
        fetcher,
      }}
    >
      {children}
    </SWRConfig>
  );
}
```

And I just wrapped this around the `<Component />` in `_app.jsx`, making sure this is **inside the session provider** otherwise `useSession` won't work.

Now I was ready to start using the SWR library with the following line:

```jsx
const { data } = useSWRInfinite(getKey, {
  initialSize: 10,
});
```

This is saying to use the function `getKey` and to initially get up to 10 pages (1000 repos). It's going to take me a long time to get to that number, and I've only ever seen a couple devs with that many repositories, so it felt like a good quantity and prevents making a huge number of requests if a bug occurs.

The `getKey` function defined what request I want to make, and what logic is involved for pagination (the additional logic I was talking about earlier). This function takes the page index and the data from the previous page and should return what query to perform next. For the GitHub API it doesn't operate based on page numbers and instead based on a cursor where I specify where the previous request finished, so I'm interested here in the data from the previous page.

The first bit of logic is to know when I'm finished, as the initial size is **up to** 10 pages, but if I return a `null` earlier from this function then it'll stop, which is perfect as I don't want it making excess requests. This can be done with this conditional:

```js
if (
  previousPageData &&
  !previousPageData.viewer.repositories.pageInfo.hasNextPage
)
  return null;
```

This checks there is data to check (so not the first page) and if to, looks at the response and if it says there is a next page. If this isn't present, then there's no more data, and it should stop.

Then I want to make the request, and this modifies the request as I showed before by adding an `after` parameter which says to get the next set of responses after this cursor:

```js
return `
	{
		viewer {
		  repositories(first: 100 ${
        previousPageData
          ? `after: "${previousPageData.viewer.repositories.pageInfo.endCursor}"`
          : ""
      }) {
                       // Rest of the request as above
		  }
		}
	  }`;
```

I can then take this response and pass it through a pretty nasty chain of `map`s `flat`s and friends in order to give me a list of objects which contained the tag title and number of occurrences, sorted by the occurrences. Here I'm using `countBy` from lodash that takes an array and turns it into an object, mapping each unique element to the number of times it occurs and the `Object.fromEntries` and `Object.entries` thing is the simplest way I could find to sort an object by the keys.

```js
store = Object.fromEntries(
  Object.entries(
    countBy(
      data
        .map((item) => item.viewer.repositories.nodes)
        .flat()
        .map((item) =>
          item.repositoryTopics.nodes.map((elem) => elem.topic.name)
        )
        .flat()
    )
  ).sort(([, a], [, b]) => b - a)
);
```

This then means that I can have nice tidy JSX to map over the items and make some cards out of them:

```jsx
{
  store &&
    Object.keys(store).map((topic) => (
      <Link href={`/${topic}`} key={topic}>
        <a className="p-4 border rounded">
          <h2 className="text-lg font-semibold">{topic}</h2>
          <span className="text-gray-700">
            {store[topic]} {store[topic] === 1 ? "repository" : "repositories"}
          </span>
        </a>
      </Link>
    ));
}
```

### Individual topic pages

The code for the individual topic pages looks pretty similar to the homepage in terms of the authentication and using `useSWRInfinite`. However the query is structured a little differently as it's much more efficient to get the data as a search than getting all the repos like on the homepage. This was why I needed to get the username when doing the authentication as you can't do a `"search user:me"` kind of thing, and so have to specify the username. So this request looks a little messier with more information passed in, but it didn't feel worth it to change my request configuration to use GraphQL variables over a template string

```js
`{
search(query: "user:${
  session.user.name
} topic:${topic}", type: REPOSITORY, first: 100 ${
  previousPageData
    ? `after: "${previousPageData.search.pageInfo.endCursor}"`
    : ""
}) {
    nodes {
    ... on Repository {
        id
        name
        url
        repositoryTopics(first: 100) {
        nodes {
            topic {
            name
            }
        }
        }
    }
    }
    pageInfo {
        hasNextPage
        endCursor
    }
}
}`;
```

This page also has the possibility of being a 404, so I just used the built in `<Error/>` component in Next.js if the data was empty.

### Layout

Finally was adding a little layout component so I didn't need to reuse the same code for headers througout. This uses the `signIn` and `signOut` functions from `next-auth`, and if you pass `"github"` to the function it directs straight to GitHub rather than going to the intermediate page which is nice. I also used this to add a landing page component if there was no session.

I then just wrapped this component around `<Component />` in `_app.jsx` like a provider so it worked on all pages
