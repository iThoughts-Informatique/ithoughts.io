FROM fholzer/nginx-brotli

COPY ./dist/ /usr/share/nginx/html
COPY ./docker-nginx.conf /etc/nginx/conf.d/server.conf
