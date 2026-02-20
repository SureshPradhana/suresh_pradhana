---
title: Understanding Git Rerere A Guide for Developers
slug:  understanding-git-rerere
date: 2026-02-20
description: >
      Learn how to use Git's rerere feature to manage and resolve merge conflicts efficiently in your development workflow.
---

# Understanding Git Rerere: Automatically Reuse Merge Conflict Resolutions

Merge conflicts are a normal part of working with Git, especially when collaborating with teams or maintaining long-running branches. But resolving the same conflicts repeatedly can quickly become frustrating and time-consuming.

Git provides a powerful but lesser-known feature called **rerere** (reuse recorded resolution) that helps automate repeated conflict resolution.

In this article, we’ll explore what Git rerere is, how it works internally, where it stores data, and why developers should enable it.


## What is Git Rerere?

**Git rerere** stands for **reuse recorded resolution**.

It records how you resolve merge conflicts and automatically applies the same resolution if the same conflict occurs again.

Instead of manually fixing identical conflicts multiple times, Git remembers your previous solution and reuses it.

This is especially useful when:

* Rebasing frequently
* Syncing long-running feature branches
* Repeating merges after resets
* Working in collaborative projects
* Maintaining large codebases

## Why Merge Conflicts Often Repeat

In real-world development, conflicts frequently reappear.

For example:

1. You merge a feature branch into main.
2. A conflict occurs and you resolve it manually.
3. Later, you rebase or reset your branch.
4. When merging again, the same conflict appears.

Without rerere → resolve again manually.
With rerere → Git resolves automatically.


## How Git Rerere Works (Step-by-Step)

Git rerere follows a simple process:

1. A conflict occurs during merge or rebase.
2. You resolve the conflict manually.
3. Git records both:

   * the conflicted version
   * your final resolution
4. If the same conflict happens again, Git automatically applies your previous fix.

This makes repeated merges significantly faster.


## Where Git Stores Rerere Data

Git stores conflict resolution records locally inside your repository:

```
.git/rr-cache/
```

This directory contains:

* the original conflict state (before resolution)
* your resolved version (after fixing)

Git compares future conflicts with this stored data and applies matching resolutions automatically.

Important notes:

* The cache is local to your repository.
* It is not shared with teammates unless committed or transferred manually.


## How to Enable Git Rerere

You can enable rerere globally with one command:

```bash
git config --global rerere.enabled true
```

Once enabled:

* Git automatically records conflict resolutions.
* No additional configuration is needed.

Most experienced developers enable it once and keep it on.


## Practical Example

Imagine two branches modify the same line of code.

### First Merge

* Git detects a conflict.
* You fix it manually.
* Git records your solution.

### Second Merge (same conflict)

* Git recognizes the conflict pattern.
* Git applies your previous resolution automatically.
* No manual work required.

This is particularly helpful during repeated rebases.


## Useful Git Rerere Commands

### Check recorded resolutions

```bash
git rerere status
```

Shows files where Git recorded or reused resolutions.


### See how conflicts were resolved

```bash
git rerere diff
```

Displays the difference between the conflict and its resolution.


### Clear stored conflict history

```bash
git rerere clear
```

Removes all recorded resolutions.

Useful if:

* old fixes are no longer valid
* project structure changed significantly


### Disable rerere

```bash
git config --global rerere.enabled false
```

Stops Git from recording future resolutions.


## When Should You Use Git Rerere?

Git rerere is most valuable in:

* Large projects with many contributors
* Long-running feature branches
* Continuous integration workflows
* Frequent rebasing workflows
* Projects with repeated merge conflicts

For small personal projects, you may not notice much benefit.
For larger projects, it can significantly improve productivity.


## Advantages of Using Git Rerere

* Saves time resolving repeated conflicts
* Reduces manual work
* Improves workflow efficiency
* Helps during repeated rebases
* Works automatically once enabled
* Minimal overhead


## Limitations to Know

Git rerere only works when:

* The conflict is similar to a previously recorded one.
* The code structure hasn’t changed significantly.

If the conflict is very different, Git may not auto-resolve it.


## Why Many Professional Teams Use It

Large teams and companies often enable rerere because:

* Branches live for weeks or months.
* Main branch changes frequently.
* Conflicts reoccur often.
* It speeds up developer workflows.

It quietly improves productivity without changing how developers work.


## Final Thoughts

Git rerere is a simple yet powerful feature that many developers overlook. By remembering conflict resolutions and automatically reusing them, it removes repetitive work and makes merges and rebases smoother.

If your workflow involves frequent merges or rebasing, enabling rerere is an easy way to save time and reduce frustration.

Sometimes the best developer tools are the ones working silently in the background — and Git rerere is one of them.



