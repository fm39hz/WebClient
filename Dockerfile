FROM nginx:alpine AS base
WORKDIR /usr/share/nginx/html
EXPOSE 3000

FROM node:20 as publish
WORKDIR /web-client
COPY ./package*.json ./
RUN npm install --verbose
COPY . .
RUN npm run build

FROM base AS production
COPY --from=publish /web-client/nginx.conf /etc/nginx/conf.d/default.conf
RUN rm -rf ./*
COPY --from=publish /web-client/dist .
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]