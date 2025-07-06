---
title: "Train Departures"
slug: "train-departures"
description: "A command line train departure board"
date: 2021-08-20
icon: "fe:train"
website: "https://trains.pages.dev/"
github: "https://github.com/samrobbins85/trains"
technologies:
  - cloudflare-workers
  - vite
  - javascript
  - tailwind-css
  - national-rail
  - react
  - ansi-colors
  - geolib
  - react-router
  - itty-router
  - swr
---

This project was inspired by [wttr.in](https://wttr.in), which provides weather forecasts on the command line, and I wondered if I could do the same thing with UK train departure boards.

## Usage

Using curl (or equivalent) you can fetch your closest train station with

```
curl trains-production.samrobbins.workers.dev
```

and a specific station with

```
curl trains-production.samrobbins.workers.dev/kgx
```

replacing kgx with the station of your choice

## Development

The first step of this was getting the departure board data. Fortunately, National Rail keeps a [public API](https://www.nationalrail.co.uk/100296.aspx) with a very generous 5 million requests per month, which is more than enough for this small project. The only problem with this is that it uses a SOAP API, which OpenRailData accurately describes as "[not necessarily a developer's first choice](<https://wiki.openraildata.com/index.php/NRE_Darwin_Web_Service_(Public)>)". Fortunately because of this, a range of solutions have been created to make the interaction with the API easier. The one I chose was [ldbs-json](https://www.npmjs.com/package/ldbs-json), which provides the responses as JSON and the requests as a simple function call.

This project was created for the Cloudflare Developer Summer Challenge, so the infrastructure choice was made for me as I needed to use Cloudflare Workers for a valid entry. The experience of using these are quite different to using AWS lambdas (or services that wrap them such as Vercel or Netlify) as on the free plan you have only 10ms to do all your computation. Note that this is just for the computation, and so the additional time consumed for data fetching isn't included. For this tradeoff however, you do get two key advantages, the functions are deployed on every one of Cloudflare's datacentres, and you get a much more generous allocation of requests of 100,000 per day. The developer experience is also quite different as when doing local testing, the workers are uploaded to the cloud and then the requests tunnelled back and served as localhost. The advantage of this is that you know that what you test locally will work when deployed, however it leads to an increase in latency when making changes.

To get the data, all that was needed was to write a simple function using the `ldbs-json`:

```js
async function getDepartureData(station) {
  const api = new LiveDepartureBoardService(nationalrail, useStaffVersion);
  const resp = await api.call("GetDepBoardWithDetails", { crs: station });
  return resp;
}
```

Environment variables are also handled in a bit of an unusual way in CloudFlare workers, as instead of using `process.env` like in Node.js, they are provided as global variables, so `nationalrail` in the above function is my key for national rail.

This function was then used in a function to generate the command line departure board. This made use of the libaries `table` and `ansi-colors` from npm, both of which work with ANSI special characters to achieve their function, meaning they can be sent over the network and still have the desired appearance. The first part of this was getting the data I wanted and colouring it in yellow like station departure boards, which could be done with the following map (here `c` is `ansi-colors`)

```js
const data = departureData.GetStationBoardResult.trainServices.service.map(
  (item) => [
    c.yellowBright(item.std),
    c.yellowBright(item.destination.location.crs),
    c.yellowBright(item.platform || ""),
    c.yellowBright(item.cancelReason ? "Cancelled" : item.etd),
  ]
);
```

Then I needed to add the headers to this array, which could be done with `unshift`

```js
data.unshift(["Time", "Destination", "Plat", "Expected"]);
```

Then a call of the `table` function turned this array into a nice table

```js
return table(data, {
  header: {
    alignment: "center",
    content: departureData.GetStationBoardResult.locationName,
  },
});
```

One of the nice features of Cloudflare workers is that you have access to the `cf` object which contains all sorts of information about the request, including the Latitude and Longitude of where it came from. Using this in combination with a very useful [list of train station locations](https://github.com/ellcom/UK-Train-Station-Locations), and the `geolib` library allowed me to easily find the closest station to the user. This was written as the following function where `station_list` is the list of stations shown above

```js
function nearestStation(cf) {
  let closest = "KGX";
  if (cf !== undefined && cf.country === "GB") {
    closest = findNearest(
      { latitude: cf.latitude, longitude: cf.longitude },
      station_list
    );
  }
  return closest;
}
```

This has "KGX" built in as I wanted a fallback for if the object was not available (which the cloudflare example seems to suggest may be possible), and for those outside the UK, it felt nicer to show a well known station rather than the one that was technically closer.

In addition to finding the closest station, I also wanted users to be able to choose their station as a path of the domain. For this I used `itty-router`, which is specifically for Cloudflare Workers (although can be used elsewhere). This allows for returning different responses based on the path provided, and is very nice in that the route chosen is in the order you list them, allowing me to specify different routes at the same depth.

To specify the station, I used the path `"/:station"`, and then the station can be decoded with:

```js
let input = decodeURIComponent(req.params.station).toUpperCase();
```

the upper case here being so that the correct request is sent to the API, then this can be processed in the same way as the closest station.

The next step I wanted was to copy the behaviour of wttr.in in that accessing it by a browser shows a webpage, rather than strangely formatted command line output. For this I used the same list as them of strings that will only occur in the user agent of a terminal, such as `curl`. On a request, I then checked if the user agent contained one of those strings, in which case I would return the command line output, otherwise I would redirect to the website. It would have been nice to use the same domain like wttr.in does, however this is quite complicated for importing assets as all the paths would need to map through to the actual website. It's something I want to try in the future, but I don't mind the different domains right now.

The website then needs to access the data too, however not in the same format as is provided to the terminal, and so I added the `json` route, which allowed for getting the response as JSON. One complication introduced here is that the root page that gives you your closest station was now going over the limit as in order to send JSON, it first needed to be stringified, which was taking longer than the equivalent process of turning it into a table. This means that the site couldn't have the same behaviour, which is unfortunate, and so you can only specify stations.

For the website, I used `vite` and `react-router`, using very similar code to that for the command line output, but just mapping to a HTML table instead of using the `table` library with the below code:

```jsx
<div className="pt-6">
  <h1 className="text-center text-3xl font-semibold">
    {data.GetStationBoardResult.locationName}
  </h1>
  <table className="mx-auto my-6 text-2xl">
    <thead>
      <th className="px-4 border">Time</th>
      <th className="px-4 border">Destination</th>
      <th className="px-4 border">Platform</th>
      <th className="px-4 border">Expected</th>
    </thead>
    <tbody className="text-yellow-300 font-array">
      {data.GetStationBoardResult.trainServices.service.map((item) => (
        <tr key={item.std}>
          <td className="border pl-2">{item.std}</td>
          <td className="border pl-2">{item.destination.location.crs}</td>
          <td className="border pl-2">{item.platform || ""}</td>
          <td className="border pl-2">
            {item.cancelReason ? "Cancelled" : item.etd}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
```

The data fetching was done with the `swr` library which is my favourite way to fetch data in React, with nice simple API and powerful refetching features.
