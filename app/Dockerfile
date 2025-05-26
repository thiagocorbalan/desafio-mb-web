FROM node:20-alpine AS base
ENV APP_DIR=/app
ENV HOST=0.0.0.0
WORKDIR $APP_DIR
COPY package*.json $APP_DIR/
RUN npm ci && npm cache clean --force
EXPOSE 8080

COPY src/ $APP_DIR/src
COPY public/ $APP_DIR/public
COPY tests/ $APP_DIR/tests
COPY .eslintrc.js $APP_DIR/.eslintrc.js
COPY .babelrc $APP_DIR/.babelrc
COPY jsconfig.json $APP_DIR/jsconfig.json
COPY .prettierrc.json $APP_DIR/.prettierrc.json

CMD ["npm", "run", "serve"]

