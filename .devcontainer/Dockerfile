FROM mcr.microsoft.com/devcontainers/javascript-node:18-bullseye

USER root

RUN getent group node \  
    || groupadd --gid 1000 node \
 && id -u node > /dev/null 2>&1 \
    || useradd --uid 1000 --gid node --shell /bin/bash --create-home node

USER root
WORKDIR /workspaces
COPY . /workspaces
RUN chown -R node:node /workspaces

USER node
RUN npm install

EXPOSE 3080
