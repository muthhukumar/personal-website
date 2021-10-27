---
title: What is an API in simpler terms?
date: 2021-08-30
updatedAt: 2021-08-30
categories: ['computer science']
draft: false
description: In this article, I explain what is an API in simpler terms.
banner: /images/api.jpeg
bannerCredit: Photo by Ante Hamersmit on Unsplash
---

In computer science, API stands for **Application programming interface**. But what does that mean?

First let's see how API works.

A complete API flow involves two parties

1. Client(web application or another server and so on)
2. Server

The client request for data(Eg: user data) by sending a request to the server end point(https://api.example.com).

An API is an server, which listen for a new request. When it get a new request, server will process the request and prepare the response(some data based on the request) and send back the response to the client

Let's see an another example to understand the concept of API.

Imagine you're going to a hotel and the waiter gives you the Menu. You select a food from the menu and
place an order. Once you placed the order waiter takes the order and goes to the kitchen and tells the
chef to make the food you ordered.

Now, the chef see what you ordered and start preparing your food. He takes the ingredients for the food
and start cooking. Once the chef finished cooking, the waiter takes the food and deliver it to you.

We can relate the above example to the API as,

```
Waiter - API
Menu - API docs
Kitchen - Server
```

Here, the waiter is the API which receives request(food order), takes the request(food order) to the kitchen(server) for processing(response).
Chef in the Kitchen(server) takes the order and prepare the response(food). Now the waiter get the request(food) and deliver it to you.
