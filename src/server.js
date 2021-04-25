"use strict";

const express = require("express");
const app = express();

const notFound = require("./error-handlers/404.js");
const errors = require("./error-handlers/500.js");
const logger = require("./middleware/logger.js");
const validator = require("./middleware/validator.js");

// global middleware for handleing parsing of req.body
app.use(express.json());
app.use(logger);

// GET http://localhost:3005?name=nick
app.get("/hello", (req, res, next) => {
  //console.log(req.query);
  res.send("hello world!");
});

app.get("/person", validator, (req, res, next) => {
  console.log("name", req.query.name);

  res.status(201).json({ name: req.query.name });
});

/*app.get("/cool", logger, square(5), (req, res) => {
  //console.log(req.squared);
  res.json({ num: req.squared });
});
// function currying
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
*/
app.use("*", notFound);

//app.use(errors);

module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`server is up at: ${port}`);
    });
  },
};
