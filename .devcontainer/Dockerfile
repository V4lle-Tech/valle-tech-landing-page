FROM mcr.microsoft.com/devcontainers/javascript-node:22-bookworm

USER root

RUN getent group node \
    || groupadd --gid 1000 node \
 && id -u node > /dev/null 2>&1 \
    || useradd --uid 1000 --gid node --shell /bin/bash --create-home node

# Install Bun
RUN curl -fsSL https://bun.sh/install | bash \
 && mv /root/.bun/bin/bun /usr/local/bin/bun \
 && chmod +x /usr/local/bin/bun

USER root
WORKDIR /workspaces
COPY . /workspaces
RUN chown -R node:node /workspaces

USER node
RUN bun install

EXPOSE 4321
