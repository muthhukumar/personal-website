---
title: Cool things I found in week of 28 March 2021
date: '2021-03-28'
tags: ['cool-things']
draft: false
summary: In this post, I listed out the Cool things I found in the week of 28 March 2021
---

Last week I didn't find anything new and wanted to spend Sunday by watching some anime, so I didn't bother to write a post and didn't have much of a motivation to write either. But for this week, I came up with a flow so that it can be easy when I work on the post on Sunday. This week, I have found quite a few new things.

---

# Here is the list of things I found this week

## [Nextra](https://nextra.vercel.app/)

Nextra is one of the coolest things I have found in this week so far.

Nextra is a static site generator using Nextjs. It can generate pages or static HTML using an MD file or MDX file. It also has various features like Markdown with React components (MDX), automatically generated sidebar and anchor links, file-system-based routing, built-in syntax highlighting, i18n, and more.

In short, we can write our blog or whatever content in an MD or MDX file then place those files in the page's directory. Based on how we structure the files, it will generate a sidebar and pages.

If you want to use this as your blog, then you can use this. Just remove the existing MD and MDX files and replace them with your blog content.

Before doing anything, go through the docs of Nextra and follow those steps. That's all you want to do. But don't randomly delete files in that folder. Example: Don't delete files like \_app.js. If you delete that, then the app will crash.

What I'll suggest is setup the Nextra as mentioned in the docs.
And write your blog in [notion.so](http://notion.so/) and export the content as markdown file and place the file in the directory based on how you wish to structure it. That's it.

Just give it a try you'll love it.

## [React-boiler-plate](https://github.com/react-boilerplate/react-boilerplate)

If you're using react for quite a while, then you might know [create-react-app](https://create-react-app.dev/). So this is the same as the create-react-app. Not quite the same, but both generate the template for a new project.

The difference is things like routing, global store, and memorization of state are pre-configured. And there are few scripts available you can use to generate components and containers(pages/screens), and it also allows us to configure the containers with few options.

If you're planning to use this boilerplate, then don't use it for small projects. As most of the things are pre-configured and maybe you end up not using most of the stuff react-boiler-plate provides.

## [immer](https://immerjs.github.io/immer/)

Immer (German for: always) is a tiny package that allows you to work with immutable state in a more convenient way. It is based on the *[copy-on-write](https://en.wikipedia.org/wiki/Copy-on-write)* mechanism.

> The basic idea is that you will apply all your changes to a temporary *draftState*, which is a proxy of the *currentState*. Once all your mutations are completed, Immer will produce the *nextState* based on the mutations to the draft state. This means that you can interact with your data by simply modifying it while keeping all the benefits of immutable data.

In short, we directly manipulate the object in the draft, then immer will take care of copy the object and updating it. So we don't have to deep copy and update the state object. Like as we do in the redux store. We can modify the draft based on our requirement immer will take care of the rest.

## [devhints.io](https://devhints.io/)

[Devhits.io](http://devhits.io/) contains all the cheatsheets you'll ever need. Just search for the thing you mostly use and don't think about those commands again😂.

## [react-error-boundary](https://github.com/bvaughn/react-error-boundary)

If you ever used react, then you'll know we can use the ErrorBoundary higher-order component to handler error in the runtime. Creating our own ErrorBoudary higher-order component and maintaining it is hard.

So, If you want an existing solution for the ErrorBoundary, then you can use the react-error-boundary package in npm. It provides a simple and reusable wrapper that you can use to wrap around your components. Any rendering errors in your components hierarchy can then be gracefully handled.

If you working on a react project, then give it a try..

## [codesandbox](https://codesandbox.io/)

I don't know what to say about this. Codesandbox is one of the coolest things ever. In code sandbox terms, we can create a sandbox with an existing template. We can also import our react or node project from the git repository.

We can share the sandbox with other people, collaboratively with other people in a sandbox. And we can do many more things. I just found this today played around with it for a while.

That's all I want to say about it based on today's experience.

---

# Thanks for reading💖. Hope you enjoy it.
