FROM node:18.16.0-bullseye as builder

COPY . /app
WORKDIR /app
RUN corepack enable
RUN pnpm install
RUN pnpm build

FROM httpd:latest
COPY --from=builder /app/out /usr/local/apache2/htdocs/
