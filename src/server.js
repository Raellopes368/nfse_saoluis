const express = require('express');
const routes = require('./routes');

class Server {
  constructor() {
    this.server = express();
    this.middlewares();
    this.security();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  security() {
    this.server.use((req, res, next) => {
      res.setHeader('X-Powered-By', 'PHP/7.4.1');
      return next();
    });
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new Server().server;
