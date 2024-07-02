---
title:  Simplify Environment Variable Management with a Bash Script
slug:  simplify-environment-variable-management-bash-script
date: 2024-07-02
description: >
      Simplify the management of environment variables across multiple projects using a
      Bash script. Learn how to sync .env files between projects and a centralized folder
      with ease.
---

## Simplifying Environment Variable Management with a Bash Script

### Introduction

Managing environment variables in multiple projects can be a hassle, especially when you need to switch between different `.env` files. To make this process easier, I’ve created a simple Bash script that helps you sync `.env` files between your projects and a centralized folder. This blog will guide you through setting up and using the script.

### Setting Up the Script

1. **Create the Script File**:
   - Open your terminal and create a new file named `env_sync.sh`.
     ```bash
     nano env_sync.sh
     ```
   - Copy and paste the following script into the file:

     ```bash
      #!/bin/bash

      # Define paths
      ENV_FOLDER="$HOME/envs"

      # Function to sync .env file from ~/envs based on current directory name
      sync_envs() {
          local action="$1"

          # Get the current directory name (project name)
          local current_dir=$(basename "$(pwd)")
          local pwd=$(pwd)

          case "$action" in
              "copy")
                  # Copy .env file to ~/envs/projectname/
                  if [ ! -d "$ENV_FOLDER/$current_dir" ]; then
                      mkdir -p "$ENV_FOLDER/$current_dir"
                  fi
                  echo "$current_dir"
                  cp "$pwd/".env* "$ENV_FOLDER/$current_dir/"
                  echo ".env* files copied to $ENV_FOLDER/$current_dir/"
                  # Git operations
                  if [ ! -d "$ENV_FOLDER/$current_dir/.git" ]; then
                      git -C "$ENV_FOLDER/$current_dir" init
                  fi
                  git -C "$ENV_FOLDER/$current_dir" add .env*
                  git -C "$ENV_FOLDER/$current_dir" commit -m "Copied .env* files from $pwd to $ENV_FOLDER/$current_dir/ at $(date)"
                  ;;
              "move")
                  # Move .env file from ~/envs/projectname/ to current directory
                  if ls "$ENV_FOLDER/$current_dir/".env* 1> /dev/null 2>&1; then
                      mv "$ENV_FOLDER/$current_dir/".env* ./
                      echo ".env* files moved from $ENV_FOLDER/$current_dir/ to current directory."
                      # Git operations
                      if [ ! -d "$ENV_FOLDER/$current_dir/.git" ]; then
                          git -C "$ENV_FOLDER/$current_dir" init
                      fi
                      git -C "$ENV_FOLDER/$current_dir" add .env*
                      git -C "$ENV_FOLDER/$current_dir" commit -m "Moved .env* files from $ENV_FOLDER/$current_dir/ to $pwd at $(date)"
                  else
                      echo "Error: .env* file not found in $ENV_FOLDER/$current_dir/"
                      exit 1
                  fi
                  ;;
              *)
                  echo "Usage: env_sync [copy|move]"
                  exit 1
                  ;;
          esac
      }

      # Function to copy .env file from ~/envs based on manually provided directory name
      copy_env_by_name() {
          local dir_name="$1"

          # Check if .env file exists in ~/envs/directory_name/
          if ls "$ENV_FOLDER/$dir_name/".env* 1> /dev/null 2>&1; then
              cp "$ENV_FOLDER/$dir_name/".env* ./
              echo ".env* files copied from $ENV_FOLDER/$dir_name/ to current directory."
              # Git operations
              if [ ! -d "$ENV_FOLDER/$dir_name/.git" ]; then
                  git -C "$ENV_FOLDER/$dir_name" init
              fi
              git -C "$ENV_FOLDER/$dir_name" add .env*
              git -C "$ENV_FOLDER/$dir_name" commit -m "Copied .env* files from $ENV_FOLDER/$dir_name/ to current directory at $(date)"
          else
              echo "Error: .env* files not found in $ENV_FOLDER/$dir_name/"
          fi
      }

      # Function to list directories in ~/envs
      list_envs_directories() {
          echo "Directories in $ENV_FOLDER:"
          ls -d $ENV_FOLDER/*/ | xargs -n 1 basename
      }

      # Help function
      show_help() {
          echo "Usage: $0 [option]"
          echo "Options:"
          echo "  copy          Copy .env* from current directory to ~/envs/projectname/"
          echo "  move          Move .env* from ~/envs/projectname/ to current directory"
          echo "  ls            List directories in $ENV_FOLDER"
          echo "  get <dir>     Copy .env* from ~/envs/<dir> to current directory"
          echo "  dir <pattern> List directories in $ENV_FOLDER matching <pattern>"
          echo "  --help        Show this help message"
      }

      # Main script logic
      case "$1" in
          "copy")
              sync_envs copy
              ;;
          "move")
              sync_envs move
              ;;
          "ls")
              list_envs_directories
              ;;
          "get")
              if [ -n "$2" ]; then
                  copy_env_by_name "$2"
              else
                  echo "Error: Please provide a directory name. Usage: env_sync get directory_name"
                  exit 1
              fi
              ;;
          "dir")
              if [ -n "$2" ]; then
                  list_envs_directories | grep "$2"
              else
                  echo "Error: Please provide a directory name to search. Usage: env_sync dir directory_name"
                  exit 1
              fi
              ;;
          "--help")
              show_help
              ;;
          *)
              echo "Error: Invalid option. Use '--help' for usage."
              exit 1
              ;;
      esac
      ```

2. **Make the Script Executable**:
   - After saving the script, make it executable with the following command:
     ```bash
     chmod +x env_sync.sh
     ```

### Setting Up Aliases

To make the script easily accessible from anywhere, you can set up an alias in your shell configuration file (`~/.bashrc` for Bash or `~/.zshrc` for Zsh).

1. **Open Your Shell Configuration File**:
   - For Bash:
     ```bash
     nano ~/.bashrc
     ```
   - For Zsh:
     ```bash
     nano ~/.zshrc
     ```

2. **Add the Alias**:
   - Add the following line to create an alias named `envm`:
     ```bash
     alias envm="$HOME/path_to_script/env_sync.sh"
     ```
   - Replace `path_to_script` with the actual path to where you saved `env_sync.sh`.

3. **Apply the Changes**:
   - For Bash:
     ```bash
     source ~/.bashrc
     ```
   - For Zsh:
     ```bash
     source ~/.zshrc
     ```

### Using the Script

With the alias set up, you can use the script with the `envm` command:

1. **Copy .env Files to Central Folder**:
   ```bash
   envm copy
   ```

2. **Move .env Files from Central Folder to Project Directory**:
   ```bash
   envm move
   ```

3. **List All Project Directories**:
   ```bash
   envm ls
   ```

4. **Copy .env Files by Directory Name**:
   ```bash
   envm get <project_name>
   ```

5. **Search for Directories by Pattern**:
   ```bash
   envm dir <pattern>
   ```

6. **Show Help**:
   ```bash
   envm --help
   ```

### Important Considerations

#### Git Operations

The script automatically initializes a Git repository in the central folder if it doesn't exist and commits changes each time you copy or move `.env` files. This makes it easy to track changes and revert to previous versions if needed.

#### Warning: Exposure of `.env` Files

If you add a remote repository and push your changes to GitHub or another Git hosting service, your environment variables could be exposed publicly. To avoid this, make sure to keep the `envs` folder local and do not push it to a remote repository.

### Example Workflow

1. **Initialize a Project**:
   - Suppose you are working on a project named `myproject`.
   - Navigate to your project directory:
     ```bash
     cd ~/projects/myproject
     ```

2. **Copy .env Files to Central Folder**:
   - Run the script to copy `.env` files to the central folder:
     ```bash
     envm copy
     ```



3. **List Project Directories**:
   - To see all stored projects in the central folder:
     ```bash
     envm ls
     ```

4. **Copy .env Files from a Specific Project**:
   - If you need to copy `.env` files from a specific project folder:
     ```bash
     envm get myproject
     ```

### Conclusion

This script helps streamline the management of environment variables across different projects by providing a simple way to sync `.env` files. With a few commands, you can copy, move, and list `.env` files effortlessly. Feel free to customize the script further to suit your workflow needs. By setting up an alias, you can easily use the script from any directory, making your development process more efficient and
