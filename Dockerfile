FROM node
ADD . /var/www/
WORKDIR /var/www/
RUN rm -rf node_modules
RUN npm i
CMD ["npm", "run", "dev"]
