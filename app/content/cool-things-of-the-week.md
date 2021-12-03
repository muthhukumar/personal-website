---
title: Cool things I found in this week
date: '2021-03-14'
tags: ['cool-things']
draft: false
summary: In this post, I listed out the Cool things I found in the week of 2021/03/14
---

As I was thinking content for another blog, this idea of sharing what I found this week's post came, and I thought of giving it a shot and do this every week. Let's see in the upcoming weeks whether I will follow it or not.

I don't want it to be some list of things I found. But I want it to be like a story I like to narrate. For this week, the list of things is not going to be in order. As I only know what I want to share and not the date, I found these things.

<br/>

# Here is the list of things I found this week.

## Redirect/Simple URL shortener using the Netlify

When I was scrolling the list of videos in my feed on Youtube, I saw [Kent C Dodds](https://kentcdodds.com/) making a URL shortener using Netlify. As you may or may not know, [Netlify](https://netlify.com) is a cloud computing company that offers hosting and serverless backend services for web applications and static websites. So by using Netlify, we can deploy a \_redirects file that looks something like this.

```yaml
/github https://github.com/0-void
/twitter https://twitter.com/_Muthukumar_P

/* https://nullish.in
```

Now deploy this file to Netlify.

I have already deployed and assigned my domain name to it. If you go to [redirect.nullish.in/github](http://redirect.nullish.in/github) it will redirect you to my Github profile. If we try to visit some alias that is not added to the \_redirects file, it will redirect to my blog site.

If you want to do this for your site, then follow the steps in this [video](https://www.youtube.com/watch?v=HL6paXyx6hM&list=PLV5CVI1eNcJgCrPH_e6d57KRUTiDZgs0u).

---

## [fly.io](http://fly.io)

Recently, I was looking for an alternative for Heroku. If you wonder what [Heroku](https://heroku.com) is, here is what google says, "Heroku is a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud."

The reason I was looking for an alternative is not that Heroku sucks. I love the free tier they provide. But the only problem is the app deployed in the Heroku will go to sleep if it didn't get any traffic for more than 30 minutes. After 30 minutes, If we try to hit the API server hosted in the Heroku, it will take around 15 seconds to boot up.

### How I found the fly.io

I was watching one of the live stream videos of the Kent C Dodds. In that video, he was doing some frontend work in react. Then he mentioned something like he wanted to host the application in the [fly.io](http://fly.io/) to test it in dev.

Then I googled and looked into their official site and found they allow us to deploy server and static websites and docker container. And they also offer a free tier. In that free tier, we can have 3 apps with total uptime. For more details about the free tier, look into their [official site](http://fly.io).

If you want to deploy a server or static of your personal project, then give it a shot. You'll love it.

---

## Alias for long command in terminal

If you use the terminal a lot, then it may be helpful for you. Most of the time, I work on a react project or Node project. So I use npm most of the time daily. Imagine daily running command like

> npm run dev

The above command is used to run the application in the development mode. And we have to type and execute this command whenever we want to start the development server.

And recently, I was learning docker also. So in docker, we use a long command to start and close the container. And sometimes, the docker and docker-compose commands are too long to type. So I googled, searched some alias, and added them also.

what we can do is, we can add an alias name for each command in the terminal profile file. Then we can use the alias instead of the whole command.

Some of the alias I use are

> nrd - npm run dev

> dcu - docker-compose up -d

> dcd - docker-compose down

I use zsh as my terminal, so I added these alias to the .zprofile file.

```yaml
alias nrd="npm run dev"
alias dcu="docker-compose up -d"
alias dcd="docker-compose down"
```

If you want to add the alias to the command, just search how to add the command alias to the terminal you use.

---

## [mailu.io](http://mailu.io)

For a year or so, I wanted to buy a domain. But I'm still studying in college(at the time of writing this post). So I don't have enough money to purchase and renew the domain every year.

Now, I'm working as an Intern in [Actyv](https://www.actyv.com) and earning some money. Now, I have enough money to buy a domain. And I bought this domain recently. After buying it, I got excited and informed my co-worker and friends about I bought a domain name.

One of my coworkers told me to try to set up a mail server using the domain name. At first, I thought of doing it and saw there are so many steps involved in setting up a mail server. So I ended up dropping the idea.

As I previously mentioned, I was learning docker for the past week. Yesterday I got an idea like, What if there is a docker image that already has a mail server in it. Then I searched in google as mail server docker image. Then, I found the [mailu.io](http://mailu.io/) docker image using that to configure and deploy our mail server. I don't have any free instances, so again, I ended up not doing that.

If you want to set up for yourself, then follow the setup in this video. You don't have to use the same service provider as it is used in the video.

> Don't use this for business use. If you just want to try it out, then use it at your own risk. Please read some articles about setting up a custom mail server and its stake before setting it up.

---

## Wordpress in docker

wordpress???

> WordPress is a free and open-source content management system written in PHP and paired with a MySQL or MariaDB database. Features include a plugin architecture and a template system, referred to within WordPress as Themes

Yes, there is a docker image for WordPress.

I don't use WordPress, so I didn't explore the available features in the docker image. But I just pulled the docker image and tried it out. It looked good. If you know docker and you use WordPress, then give it a shot. You'll love it.

---

## Deploy notion page with Nextjs in Vercel

If you don't know none of those mentioned above terms then,

> Vercel combines the best developer experience with an obsessive focus on end-user performance. Our platform enables frontend teams to do their best work.

> Notion is an application that provides components such as notes, databases, kanban boards, wikis, calendars and reminders. Users can connect these components to create their own systems for knowledge management, note taking, data management, project management, among others.

> Next.js is an open-source React front-end development web framework that enables functionality such as server-side rendering and generating static websites for React based web applications.

S**ource:** Google, Wikipedia

Lately, I thought of writing the blog content in the Notion and host the notion page somehow. I looked all over the internet and found one [article](https://dev.to/kojikanao/set-up-a-blog-with-notion-and-vercel-in-10-min-4nb1). If we used the method mentioned in the article, we have to maintain a separate table, and in that, we have to add the blog post page. And using the Nextjs and some other packages and using the root page id will render the content in the notion page to the UI.

But that is not good enough, right. If we use that solution, then we have to design and maintain other aspects of the page. So I dropped the idea. Later I found one repository in Github, in which all we have to do is clone the repo and enter our page id.

But the difference is we don't have to maintain a table or something. The application will render the content in the given page id. That's it. It will almost look as same as in the Notion. So you don't have to do anything. All you have to do is configure the application as mentioned in the Github repository readme. That's it.

Here is the link to the repository([Nextjs Notion starter kit](https://github.com/transitive-bullshit/nextjs-notion-starter-kit))

---

## Github private repository

I don't know If you know or not or you know that Github allows us to create a private repository for a very long time. But I found it only recently that we can create a private repository.

As I was working on a personal project, I finished the things I want to do for the day and tried to push the code to the repository. This is a new project, so I didn't create a repository in Github.

There is a feature in Vscode that allows us to push the code to Github. If the repository does not exist, it will create the repository and push it to that repository.

I was using that feature as usual, and upon typing the repository name, somehow, the create private repository came up above the public repository option. I typed the repository name and pushed the code. Then after that, I come to the realization I used the private repository option.

I was confused why the Vscode didn't show an error message that a private repository cannot be created. Then I went to that repository Github and saw that project Github repository is labeled as the private one. I was like, "What???????".

Then, right after that, I searched google regarding the private repository thing in Github. They mentioned that they made some of the Enterprise features public as part of the free plan on the Github page.

---

## That's it for this week folks. Thanks for reading💖...
