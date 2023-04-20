# node image from docker hub
FROM node 

WORKDIR /app

COPY package.json .

RUN npm install

#    source dest
COPY . .

ARG DEFAULT_PORT=3000

ENV PORT $DEFAULT_PORT

EXPOSE $PORT

# only run in container
CMD [ "node", "index.js" ]