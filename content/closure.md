---
title: 'What is a closure?'
date: '2020-07-11'
lastmod: '2020-07-11'
tags: ['javascript']
draft: false
summary: 'Brief explaination about closure in Javascript. '
---

In simple words, when a function inside another function access variable that is outside of that function then, that can be called as **Closure**.

```js
function OuterFunction() {
  let message = "I'm a variable inside outer function"
  function InnerFunction() {
    console.log(message)
  }
  InnerFunction()
}

OuterFunction()
```

In the above example, the InnerFunction function has access to the variable outside of that function. That's a **Closure**.

When the OuterFunction is called, the OuterFunction function is created with the message variable and InnerFunction function. So when the InnerFunction is called inside OuterFunction it has access to the message variable. Now you think once the OuterFunction gets executed do you think whether the InnerFunction can have the access to the message variable. Yes, the InnerFunction has access to the message variable that is because of the **Closure**.

As long as the InnerFunction can be called inside the OuterFunction, the message variable continuous to exist even after the OuterFunction is finished executing. The javascript compiler keeps the message variable alive because it is needed by the InnerFunction. And the existence of the message variable, because it is needed by the InnerFunction, is called the **Closure**

So, what happens when we did not call InnerFunction inside OuterFunction. Then, the message variable gets cleared from the memory when the OuterFunction is finished executing.
