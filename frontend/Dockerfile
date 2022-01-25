FROM node:17-slim

WORKDIR /app

EXPOSE 3000

COPY package.json .
COPY package-lock.json .

# RUN mkdir /app/node_modules
# RUN chown node:node /app/node_modules
# RUN npm cache clean
RUN npm install
RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache
# RUN chown -R node.node /app
COPY . .

CMD ["npm", "start"]