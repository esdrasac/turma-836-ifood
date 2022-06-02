const { DateTime } = require("luxon");

exports.request = (path) => {
  const dt = DateTime.now();
  return console.info(`[REQUEST: ${path}] => ${dt.toISO()}`);
};

exports.error = (obj) => {
  const dt = DateTime.now();
  return console.log(`[ERROR: ${JSON.stringify(obj)}] => ${dt.toISO()}`);
};
