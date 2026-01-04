---
title: Using Two GitHub Accounts on the Command Line
slug: using-two-github-accounts
date: 2024-04-19
description: >
   Using Two GitHub Accounts on the Command Line: Configure multiple SSH keys and associate each key with a different GitHub account.
---

To work with different GitHub accounts on the command line by configuring multiple SSH keys and associating each key with a different GitHub account. Here's how you can set it up:

### 1. Generate SSH Keys:

1. **Generate SSH Key for Each Account**:
   - Open your terminal and run the following command to generate an SSH key for each GitHub account:
     ```
     ssh-keygen -t rsa -C "your_email@example.com"
     ```
   - When prompted, provide a unique name for each key, such as `id_rsa` and `id_rsa_work`, and optionally set a passphrase.

### 2. Add SSH Keys to SSH Agent:

1. **Start SSH Agent**:
   - Start the SSH agent by running:
     ```
     eval "$(ssh-agent -s)"
     ```

2. **Add SSH Keys**:
   - Add each SSH key to the SSH agent using:
     ```
     ssh-add ~/.ssh/id_rsa
     ssh-add ~/.ssh/id_rsa_work
     ```
   - Enter the passphrase for each key when prompted.

### 3. Configure SSH Config File:

1. **Create SSH Config File**:
   - Create or edit the SSH config file by running:
     ```
     nano ~/.ssh/config
     ```

2. **Configure SSH Hosts**:
   - Add configurations for each GitHub account:
     ```
     # Default GitHub account
     Host github.com
         HostName github.com
         User git
         IdentityFile ~/.ssh/id_rsa
     
     # Work GitHub account
     Host github.com-work
         HostName github.com
         User git
         IdentityFile ~/.ssh/id_rsa_work
     ```
   - Replace `id_rsa` and `id_rsa_work` with the names of your SSH keys.

### 4. Associate SSH Keys with GitHub Accounts:

1. **Add SSH Keys to GitHub Accounts**:
   - Go to your GitHub account settings and navigate to SSH and GPG keys.
   - Add the content of each public key file (`id_rsa.pub` and `id_rsa_work.pub`) to the corresponding GitHub account.

### 5. Clone Repositories:

1. **Clone Repositories**:
   - When cloning repositories, use the configured hostnames:
     ```
     git clone git@github.com:your_username/repo.git
     git clone git@github.com-work:your_username/repo.git
     ```
   - Replace `your_username` and `repo` with your GitHub username and repository name.

### 6. Working with Repositories:

1. **Configure Global User**:
   - Optionally, configure your global user for each repository:
     ```
     git config --global user.name "Your Name"
     git config --global user.email "your_email@example.com"
     ```
   - This ensures that commits made in each repository are associated with the correct user.

2. **Add, Commit, and Push Changes**:
   - Add, commit, and push changes to each repository as usual using the configured hostnames.

By following these steps, you can work with multiple GitHub accounts on the command line simultaneously.
