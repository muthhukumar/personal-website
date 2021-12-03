---
title: 'Intro to Array map method in Javascript'
date: '2021-10-18'
lastmod: '2021-10-18'
tags: ['javascript']
draft: false
summary: "In this article, I'll give an intro to Array method in Javascript."
---

`Array.prototype.map` method accepts an callback function as a parameter and iterate over all the items
in the array and calls the callback with that value and return a new array with the values returned from the callback function.

Example: Double the values in the array,

```js
const numbers = [1, 2, 3]

const result = numbers.map((number) => number * 2)

console.log(result) // [2, 4, 6]
```

The callback function is called with three parameters

```js
// Callback function with three parameters syntax
function double(value, index, array) {
  return value * 2
}

// Callback function with two parameters syntax
function double(value, index) {
  return value * 2
}

// Callback function with one parameters syntax
function double(value) {
  return value * 2
}
```

Here, value is the element in the array. index is the current element position in the array. And array is the array the map is called with.

#### When to use it?

- When we want to iterate over all the items in the array and want to modify the value and create a new array with that values.

#### When not to use it?

- Do not use it just for the iterating over the array. If you want to iterate over the array then use for loop or for each loop. They are better suited for those use cases.

#### More examples

1. Greet array of users

```js
const users = ['Muthu', 'Siva', 'Praveen']

function greet(name) {
  return `Hello! ${name}`
}

console.log(users.map(greet)) // ['Hello! Muthu', 'Hello! Siva', 'Hello! Praveen']
```
