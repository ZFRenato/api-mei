FROM node

WORKDIR /src/app

COPY . .

RUN npm install -g prisma --unsafe-perm

ADD ./ ./prisma/

CMD ["primsa", "migrate", "dev", "--name", "init"]