# backend
cd ./backend
docker-compose build
docker-compose up

# admin
cd ./admin
yarn install
yarn start
cd ..

# one-page checkout
cd ./one-page-checkout
yarn install
yarn start

# add a comment that does nothing