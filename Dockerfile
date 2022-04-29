FROM node:16.15-buster

# set working directory
WORKDIR /code


# install app dependencies
COPY package.json package.json
COPY package-lock.json package-lock.json


RUN npm install 

COPY . .

# start app
CMD ["npm", "run", "start"]