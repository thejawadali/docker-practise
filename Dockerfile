# node image from docker hub
FROM node 

WORKDIR /app

COPY package.json .

RUN npm install

#    source dest
COPY . .

EXPOSE 3000

# only run in container
CMD [ "node", "index.js" ]