"user strict";

const { server } = require("../src/server.js");
const supertest = require("supertest"); // mock request engine
const mockRequest = supertest(server);

describe("**WEB SERVER**", () => {
  it("should respond with a 404 on bad path", async () => {
    return mockRequest.get("/no-thing").then((data) => {
      expect(data.status).toBe(404);
    });
  });

  it("should respond with a 404 on bad method", async () => {
    return mockRequest.put("/person").then((data) => {
      expect(data.status).toBe(404);
    });
  });
  /*it("should respond with a 500 on an error", async () => {
    //TO
    const response = await mockRequest.get("bad");
    //console.log("500 status -", response.status);
    expect(response.status).toEqual(500);
    expect(response.body.route).toEqual("/bad");
  });*/

  it("should respond with 500 if no name is given", async () => {
    const response = await mockRequest.get("/person?name=");
    expect(response.status).toBe(500); // test for status code // test your output
    // HINT: test for shape/type of data
  });
});
