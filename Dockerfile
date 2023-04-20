# node image from docker hub
FROM node 

WORKDIR /app

COPY package.json .

RUN npm install

#    source dest
COPY . .

ENV PORT 3000

EXPOSE $PORT

# only run in container
CMD [ "node", "index.js" ]