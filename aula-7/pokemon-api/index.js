require("dotenv").config();
const http = require("http");
const urlEncode = require("url");
const qs = require("querystring");

const log = require("./src/utils/log");
const routes = require("./src/routes");

const server = http.createServer((request, response) => {
  try {
    const { url } = request;
    const { pathname, query } = urlEncode.parse(url);

    if (!routes[pathname]) {
      throw {
        statusCode: 404,
        message: "Not found",
      };
    }

    log.request(pathname);
    const queryParsed = qs.parse(query);

    request.queryParams = queryParsed;

    routes[pathname](request, response);
  } catch (error) {
    response.writeHead(error.statusCode);
    response.end(error.message);
  }
});

server.listen(process.env.PORT, () =>
  console.log(`::: Server listening on port ${process.env.PORT}`)
);
