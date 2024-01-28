FROM node:20 AS base
WORKDIR /web-client
EXPOSE 3000

COPY ./package*.json ./
RUN npm install --verbose
COPY . .

FROM base as publish
RUN npm run build

FROM nginx:alpine AS production
COPY --from=publish /web-client/nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=publish /web-client/dist .
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]