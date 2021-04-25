"use strict";

function fourHandler(req, res, next) {
  console.log("I am hit");
  res.status(404).json({ msg: "not found" });
}
module.exports = fourHandler;
/*module.exports = (req, res, next) => {
  res.status(404).json({ msg: "not found" });
  next();
};*/
