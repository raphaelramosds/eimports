FROM node:22-alpine

WORKDIR /home/node/app

COPY package*.json ./

COPY . .

CMD sh -c "npm i && npm run dev"