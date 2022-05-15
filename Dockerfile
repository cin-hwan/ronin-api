FROM node:14.18.0

WORKDIR /builder
COPY package.json /builder/
COPY yarn.lock /builder/
RUN yarn
COPY . .
COPY .env.production .env

EXPOSE 4000

CMD ["yarn", "serve"]