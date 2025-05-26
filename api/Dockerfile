FROM node:20-alpine AS base
ENV APP_DIR=/app
ENV HOST=0.0.0.0
WORKDIR $APP_DIR
COPY package*.json $APP_DIR/
RUN npm ci && npm cache clean --force
EXPOSE 3000

COPY index.js $APP_DIR/index.js
COPY utils $APP_DIR/utils
COPY services $APP_DIR/services

CMD ["node", "index.js"]

