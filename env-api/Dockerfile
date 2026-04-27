# select a docker base image to work with
FROM node:18-alpine

# setup a working directory 
WORKDIR /app

COPY package.json .

COPY package-lock.json .

RUN npm i

COPY ./server.js .

ENV PORT=3000
ENV API_KEY=wow
ENV DB_HOST=postgress123
ENV NODE_ENV=production

EXPOSE 3000

ENTRYPOINT ["node"]

CMD ["server.js"]