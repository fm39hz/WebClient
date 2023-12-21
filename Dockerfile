FROM node:20
WORKDIR /web-client
EXPOSE 3000

COPY ./*.* ./

RUN npm install
RUN npm install --global serve
COPY ./src ./src
COPY ./.vitest ./.vitest

RUN npm run build

CMD ["npm", "run", "serve"]
