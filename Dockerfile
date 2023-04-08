#stage 1
FROM node:latest as node
WORKDIR /oneincencoder-app
COPY . .
# RUN npm install
# RUN npm run build

#stage 2
FROM nginx:alpine
COPY --from=node /oneincencoder-app/dist/encoder-frontend /usr/share/nginx/html
EXPOSE 80 443