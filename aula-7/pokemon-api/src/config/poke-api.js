const axios = require("axios");

module.exports = axios.create({
  baseURL: process.env.POKE_API_BASE_URL,
});
