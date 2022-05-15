FROM node:14.18.0

WORKDIR /builder
COPY package.json /builder/
COPY yarn.lock /builder/
RUN yarn
COPY . .

EXPOSE 4000

CMD ["yarn", "serve"]