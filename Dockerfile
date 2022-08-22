FROM node:14
ENV NODE_ENV dev
WORKDIR /app

COPY package.json .
RUN npm install
COPY . .
CMD npm run start
EXPOSE 8080
