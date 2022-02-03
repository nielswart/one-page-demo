# build stage
FROM node:17.1.0 as builder
WORKDIR /app/medusa
COPY . . 

RUN rm -rf node_modules
RUN apt-get update && \
    apt-get install -y python

RUN npm install -g npm@latest && \
    npm install --loglevel=error && \
    npm run build

# final stage
FROM node:17.1.0

RUN mkdir dist
COPY package*.json develop.sh .env medusa-config.js ./

RUN apt-get update && \
    apt-get install -y python

RUN npm install -g @medusajs/medusa-cli && \
    npm i --only=production

COPY --from=builder /app/medusa/dist ./dist

EXPOSE 9000

ENTRYPOINT ["./develop.sh", "start"]