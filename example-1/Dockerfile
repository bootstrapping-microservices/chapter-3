FROM node:12.18.1-alpine
#  in case that you want to set the port number in the image and not in the app uncomment by removing # sign from below line.
# ENV PORT=3000
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=production
COPY ./src ./src
COPY ./videos ./videos
CMD npm start
