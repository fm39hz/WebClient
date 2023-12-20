FROM node:20
EXPOSE 3000

WORKDIR /web-client

COPY ./*.* ./

RUN npm install

COPY ./src ./
COPY ./.vitest/ ./


CMD ["npm", "run", "dev", "--verbose"]
