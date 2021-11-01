const envBoolean = require("../envBoolean");

//
//
// Mock constants
//

const MOCK = {
  KEY: "MOCK_KEY",
};

//
//
// Mock modules
//

//
//
// Mock environment
//

const DEFAULT_ENV = process.env;
beforeEach(() => {
  process.env = { ...process.env };
});
afterEach(() => {
  process.env = DEFAULT_ENV;
});

//
//
// Run tests
//

describe("EnvBoolean", () => {
  it("Returns undefined by default", async () => {
    const response = await envBoolean(MOCK.KEY);
    expect(response).toBeUndefined();
  });
  it("Returns true when string true", async () => {
    process.env[MOCK.KEY] = "true";
    const response = await envBoolean(MOCK.KEY);
    expect(response).toBeTrue();
  });
  it("Returns true when string TRUE", async () => {
    process.env[MOCK.KEY] = "TRUE";
    const response = await envBoolean(MOCK.KEY);
    expect(response).toBeTrue();
  });
  it("Returns true when boolean true", async () => {
    process.env[MOCK.KEY] = true;
    const response = await envBoolean(MOCK.KEY);
    expect(response).toBeTrue();
  });
  it("Returns true when string 1", async () => {
    process.env[MOCK.KEY] = "1";
    const response = await envBoolean(MOCK.KEY);
    expect(response).toBeTrue();
  });
  it("Returns true when number 1", async () => {
    process.env[MOCK.KEY] = 1;
    const response = await envBoolean(MOCK.KEY);
    expect(response).toBeTrue();
  });
  it("Returns false when string false", async () => {
    process.env[MOCK.KEY] = "false";
    const response = await envBoolean(MOCK.KEY);
    expect(response).toBeFalse();
  });
  it("Returns false when string FALSE", async () => {
    process.env[MOCK.KEY] = "FALSE";
    const response = await envBoolean(MOCK.KEY);
    expect(response).toBeFalse();
  });
  it("Returns false when boolean false", async () => {
    process.env[MOCK.KEY] = false;
    const response = await envBoolean(MOCK.KEY);
    expect(response).toBeFalse();
  });
  it("Returns false when string 0", async () => {
    process.env[MOCK.KEY] = "0";
    const response = await envBoolean(MOCK.KEY);
    expect(response).toBeFalse();
  });
  it("Returns false when number 0", async () => {
    process.env[MOCK.KEY] = 0;
    const response = await envBoolean(MOCK.KEY);
    expect(response).toBeFalse();
  });
});
