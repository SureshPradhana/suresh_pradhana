---
title: Github Cli Walkthrough!
slug: gh-cli
date: 2024-01-16
description: >
  GitHub CLI is a command-line tool that brings pull requests, issues, GitHub Actions, and other GitHub features to your terminal, so you can do all your work in one place.
---
To use the "gh" command-line tool for GitHub, you need to follow these general steps:

1. **Install "gh":**
   If you haven't already, you'll need to install the "gh" command-line tool. You can download it from the GitHub releases page for your specific operating system.

2. **Authenticate with GitHub:**
   Before you can use "gh," you need to authenticate with your GitHub account. You can do this by running the following command and following the prompts:
   ```
   gh auth login
   ```

3. **Use "gh" commands:**
   Once you're authenticated, you can start using the "gh" command for various GitHub-related tasks. Here are some common examples:

   - To create a new GitHub repository:
     ```
     gh repo create
     ```

   - To clone a repository:
     ```
     gh repo clone owner/repo-name
     ```

   - To create and manage issues:
     ```
     gh issue create
     gh issue list
     ```

   - To create and manage pull requests:
     ```
     gh pr create
     gh pr list
     ```

   - To view repository details:
     ```
     gh repo view owner/repo-name
     ```

   These are just a few examples, and "gh" provides a wide range of commands for different GitHub operations. You can explore the full list of available commands and their options by running:
   ```
   gh help
   ```

4. **Customize your "gh" configuration:**
   You can further customize your "gh" configuration using the `gh config` command. This allows you to set defaults for certain options or modify various settings.

Remember that the specific commands and their options may change over time as "gh" gets updated, so it's a good practice to refer to the official GitHub documentation or run `gh help` to get the most up-to-date information on how to use the tool.

If you have a specific task or need help with a particular "gh" command, feel free to ask, and I can provide more detailed instructions.


The "gh" command-line tool for GitHub provides a wide range of commands and subcommands for various GitHub-related tasks. Here's a list of some common "gh" commands and their subcommands:

1. **Repository Commands:**

   - `repo create` - Create a new repository.
   - `repo view` - View repository details.
   - `repo clone` - Clone a repository.
   - `repo fork` - Fork a repository.
   - `repo list` - List repositories.
   - `repo set-default` - Set the default repository.

2. **Issue Commands:**

   - `issue create` - Create a new issue.
   - `issue list` - List issues.
   - `issue view` - View issue details.
   - `issue status` - Show issue status.

3. **Pull Request Commands:**

   - `pr create` - Create a new pull request.
   - `pr list` - List pull requests.
   - `pr view` - View pull request details.
   - `pr checks` - Show pull request checks.
   - `pr review` - Create a review for a pull request.

4. **User and Organization Commands:**

   - `user view` - View user details.
   - `org view` - View organization details.

5. **Workflow Commands:**

   - `workflow list` - List GitHub Actions workflows.

6. **Gist Commands:**

   - `gist create` - Create a new Gist.
   - `gist list` - List Gists.
   - `gist view` - View Gist details.

7. **Enterprise Commands:**

   - `enterprise repo clone` - Clone a repository on GitHub Enterprise Server.
   - `enterprise user login` - Log in to a GitHub Enterprise Server instance.

8. **Config Commands:**

   - `config get` - Get configuration values.
   - `config set` - Set configuration values.
   - `config remove` - Remove configuration values.
   - `config list` - List configuration values.

9. **Auth Commands:**

   - `auth login` - Log in to GitHub.
   - `auth logout` - Log out from GitHub.
   - `auth status` - Show authentication status.

10. **Help and Version Commands:**

    - `help` - Display help for "gh" and its commands.
    - `version` - Show the current version of "gh."

These are just some of the most commonly used "gh" commands. "gh" provides a comprehensive set of commands for interacting with GitHub. You can access the documentation for each command and its options by running `gh help <command>`.

For the most up-to-date information on "gh" commands and their usage, it's a good practice to refer to the official GitHub documentation or run `gh help`.


Certainly! Here are some "gh" commands with examples:

1. **Create a New Repository:**

   ```bash
   gh repo create
   ```

   This command will interactively guide you through creating a new GitHub repository.

2. **Clone a Repository:**

   ```bash
   gh repo clone owner/repo-name
   ```

   Replace `owner` with the repository owner's username and `repo-name` with the repository's name. This command clones the repository to your local machine.

3. **Create a New Issue:**

   ```bash
   gh issue create --title "Bug Fix" --body "Fix a critical bug"
   ```

   This command creates a new issue with the specified title and body.

4. **List Issues:**

   ```bash
   gh issue list
   ```

   This command lists the issues for the current repository.

5. **Create a New Pull Request:**

   ```bash
   gh pr create --base main --head feature-branch --title "Feature XYZ"
   ```

   Create a new pull request from the `feature-branch` to `main` with the given title.

6. **List Pull Requests:**

   ```bash
   gh pr list
   ```

   This command lists pull requests for the current repository.

7. **View Repository Details:**

   ```bash
   gh repo view owner/repo-name
   ```

   Replace `owner` with the repository owner's username and `repo-name` with the repository's name. This command displays details about the repository.

8. **Create a New Gist:**

   ```bash
   gh gist create --public file.txt
   ```

   Create a public Gist from a local file.

9. **List GitHub Actions Workflows:**

   ```bash
   gh workflow list
   ```

   This command lists the available GitHub Actions workflows for the current repository.

10. **Set and View Configuration Values:**

    ```bash
    gh config get editor
    gh config set editor vim
    ```

    Get the current editor setting and then set it to "vim."

11. **Log in to GitHub:**

    ```bash
    gh auth login
    ```

    This command initiates the GitHub authentication process.

12. **View User Details:**

    ```bash
    gh user view username
    ```

    Replace `username` with the GitHub username. This command displays details about the user.

13. **View Organization Details:**

    ```bash
    gh org view organization-name
    ```

    Replace `organization-name` with the GitHub organization's name. This command displays details about the organization.

These are examples of common "gh" commands and how to use them for various GitHub-related tasks. Remember to replace placeholders with actual repository names, usernames, or branch names when using these commands. You can explore more "gh" commands and their options by running `gh help` or `gh help <command>`.
