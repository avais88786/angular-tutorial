FROM nginx:alpine
LABEL author="Avais Mohammad"
COPY ./dist/ /usr/share/nginx/html
EXPOSE 80 443
ENTRYPOINT ["nginx", "-g", "daemon off;"]
