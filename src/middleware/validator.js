"use strict";

const validator = (req, res, next) => {
  req.query.name ? next() : next("Please provide a name.");
};

module.exports = validator;
