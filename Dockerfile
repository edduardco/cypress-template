FROM cypress/base:12
WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install --save-dev cypress

RUN $(npm bin)/cypress verify

COPY cypress cypress
COPY cypress.config.js .

RUN $(npm bin)/cypress