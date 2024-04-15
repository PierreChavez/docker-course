FROM node:21.1-alpine3.18

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run test

CMD ["node", "app.js"]