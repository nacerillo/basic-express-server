"use strict";

const logger = (req, res, next) => {
  console.log("Request data:", req.method, req.path);
  next();
};

exports.modules = logger;
