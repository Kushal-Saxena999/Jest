// const multiply = require("./index");

// //Test Suite
// //
// test("2 and 5 multiply equal 10", async () => {
//   expect(multiply(2, 5)).toEqual(10); //exact equality ===
// });

// test("Object Equality", () => {
//   const data = { alpha: "A"};
//   data["beta"] = "B";
//   expect(data).toBe({ alpha: "A", beta: "B"});//Deep Equality(value is structured ==)
// });


//For Null Values

// test('Null Values', () => {
//   const value = null;
//   expect(value).toBeNull();(Below ones are synonyms)
//   expect(value).toBeDefined();
//   expect(value).not.toBeUndefined();
//   expect(value).not.toBeTruthy();
//   expect(value).toBeFalsy();
// })

//For O value

// test('Zero Values', () => {
//   const value = 0;
//   expect(value).not.toBeNull();(Below ones are synonyms)
//   expect(value).toBeDefined();
//   expect(value).not.toBeUndefined();
//   expect(value).not.toBeTruthy();
//   expect(value).toBeFalsy();
// })



//For Comparision

// test('Number Comparision', () => {
//   const value = 3 + 3;
//   expect(value).toBeGreaterThan(5); // >
//   expect(value).toBeGreaterThanOrEqual(5); //>=
//   expect(value).toBeLessThan(7); //<
//   expect(value).toBeLessThanOrEqual(6); // <=
//   expect(value).toBe(6);
//   expect(value).toEqual(6);

//   const floatValue = 0.2 + 0.1;
//   expect(floatValue).toBeCloseTo(0.3, 5);

//   expect("Developer").not.toMatch(/I/);
//   expect("Developer").toMatch(/Dev/);
// });


test.only("Array Matchers", () => {
  const todoList = [
    "Buy Groceries",
    "Clean Room",
    "Subscribe",
    "Like",
    "Comment",
  ];
  expect(todoList).toContain("Subscribe");


  //exception matchers
function openInvalidFile() {
  throw new Error("file not found");
}

expect(() => openInvalidFile()).toThrow();
expect(() => openInvalidFile()).toThrow(Error);
expect(() => openInvalidFile()).toThrow("File not Found");
expect(() => openInvalidFile()).toThrow(/not found/);
});

test.only("drink returns", () => {
  const drink = jest.fn(() => true);
  drink();
  expect(drink).toHaveReturnedWith(true);
});

