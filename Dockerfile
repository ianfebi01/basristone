FROM node:16.15.0

WORKDIR /app

COPY package.json .

RUN npm install -g --silent
RUN npm install react-scripts@5.0.1 -g --silent

COPY . .
CMD ["npm", "start"]