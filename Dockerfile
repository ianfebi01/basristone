FROM node:14.21.2-alpine3.16 as build

WORKDIR /usr/app

COPY . /usr/app

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.6.0/wait /wait
RUN chmod +x /wait

RUN npm install 
#RUN npm install react-scripts@5.0.1 -g --silent

#COPY . .
#CMD ["npm", "start"]

RUN npm run build

FROM nginx:1.23.1-alpine
EXPOSE 80
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/app/build /usr/share/nginx/html