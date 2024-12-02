FROM node:18-alpine

WORKDIR /mevn

COPY /vue-app/package*.json ./

RUN npm install

COPY /vue-app .

EXPOSE 8080

CMD ["npm", "run", "serve"]
