---
title: "CV CLI"
slug: "cv-cli"
description: "A command line CV made with Node.js"
date: 2020-12-13
icon: "heroicons:document-text"
github: "https://github.com/samrobbins85/cli-cv"
npm: "https://www.npmjs.com/package/samrobbins"
technologies:
  - "react"
  - "ink"
  - "node-js"
---

This was initially inspired by a project I saw on dev.to to [create a personal npm card](https://dev.to/cdthomp1/create-your-own-npm-card-ejp), this was a great project, and I followed it through and loved the result, but thought I could expand on the idea.

If you look at my portfolio you can see I like to experiment with different ways to make and present a CV, so I thought this could add to that theme by creating a npm CV.

Using a couple of lightweight node packages was good for the card, but to build a CV I would need more complex layout features, so I decided to use [ink](https://www.npmjs.com/package/ink), which allows you to use React to create a CLI. Notably it uses Yoga to build flexbox layouts, which would be very useful to get everything laid out as I wanted.

First up was to create a box in which my CV would sit, for this I used the `Box` component, along with specifying `borderStyle="double"` to give a nice border.

Then was adding a title at the top, for this I found the [ink-big-text](https://github.com/sindresorhus/ink-big-text) library, which allows for creating ASCII art titles. However, one problem I ran into was that my title would then be too big on narrow terminals and so not display properly. To fix this, I used the value `process.stdout.colums`, which tells you how many columns the terminal has, and so I could use this to change the font to a smaller one if the terminal was narrow.

Next was the main content of the CV, for this I created a few components to allow for a more consistent layout.

## Section

For each section of the CV, I had a component, this would just pass through the children, but would also take a title prop which created an ASCII art title for each section, this looked like this

```jsx
function Section(props) {
  return (
    <Box flexDirection="column">
      <BigText text={props.title} font="tiny" />
      {props.children}
    </Box>
  );
}
```

## Skill

For the skills section, I use a slightly different component as it is more of a list format, and so the component looks like this

```jsx
function Skill(props) {
  return (
    <Box>
      <Box width={25}>
        <Text bold>{props.name}</Text>
      </Box>
      <Text>{props.children}</Text>
    </Box>
  );
}
```

## Item

For most sections, I have the format of a title, with the date on the same line but right aligned, with a description beneath, and so this component allowed for that design.

```jsx
function Item(props) {
  return (
    <Box flexDirection="column" marginBottom={1}>
      <Box justifyContent="space-between">
        <Text bold>{props.title}</Text>
        <Text italic>{props.date}</Text>
      </Box>
      <Text>{props.children}</Text>
    </Box>
  );
}
```

## JSON

To make future manipulation easier, I wanted to have the CV as a JSON file, which would then work to populate the code. Getting this in the main file was easy, by just using the line

```js
const config = require("./config.json");
```

Then for each section, I would use conditional rendering using the pattern

```jsx
{
  config.skills ? <Code /> : undefined;
}
```

This meant that if the key `skills` wasn't there, then the section wouldn't render, and if it was, then it would.

I could then use `map`s to add each bit of content, with the skills section being slightly more complicated because I wanted the user to be able to specify the title for each category using the JSON keys, which looks like this

```jsx
<Section title="Skills">
  {Object.keys(config.skills).map((title) => (
    <Skill name={title}>{config.skills[title].join(", ")}</Skill>
  ))}
</Section>
```

Whereas the rest were more simple in mapping over a list of objects

```jsx
<Section title="Qualifications">
  {config.qualifications.map((item) => (
    <Item title={item.title} date={item.date}>
      {item.description}
    </Item>
  ))}
</Section>
```

Then was the case of allowing this to be executed in the terminal, the suggested way is to use `importJsx` to import the file that uses React

```js
#!/usr/bin/env node
"use strict";
const React = require("react");
const importJsx = require("import-jsx");
const { render } = require("ink");
const cv = importJsx("./ink");
render(React.createElement(cv));
```

It is also possible to do this using Babel, but this worked for me
