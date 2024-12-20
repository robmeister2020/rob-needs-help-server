FROM node:alpine

WORKDIR ./rob-needs-help-server
COPY . .

RUN cd src && npm install

EXPOSE 3001

CMD ["node", "src/index.js"]