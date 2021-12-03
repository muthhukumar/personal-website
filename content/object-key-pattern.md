---
title: 'What is object key pattern in javascript?'
date: '2021-08-11'
lastmod: '2021-08-11'
tags: ['javascript', 'refactoring']
draft: false
summary: "In this blog post, you'll learn how to avoid multiple if check using object key pattern in javascript and what problem it solves."
---

# Object key pattern

What is Object key pattern in javascript?

Let's start with a code example. Just read the below code block clear before moving on to the next line.

```jsx
function getButtonProps(buttonType = 'primary') {
  if (buttonType === 'primary') {
    return {
      backgroundColor: 'blue',
      color: 'white',
    }
  }
  // If the button type is not primary, then we are returning this.
  return {
    backgroundColor: 'orange',
    color: 'white',
  }
}
```

If you look at the above example you may code like this before. Don't look at the example specifically but look at what the code doing.

hmm.... 🤔

Okay, I'll explain.

Let's start with what this function do. This function accept buttonType as a parameter and it returns two different object based on buttonType value. If the buttonType is primary then we are returning the object

```jsx
{
    backgroundColor: 'blue',
    color: 'white',
}
```

And If the buttonType is not primary then we are returning the object

```jsx
{
    backgroundColor: 'orange',
    color: 'white',
}
```

Now, you may ask what is the problem with this code, and what is this Object key pattern solves?.

Okay, I'll explain.

In the above example, we have only two buttonType so whatever we are doing is just fine. And we don't have to anything. And we can just move on with our life. But what happens when add more buttonType. Example: outline, link, unstyled button, so on.

To satisfy the above case we have to change our function like this if we follow the current method.

```jsx
function getButtonProps(buttonType = 'primary') {
  if (buttonType === 'primary') {
    return {
      backgroundColor: 'blue',
      color: 'white',
    }
  }

  if (buttonType === 'secondary') {
    return {
      backgroundColor: 'orange',
      color: 'white',
    }
  }

  if (buttonType === 'link') {
    return {
      borderWidth: '0px',
      textDecoration: 'underline',
    }
  }

  if (buttonType === 'outline') {
    return {
      borderWidth: '1px',
      borderColor: 'blue',
      color: 'blue',
      backgroundColor: 'white',
    }
  }

  if (buttonType === 'unstyled') {
    return {}
  }

  // If none of the buttonType matches then we are returning primary button style
  return {
    backgroundColor: 'blue',
    color: 'white',
  }
}
```

If you look at the above example for each button type we have a new If check. The problem with doing like this is for each new buttonType we have to add a new if check. So this is the issue we are solving with the object key pattern.

Okay. How will the code look like if we are using the object key pattern?

Just look at the example below.

```jsx
function getButtonPropsOld(buttonType = 'primary') {
  const availableButtonTypes = {
    primary: {
      backgroundColor: 'blue',
      color: 'white',
    },
    secondary: {
      backgroundColor: 'orange',
      color: 'white',
    },
    link: {
      borderWidth: '0px',
      textDecoration: 'underline',
    },
    outline: {
      borderWidth: '1px',
      borderColor: 'blue',
      color: 'blue',
      backgroundColor: 'white',
    },
    unstyled: {},
  }

  // If the button type does not match then we are returning primary button style
  if (!availableButtonTypes[buttonType]) {
    return availableButtonTypes['primary']
  }

  return availableButtonTypes[buttonType]
}
```

You can see that we have a available button types in a object. And we have all the styles for each buttonType as value and buttonType as the key in that object. And If you look at the last line we are accessing the style of the current button type from the availableButtonType with the buttonType key.

So instead of using multiple If check, If we need to add a new buttonType we can just add it in the availableButtonTypes object. That's it. We have access to the new buttonType all we have to do is call the function with the buttonType it will return the style for that buttonType.

Hope this help :).

Thank you so much for reading this blog post♥️.
