#base layer to start from

FROM node:18-alpine

#setup working directory
WORKDIR /app


# copying application code inside container
COPY app.js .

#Expose port
#EXPOSE 3000


CMD ["node", "app.js"]