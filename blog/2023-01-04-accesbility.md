---
title: "How to Improve Accessibility with Testing Library and jest-axe for Your Vue Application"
path: /how-to-improve-accessibility-with-testing-library-and-jest-axe-for-your-vue-application
date: 2023-04-01
summary: "How to Improve Accessibility with Testing Library and jest-axe for Your Vue Application"
tags: [ 'Blog' ]
sections: [ 'javascript', 'vue', 'gridsome' ]
---

# Introduction
Accessibility is an essential aspect of web development that ensures your application is usable by everyone, including people with disabilities. By making your application accessible, you're not only adhering to legal requirements but also providing a better user experience to all users. In this blog post, we'll explore how to improve the accessibility of your Vue application using Testing Library and jest-axe.

# Prerequisites
Before diving into the implementation, make sure you have the following tools and packages installed in your Vue project:

- https://testing-library.com/docs/vue-testing-library/intro
- https://github.com/nickcolley/jest-axe

add them with the following command to your vue project

```bash
npm install --save-dev @testing-library/vue
```

```bash
npm i jest-axe
```

# Example

Let's consider a simple Vue component that receives some props and displays an image:

```ts
<template>
  <div>
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
    <img src="sample_image.jpg" />
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>
```

Many developers are already aware that an alt attribute should be added to images for accessibility reasons, but how can we ensure that we never forget to include this essential attribute in production?



# jest-axe

This is where jest-axe comes into play. Axe is the world's leading digital accessibility toolkit, chosen by Microsoft, Google, and development and testing teams everywhere for efficient and effective accessibility testing.

To test your component for accessibility, create a test file and add the following code:

Code for testing:

```ts
import { render } from '@testing-library/vue';
import { axe, toHaveNoViolations } from 'jest-axe';
import {describe, it, expect } from 'vitest'
import BlaFoo from './BlaFoo.vue';

expect.extend(toHaveNoViolations);

describe('BlaFoo.vue', () => {
  it('has no accessibility violations', async () => {
    const { container } = render(BlaFoo, {
      props: {
        title: 'Sample Title',
        description: 'Sample Description',
      },
    });

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
```

Now, when you run the test, you will receive an error like this:

```bash
 FAIL  src/components/BlaFoo.spec.ts > BlaFoo.vue > has no accessibility violations
Error: expect(received).toHaveNoViolations(expected)

Expected the HTML found at $('img') to have no violations:

<img src="sample_image.jpg">

Received:

"Images must have alternate text (image-alt)"

Fix any of the following:
  Element does not have an alt attribute
  aria-label attribute does not exist or is empty
  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty
  Element has no title attribute
  Element's default semantics were not overridden with role="none" or role="presentation"

You can find more information on this issue here: 
https://dequeuniversity.com/rules/axe/4.5/image-alt?application=axeAPI
```

# Conclusion
Accessibility is a critical aspect of web development that should not be overlooked. By leveraging powerful tools such as Testing Library and jest-axe, you can easily integrate accessibility testing into your Vue application's development process, ensuring that your application remains accessible to everyone. By making accessibility testing a part of your continuous integration pipeline, you can catch and fix issues early, ultimately providing a better user experience for all users.