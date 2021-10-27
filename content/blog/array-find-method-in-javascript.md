---
title: How to find a element from the array in javascript
date: 2021-10-27
updatedAt: 2021-10-27
categories: ['javascript']
draft: false
description: Array.prototype.find help us in finding an element from Array based on the given test condition passed to it.
banner: /images/api.jpeg
bannerCredit: Photo by Ante Hamersmit on Unsplash
---

There are may ways to find an element from an array. One of the way can be we can use an for
loop and iterate over all the elements and check the current element matches our required elements then
that is over element. But that is tedious.

Instead of making our own solution for the problem we can use the Array's find method to find the element.

Let's see an example.

Find a dog with name Charlie,

```js
const pets = [
  {type: 'dog', name: 'Teddy'},
  {type: 'dog', name: 'Charlie'},
  {type: 'cat', name: 'Milo'},
]

const dog = pets.find((pet) => pet.type === 'dog' && pet.name === 'Charlie')

console.log('dog', dog) // {type: 'dog', name: 'Charlie'}
```

The array find method accepts an function as a parameter and calls that function with each value in the array. The method should return true If the element is matched and it should return false if the element is not matched.

`find` method return the first element that satisfies the condition

If none of the element matches, then it will return `undefined`
