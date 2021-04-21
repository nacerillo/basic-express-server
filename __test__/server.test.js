"user strict";

const { server } = require("../src/server.js");
const supertest = require("supertest"); // mock request engine
const mockRequest = supertest(server);

describe("**WEB SERVER**", () => {
  it("should respond with a 404 on not found", async () => {
    return mockRequest.get("no-thing").then((data) => {
      expect(data.status).toBe(404);
    });
  });

  it("should respond with a 500 on an error", () => {
    //TO
    const response = await request.get("/bad");
    expect(response.status).toEqual(500);
    expect(response.body.route).toEqual("/bad");
  });

  it("should respond properly to a GET: /hello", async () => {
    const response = await mockRequest.get("/hello");
    expect(response.status).toBe(200); // test for status code
    expect(response.text).toBe("hello world!"); // test your output
    // HINT: test for shape/type of data
  });


});
