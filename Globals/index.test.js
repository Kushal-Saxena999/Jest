const multiply = require("./index");

//Test Suite
//

describe("Multiply Test",()=> {
  it("2 and 5 multiply equal 10", async () => {
    expect(multiply(2, 5)).toBe(10);//exact equality
  });
  it("2 and 5 multiply equal 10", async () => {
    expect(multiply(2, 5)).not.toBe(5);//exact equality
  });
})
// test("2 and 5 multiply equal 10", async () => {
//   expect(multiply(2, 5)).toBe(10);//exact equality
// });