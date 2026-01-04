---
title: Exploring NVim Configurations with Docker
slug: exploring-nvim-configurations-with-docker
date: 2024-07-01
description: >
    Explore different NVim configurations using Docker to keep your local setup clean and isolated. Learn how to build a Docker image with NVim, Node.js, and a mechanism to clone NVim configurations from a specified repository.
---

## Exploring NVim Configurations with Docker

If you're looking for a convenient way to try out new NVim configurations without affecting your local setup, Docker provides a perfect solution. In this blog post, I'll guide you through building and running a Docker image designed specifically for experimenting with different NVim configurations.

## Prerequisites

Before we start, ensure you have Docker installed on your system. You can download it from the [official Docker website](https://www.docker.com/products/docker-desktop).

## Docker Image for NVim Configurations

We will create a Docker image that allows you to easily switch between different NVim configurations. The Dockerfile provided below sets up an environment with Neovim, Node.js, and a mechanism to clone NVim configurations from a specified repository.

## Dockerfile

```Dockerfile
FROM ubuntu:latest

RUN apt-get update && apt-get install -y curl sudo

RUN useradd -ms /bin/bash myuser && \
    echo 'myuser ALL=(ALL) NOPASSWD: ALL' >> /etc/sudoers

USER myuser
WORKDIR /home/myuser

# Install nvm, Node.js, and npm
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash && \
    export NVM_DIR="$HOME/.nvm" && \
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && \
    nvm install 20 && \
    nvm use 20 && \
    nvm alias default 20 && \
    echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.bashrc && \
    echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"' >> ~/.bashrc && \
    echo 'nvm use default' >> ~/.bashrc

RUN curl -LO https://github.com/neovim/neovim/releases/latest/download/nvim-linux64.tar.gz && \
    sudo rm -rf /opt/nvim && \
    sudo tar -C /opt -xzf nvim-linux64.tar.gz && \
    rm nvim-linux64.tar.gz

RUN echo 'export PATH="$PATH:/opt/nvim-linux64/bin"' >> ~/.bashrc && \
    echo 'export PATH="$PATH:/opt/nvim-linux64/bin"' >> ~/.zshrc

RUN sudo apt-get -y install git

# Conditionally clone a GitHub repository if URL is provided
ARG NVIM_CONFIG_URL
RUN mkdir -p ~/.config/nvim && \
    if [ -n "$NVIM_CONFIG_URL" ]; then git clone "$NVIM_CONFIG_URL" ~/.config/nvim; fi

# Copy a script that will clone the repo at runtime if an environment variable is provided
COPY clone_nvim_config.sh /home/myuser/clone_nvim_config.sh
RUN sudo chmod +x /home/myuser/clone_nvim_config.sh

# Set default shell to bash
SHELL ["/bin/bash", "-c"]

# Default command when container starts
CMD /home/myuser/clone_nvim_config.sh && bash
```

## clone_nvim_config.sh

This script ensures that the NVim configuration is cloned from a specified repository when the container starts.

```bash
#!/bin/bash

# Remove existing Neovim configuration if it exists
if [ -d "$HOME/.config/nvim" ]; then
  rm -rf "$HOME/.config/nvim"
fi

# Clone Neovim configuration repository if NVIM_CONFIG_URL is provided at runtime
if [ -n "$NVIM_CONFIG_URL" ]; then
  git clone "$NVIM_CONFIG_URL" ~/.config/nvim
fi
```

## Building the Docker Image

To build the Docker image, use the following command. Replace `https://github.com/SureshPradhana/nvimlinux.git` with your desired NVim configuration repository URL.

```bash
docker build --build-arg NVIM_CONFIG_URL=https://github.com/SureshPradhana/nvimlinux.git -t mynvim .
```

## Running the Docker Container

To run the Docker container with the built image, use the following command:

```bash
docker run -it mynvim
```

## Running with a Different NVim Configuration

If you want to try a different NVim configuration without rebuilding the image, you can specify the configuration repository URL at runtime:

```bash
docker run -e NVIM_CONFIG_URL=https://github.com/exosyphon/nvim.git -it mynvim
```

## Conclusion

Using Docker to experiment with different NVim configurations provides a clean and isolated environment. This method ensures that your local setup remains unaffected while you explore new configurations. Feel free to clone and modify the provided Dockerfile and script to suit your specific needs
