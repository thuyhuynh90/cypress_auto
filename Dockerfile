FROM cypress/base:20.14.0

RUN mkdir /app

WORKDIR /app

COPY . /app

RUN npm install

RUN npx cypress verify

RUN npx cypress run

RUN npm run junit:merge

RUN npm run mochawsome:merge