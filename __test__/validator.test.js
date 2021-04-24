const { expect } = require("@jest/globals");
const { server } = require("../src/server.js");
const validatorMiddleware = require("../src/middleware/validator.js");
// mock request engine
describe("validate name", () => {
  let validatorSpy;
  let req = {};
  let res = {};
  let next = jest.fn();

  beforeEach(() => {
    //
    validatorSpy = jest.spyOn(next, "next").mockImplementation();
  });

  afterEach(() => {
    // Restore console
    validatorSpy.mockRestore();
  });

  test("Checking if name is given", () => {
    validatorMiddleware(req, res, next);
    expect(validatorSpy).toHaveBeenCalled();
  });
});
