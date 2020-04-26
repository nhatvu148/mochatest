const assert = require("chai").assert;
//const addNumbers = require("../app").addNumbers;
const app = require("../app");

const { sayHello, addNumbers } = app;
//Results
sayHelloResult = sayHello();
addNumbersResult = addNumbers(5, 5);

describe("App", () => {
  describe("sayHello()", () => {
    it("app should return hello", () => {
      //let result = sayHello();
      assert.equal(sayHelloResult, "hello");
    });

    it("sayHello should return type string", () => {
      //   let result = sayHello();
      assert.typeOf(sayHelloResult, "string");
    });
  });

  describe("addNumbers()", () => {
    it("addNumbers should be above 5", () => {
      //   let result = addNumbers(5, 5);
      assert.isAbove(addNumbersResult, 5);
    });

    it("addNumbers should return type number", () => {
      //   let result = addNumbers(5, -5);
      assert.typeOf(addNumbersResult, "number");
    });
  });
});
