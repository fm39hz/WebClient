FROM node:20

WORKDIR /app

COPY ./src/ ./
COPY ./*.* ./
COPY ./.vitest/ ./

RUN npm install

CMD ["npm", "run", "dev", "--verbose"]
