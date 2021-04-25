"use strict";

function errorHandler(err, req, res, next) {
  //console.log("500 - RES", res);
  // console.log("500 - NEXT", next);
  res.status(500).send("something went wrong");
}

module.exports = errorHandler;
