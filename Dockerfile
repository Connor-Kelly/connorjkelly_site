
# Adjust BUN_VERSION as desired
ARG BUN_VERSION=1.3.4
FROM oven/bun:alpine AS base


# Bun app lives here
WORKDIR /app

# Set production environment
ENV NODE_ENV="production"


FROM base AS build

WORKDIR /app

COPY package.json bun.lock astro.config.mjs tsconfig.json ./
RUN bun install

COPY . .
# COPY public ./

RUN bun run build

# RUN tree -I node_modules . 


FROM caddy:2.11-alpine AS deploy

USER root

WORKDIR /

COPY caddy/caddy_conf /etc/caddy

RUN mkdir -p /data
RUN mkdir -p /config


COPY --from=build /app/dist /srv

# # RUN who && echo "<who" && tree /srv && ls -l  /srv/* && 1


# # Final stage for app image
# FROM nginx as deploy

# # Copy built application
# COPY --from=build /app/dist /usr/share/nginx/html

# # Start the server by default, this can be overwritten at runtime
# EXPOSE 80
# EXPOSE 80
# CMD [ "/usr/sbin/nginx", "-g", "daemon off;" ]