FROM node:16-bullseye-slim

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm i -g @medusajs/medusa-cli
RUN npm ci --only=production
COPY ./dist ./medusa-config.js ./
EXPOSE 9000
CMD ["medusa", "start"]