FROM node:18.16-alpine 

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn

COPY . . 

RUN yarn prisma generate
RUN yarn prisma db push
RUN yarn prisma db seed

EXPOSE 5050

RUN yarn build

CMD ["yarn", "start"]