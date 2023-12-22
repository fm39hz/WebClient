FROM node:20
WORKDIR /web-client
EXPOSE 3000

COPY ./*.* ./

RUN npm install
COPY ./src ./src
COPY ./.vitest ./.vitest

RUN npm run build

CMD ["npm", "run", "dev"]
