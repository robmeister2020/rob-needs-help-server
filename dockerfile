FROM node:alpine

WORKDIR .
COPY . .

RUN cd src && npm install

EXPOSE 3001

CMD ["node", "src/index.js"]