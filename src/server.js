"use strict";

const express = require("express");
const app = express();

const notFound = require("./error-handlers/404.js");
const errors = require("./error-handlers/500.js");
const logger = require("./middleware/logger.js");
const validator = require("./middleware/validator.js");

// global middleware for handleing parsing of req.body
app.use(express.json());

// GET http://localhost:3005?name=nick&cool=fun
app.get("/hello", (req, res) => {
  console.log(req.query);
  res.send("hello world!");
});

// http://localhost:3005/person
app.get("/person", validator, (req, res) => {
  console.log("params", req.query.name);
  res.send(req.query.name);
});

//this is called function-currying

app.use("*", notFound);

app.use(errors);

module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`server is up at: ${port}`);
    });
  },
};
