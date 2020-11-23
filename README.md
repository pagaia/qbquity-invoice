# QBQUITY Invoice

This is a project to create invoice from a web interface, save into a mongoDB and print in PDF
Here you can find 2 main projects: the front-end and the back-end.

The Front-end is developed with React and React-pdf.
The Web API to store the invoce is done with fastify and the data is stored into a MongoDB.

## Start Client

To start the client in dev mode run

```bash
cd client && yarn run start
```

## Installation server

In order to install the server you need to have mongoDB installed and running.
Edit connection url into config/config.js

## Start Server

To start the server in dev mode run

```bash
cd server && npm start
```
