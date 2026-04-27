# create base layer
FROM nginx:alpine

#copy html file to /usr/share/nginx folder
COPY html /usr/share/nginx/html

#copy configuration file to /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/conf.d/default.conf

EXPOSE 80


