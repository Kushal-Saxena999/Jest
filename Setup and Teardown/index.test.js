const { addToArray } = require("./arrayUtils");


describe("SETUP AND TEARDOWN", () => {
  let testArray;
  beforeAll(() => {
    console.log("Before all test : initializearray");
    testArray = [];
  });
  
  afterAll(() => {
    console.log("After all test : clear");
    testArray = null;
  });
  
  beforeEach(() => {
    console.log("Before Each all test : clear");
    testArray = [];
  });
  
  
  afterEach(() => {
    console.log("After each all test : clear");
    console.log(testArray)
  });
  
  test("add item to array", () => {
    addToArray(testArray, "ritik");
    expect(testArray).toContain("ritik");
  });
})

