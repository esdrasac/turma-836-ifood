const log = require("../utils/log");

exports.getErrorResponse = (error) => {
  log.error(error);
  return {
    status: error.status || 500,
    message: JSON.stringify({ message: error.message || "Server Error" }),
  };
};

exports.setResponse = (status, message) => {
  throw {
    status: status || 500,
    message: message,
  };
};
