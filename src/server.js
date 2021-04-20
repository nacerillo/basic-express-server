"use strict";

const express = require("express");
const app = express();

const notFound = require("./error-handlers/404.js");
const errors = require("./error-handlers/500.js");
const logger = require("./middleware/logger.js");

// global middleware for handleing parsing of req.body
app.use(express.json());

// GET http://localhost:3005?name=nick&cool=fun
app.get("/hello", (req, res) => {
  console.log(req.query);
  res.send("hello world!");
});

// http://localhost:3005/hello/a/b
app.get("/hello/:person/:another", (req, res) => {
  console.log("params", req.params);
  res.send(req.params);
});

app.get("/cool", logger, square(5), (req, res) => {
  console.log(req.squared);
  res.json({ num: req.squared });
});

app.post("/test-post", (req, res) => {
  console.log(req.body);
  res.send("cool, amazing ");
});

//this is called function-currying
function square(n) {
  return (req, res, next) => {
    if (typeof n !== "number") {
      next("not a number!");
    } else {
      req.squared = n * n;
      next();
    }
  };
}

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
