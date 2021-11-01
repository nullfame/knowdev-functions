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

const envBoolean = (key) => {
  switch (String(process.env[key]).toLowerCase()) {
    case "true":
    case "1":
      return true;

    case "false":
    case "0":
      return false;

    default:
      return undefined;
  }
};

//
//
// Export
//

module.exports = envBoolean;
