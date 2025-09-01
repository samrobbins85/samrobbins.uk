---
title: "Structured text to markdown"
slug: "structured-text-to-markdown"
description: "Converting DatoCMS structured text to markdown"
date: 2021-06-04
icon: "material-symbols:markdown"
npm: "https://www.npmjs.com/package/dato-to-markdown"
github: "https://github.com/samrobbins85/dato-to-markdown"
technologies:
  - "javascript"
  - "node-js"
  - "remark"
  - "graphql"
  - "ora"
  - "inquirer"
---

I'd been using DatoCMS structured text for my blogs, but I wanted to convert them back to Markdown to have better control over what is included. This facility isn't included in DatoCMS, so I decided to build it myself.

The first step for this was using the inquirer library, which allows you to provide prompts to the user to get the information required, like their API token and required model. The only complexity with this bit was having a conditional question for the folder name depending on if the user wants the files in a folder, but this has quite a nice included solution.

```js
inquirer.prompt([
  {
    type: "input",
    name: "token",
    message: "What's your API Token?",
  },
  {
    type: "input",
    name: "model",
    message: "Which model do you want to query?",
  },
  {
    type: "input",
    name: "title",
    message: "What's the name of the field you want to use as file names?",
  },
  {
    type: "input",
    name: "structuredtext",
    message: "Which field contains the structured text?",
  },
  {
    type: "confirm",
    name: "folder",
    message: "Do you want the files to be put in a folder?",
  },
  {
    type: "input",
    name: "folder_name",
    message: "Okay! What name do you want the folder to have?",
    when(answers) {
      return answers.folder;
    },
  },
]);
```

These answers then formed a GraphQL query which I made to DatoCMS to get all the information I needed. This required the use of both the `capitalize` and `pluralize` libraries, as DatoCMS converts an individual `blog` into `allBlogs` when making a request for the whole collection.

```js
async function getAllBlogs(token, model, title, structuredtext) {
  const data = await fetchAPI(
    token,
    `
    {
      all${capitalize(pluralize(model))} {
        ${title}
        ${structuredtext}{
          value
        }        
      }
    }
    `
  ).catch((e) => console.log(e));
  return data[`all${capitalize(pluralize(model))}`];
}
```

Once the data is fetched, it then comes to converting the Structured Text to Markdown. The starting point for this is `datocms-structured-text-to-html-string`, an official library by DatoCMS to convert the structured text to HTML. And from here I can use the unifiedjs ecosystem to convert it to Markdown. One catch here is how the Structured Text to HTML library handles code blocks, as it places the language class on the `pre` tag, whereas unifiedjs expects it on the `code` tag. Fortunately, the library allows custom render rules, which allow me to put the class on both `pre` and `code`

```js
const content = render(structuredtext, {
  customRules: [
    renderRule(isCode, ({ adapter: { renderNode, renderText }, key, node }) =>
      renderNode(
        "pre",
        { key, class: `language-${node.language}` },
        renderNode(
          "code",
          { key, class: `language-${node.language}` },
          renderText(node.code)
        )
      )
    ),
  ],
});
```

Then it's just a case of passing this to remark and running it through `rehype-remark`

```js
const markdown = await rehype()
  .use(rehype2remark)
  .use(stringify)
  .process(content);
```

These markdown files can then be written to the disk using `fs` in a loop, and I wrapped all this in an `ora` progress indicator, so the user can see how the conversion is going as it could take some time for many files
