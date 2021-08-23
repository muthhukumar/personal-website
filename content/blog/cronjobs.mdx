---
title: cron-jobs
date: '2021-03-06'
tags: ['heroku', 'cron-jobs']
draft: false
summary: How to prevent the Heroku app from idling after 30 minutes?. And keep the app active.
---

As you may know, Heroku provides free instance to host various services. If we create a Heroku app in the hobby tier, then there are few limitations.
For example, each account has free dyno hours of 550 hours.

```
NOTE: Here dyno means an app in Heroku
```

If an app has a web dyno that is receiving traffic or has a worker dyno running, it actively consumes free dyno hours.
But if the dyno receives no traffic in a 30-min period, then it will sleep. And it don't consume free dyno hours when sleeping.

But we may don't what this behaviour. Atleast we want to keep it alive in the day time.
But we can't manually hit the API route periodically.
But we can schedule something like crop-jobs to do the calling for us.

### What is Cron-jobs?

A cron-job is something that is scheduled to execute some task in the specified time in the future.

### How to prevent the Heroku app from idling after 30 minutes?

To prevent our Heroku app from sleeping, we will set up a cron-job to call an API in our server.
The server needs to have an API route so that we can use it in the cron-job.

It may look like this,

<div className="my-1 px-2 w-full overflow-hidden xl:my-1 xl:px-2">
  <Image alt="cron-job dashboard" src="/static/images/api-route.png" width={1222} height={448} />
</div>

Here I'm using the Nodejs server as an example. Let us assume where we already have a Nodejs server hosted in Heroku, and we want to
keep the server from sleeping in the day time. If we keep our app alive from _6AM_ to _12AM_, then the total number of hours is 540, below the free dyno hour.
So we are going to set up the crop job as such.

### Creating a cron-job

For this, we are going to use [cron-jobs](https://cron-job.org/en/) website to create our cron-job.
Create an account on the website mentioned above. Once completed and logged in, navigate to the members' page and click on the `Cronjobs` button.

You can see something like this,

<div className="my-1 px-2 w-full overflow-hidden xl:my-1 xl:px-2">
  <Image alt="cron-job dashboard" src="/static/images/cron-job.png" width={1938} height={674} />
</div>

Now in the `Title, Address` input, enter the server's title and in the second input box, enter your Heroku app URL `https://todo-server.herokuapp.com/ping`.
It may look like this,

<div className="my-1 px-2 w-full overflow-hidden xl:my-1 xl:px-2">
  <Image alt="cron-job dashboard" src="/static/images/cron-title.png" width={1402} height={290} />
</div>

If your API route uses the username and password authentication, enter those value in the `Requires HTTP authentication` input box.

Then, in the `Schedule` input select the user-defined input and select the time in which the cron-job need to call the API route.
For our case, I'll choose all the days of month, week, hours. In minutes input, choose 1 and 30 by holding **CTRL** key
and select the required minute. Or just follow the steps in the gif.

<div className="my-1 px-2 w-full overflow-hidden xl:my-1 xl:px-2">
  <Image
    alt="cron-job dashboard"
    src="/static/images/cron-execution-time.gif"
    width={1222}
    height={448}
  />
</div>

Now, go below and press the Create job button and it will create you cron job.
Once the cron-job is created in the dashboard you can see your cron-job.
If you press the History button then you can see the scheduled cron-job.

Now, this cron-job keep your heroku app from sleeing after 30minutes.

<br />

# Thank you for Reading💖.
