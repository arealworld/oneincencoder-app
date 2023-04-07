FROM nginx
LABEL author="csantillan"
COPY ./dist/encoder-frontend /usr/share/nginx/html
EXPOSE 80 443
CMD ["nginx", "-g", "daemon off"]