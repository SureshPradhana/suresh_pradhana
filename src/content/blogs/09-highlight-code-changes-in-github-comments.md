---
title: Highlighting Code Changes in GitHub Comments 
slug:  highlight-code-changes-in-github-comments
date: 2024-07-05
description: >
      Learn how to highlight code changes effectively in GitHub comments using diff formatting.
---

## Highlighting Code Changes in GitHub Comments

When collaborating on GitHub, clearly showing code changes can enhance communication. A simple way to achieve this is by using diff formatting in your comments. Here's how:

1. Use triple backticks to start and end your code block.
2. Specify `diff` after the opening triple backticks.
3. Prefix lines to be deleted with `-` (minus) and lines to be added with `+` (plus).

Here's an example:

````
```diff
- const oldLine = 'This line will be removed';
+ const newLine = 'This line will be added';
```
````

This will render as:

```diff
- const oldLine = 'This line will be removed';
+ const newLine = 'This line will be added';
```

Using this method helps visually distinguish additions and deletions in your code, making your comments clearer and more effective.
