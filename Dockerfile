FROM node:8

# direktori
WORKDIR /usr/src/app

# install app dependencies

COPY package*.json ./
RUN npm install

# Bundle code app
COPY . .

EXPOSE 3000
cmd ["npm", "start"]
