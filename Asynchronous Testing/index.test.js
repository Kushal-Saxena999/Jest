// Async Unit test

const fetchData = require("./fetchData");

// test("the data is choclate using promises", () => { // In place of .then we can use .catch
//   return fetchData().then((data) => {
//     expect(data).toBe("chocolate");
//   });
// });



//Using async

test("the data is chocolate using async await", async () => {
    const data = await fetchData();
    expect(data).toBe("chocolate");
  });

  //fetch fails

  test("fetch fails", async () => {
    expect.assertions(1);
    try{
      await fetchData(true);
    } catch (error) {
      expect(error).toBe("error occured");
    }
  });

  // In case of resolve 

  test("Async Test", async () => {
    await expect(fetchData()).resolves.toBe("chocolate")
  });

  //In Case of rejects

  test("Async Test", async () => {
    await expect(fetchData(true)).rejects.toMatch("Error Occured")
  });

