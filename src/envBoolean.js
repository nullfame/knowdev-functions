const getObjectKeyCaseInsensitive = require("./getObjectKeyCaseInsensitive");

//
//
// Constants
//

//
//
// Helper Functions
//

//
//
// Main
//

const envBoolean = (key, { defaultValue = undefined } = {}) => {
  switch (String(getObjectKeyCaseInsensitive(process.env, key)).toLowerCase()) {
    case "true":
    case "1":
      return true;

    case "false":
    case "0":
      return false;

    default:
      return defaultValue;
  }
};

//
//
// Export
//

module.exports = envBoolean;
