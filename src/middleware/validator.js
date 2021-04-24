"use strict";

const validator = (req, res, next) => {
  // if req.query.name is not equal to a name, then
  // send message saying to provide a name.
  // otherwise, go next
  !req.query.name
    ? res.status(500).send("please provide a valid name")
    : next();
};

module.exports = validator;
