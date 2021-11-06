const functions = require("..");

//
//
// Run tests
//

describe("Index", () => {
  it("Works", async () => {
    expect(functions).toBeObject();
  });
  it("exports envBoolean", async () => {
    expect(functions.envBoolean).toBeFunction();
  });
});
