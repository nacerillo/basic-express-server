const { expect } = require("@jest/globals");
const { server } = require("../src/server.js");
const supertest = require("supertest");
const mockRequest = supertest(server);
const validatorMiddleware = require("../src/middleware/validator.js");
// mock request engine
describe("validate name", () => {
  /*let validatorSpy;
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
  });*/
  it("should respond with 500 if no name is given", async () => {
    const response = await mockRequest.get("/person?name=");
    expect(response.status).toBe(500); // test for status code // test your output
    // HINT: test for shape/type of data
  });

  it("should respond with 200 if name is given", async () => {
    const response = await mockRequest.get("/person?name=bobby");
    expect(response.status).toBe(200); // test for status code // test your output
    // HINT: test for shape/type of data
  });

  it("output should match with given name", async () => {
    let name = "bobby";
    const response = await mockRequest.get(`/person?name=${name}`);
    console.log("RESPONSE - ", response.body);
    expect(response.body.name).toEqual(name); // test for status code // test your output
    // HINT: test for shape/type of data
  });
});
