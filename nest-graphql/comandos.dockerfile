docker container run \
--name nest-app \
-w /app \
-dp 80:3000 \
-v "$(pwd)":/app \
node:18.14.2-alpine3.16 \
sh -c "yarn install && yarn start:dev"