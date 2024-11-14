const multiply = require("./index");

//Test Suite
//
test("2 and 5 multiply equal 10", async () => {
  expect(multiply(2, 5)).toBe(10)//exact equality
});

test("2 and 5 multiply not equal 4", async () => {
  expect(multiply(2, 5)).not.toBe(4)//exact equality
});