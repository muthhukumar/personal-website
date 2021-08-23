---
title: 'Why you should avoid magic numbers in your code?'
date: '2021-08-15'
lastmod: '2021-08-15'
tags: ['javascript', 'refactoring', 'clean-code']
draft: false
summary: 'In this post, I explained what is magic numbers and why you should avoid them.'
---

# Avoid magic numbers in your code...

If you have ever gone through an existing codebase or your colleague's codebase or maybe your old codebase there may be a chance you look at a number and you don't know exactly what that number means. In some cases, you just want to refactor some piece of code you write a while ago, but it has some numbers and you forgot what that means. Now, you're sitting before your computer wondering what the heck that number means.

Those numbers are called **Magic numbers.**

Let's see an example,

```jsx
import * as React from 'react'

function App() {
  const [timeout, setTimeout] = React.useState(30)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimeout((state) => {
        if (state <= 0) {
          return state
        }
        return state - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return <div>Timeout: {timeout}</div>
}

export default App
```

The above example renders `Timeout: 30` to the screen in the browser. And it countdown from 30 to 0 and it stops.

Let's see how we are achieving that.

In the useEffect hook, we are setting an interval that will call the callback for every one second. In the callback, we are checking whether the current timeout value is less than or equal to zero if zero we are returning the current state, if not we are subtracting the timeout with one and then setting the updated state value.

If you see clearly, there is a value `30` in the React.useState function call and there is this `state - 1` expression and there is also number value `1000` passed as a setInterval as a second parameter.

At the time of writing this code, you may know why those values are there and what they are doing. If some of your colleagues say or even you saw this code after one or two months of writing this code it might be hard to understand why that particular value is in that expression.

This is the reason, why we should avoid magic numbers in our code. They make the code hard to read and we have to spend extra time to understand what that value means. Instead of spending our time refactoring or fixing a bug in a piece of code, we are just figuring out what that value means.

What should we do to avoid magic numbers? you may ask.

It's simple.

> All you have to do is for a number value create a variable and name the variable what the value represents and assign that value to that variable.

```jsx
let PI_CONSTANT = 3.14159
```

In the above example, `3.14159` represents the PI constant. So we can create a variable and name our variable as PI_CONSTANT and assign the value `3.14159` to it. That it!.

Now if you want to use PI value in your code all you have to do is use the `PI_CONSTANT` variable instead of using the actual value. By using the variable name it increases the readability of the code.

Now, let's fix ours react code example by removing all our magic numbers.

```jsx
import * as React from 'react'

const TIMEOUT_DURATION = 30
const TIMEOUT_EXPIRATION = 0
const STEP = 1

function App() {
  const [timeout, setTimeout] = React.useState(TIMEOUT_DURATION)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimeout((state) => {
        if (state <= TIMEOUT_EXPIRATION) {
          return state
        }
        return state - STEP
      })
    }, STEP * 1000) // 1 * 1000 => 1 second

    return () => clearInterval(interval)
  }, [])

  return <div>Timeout: {timeout}</div>
}

export default App
```

If you see, we moved all our constant values to a variable and we even reused one variables. Let's read our fixed code, whether it is actually making sense or not.

1. `React.useState(TIMEOUT_DURATION)` - This means the state hold _timeout duration_ value.
2. `state ≤ TIMEOUT_EXPIRATION` - In this statement, we are checking, whether the current state value is less than or equal to the \_timeout expiration\* value. This means when we want our timeout value to `expire`.
3. `state - STEP` - This means, no of seconds(step) we have to subtract from the current state.
4. `STEP _ 1000` - We are telling the interval to call the callback for every `STEP _ 1000`. In this statement, we even made some improvements.

If we change the no of seconds in the interval then we have to change the state to `state - the new value`. But now we are using the same variable STEP to determine how many seconds to subtract from the state and to calculate interval value. So if we want to change the interval seconds or timeout step we can just change the STEP value and it works.

Hope this helps. That's all for today 🙂.

Thanks for reading the post ❤️.
