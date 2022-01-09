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
  it("Returns undefined by default", () => {
    const response = envBoolean(MOCK.KEY);
    expect(response).toBeUndefined();
  });
  it("Returns a default value that can be set", () => {
    const response = envBoolean(MOCK.KEY, { defaultValue: true });
    expect(response).toBeTrue();
  });
  it("Returns true when string true", () => {
    process.env[MOCK.KEY] = "true";
    const response = envBoolean(MOCK.KEY);
    expect(response).toBeTrue();
  });
  it("Returns true when string TRUE", () => {
    process.env[MOCK.KEY] = "TRUE";
    const response = envBoolean(MOCK.KEY);
    expect(response).toBeTrue();
  });
  it("Returns true when boolean true", () => {
    process.env[MOCK.KEY] = true;
    const response = envBoolean(MOCK.KEY);
    expect(response).toBeTrue();
  });
  it("Returns true when string 1", () => {
    process.env[MOCK.KEY] = "1";
    const response = envBoolean(MOCK.KEY);
    expect(response).toBeTrue();
  });
  it("Returns true when number 1", () => {
    process.env[MOCK.KEY] = 1;
    const response = envBoolean(MOCK.KEY);
    expect(response).toBeTrue();
  });
  it("Returns false when string false", () => {
    process.env[MOCK.KEY] = "false";
    const response = envBoolean(MOCK.KEY);
    expect(response).toBeFalse();
  });
  it("Returns false when string FALSE", () => {
    process.env[MOCK.KEY] = "FALSE";
    const response = envBoolean(MOCK.KEY);
    expect(response).toBeFalse();
  });
  it("Returns false when boolean false", () => {
    process.env[MOCK.KEY] = false;
    const response = envBoolean(MOCK.KEY);
    expect(response).toBeFalse();
  });
  it("Returns false when string 0", () => {
    process.env[MOCK.KEY] = "0";
    const response = envBoolean(MOCK.KEY);
    expect(response).toBeFalse();
  });
  it("Returns false when number 0", () => {
    process.env[MOCK.KEY] = 0;
    const response = envBoolean(MOCK.KEY);
    expect(response).toBeFalse();
  });
});
