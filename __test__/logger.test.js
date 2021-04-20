const loggerMiddleware = require("../src/middleware/logger.js");

//Tested middleware needs to be either exported from server or seperate module

describe("logger middleware", () => {
  let consoleSpy;
  let req = {};
  let res = {};
  let next = jest.fn(); //spy on next() method

  beforeEach(() => {
    // Attach to the console
    consoleSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    // Restore console
    consoleSpy.mockRestore();
  });

  it("properly logs some output", () => {
    loggerMiddleware(req, res, next);
    expect(consoleSpy).toHaveBeenCalled();
  });

  it("properly moves to the next middleware", () => {
    loggerMiddleware(req, res, next);
    // toHaveBeenCalled() is not enough, we need to make sure it was called with no args
    expect(next).toHaveBeenCalledWith();
  });
});
