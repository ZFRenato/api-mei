FROM node

WORKDIR /src/app

COPY . .

RUN npm install

RUN apt-get -q update && apt-get -qy install netcat

EXPOSE ${PORT}

CMD [ "npm", "run", "dev" ]
