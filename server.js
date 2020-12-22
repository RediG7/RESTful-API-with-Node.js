const http = require("http");
const app = require("./app");
const PORT = process.env.PORT || 3000; 
// pass a listener to createServer(), express app qualifies as a request handler
const server = http.createServer(app);

server.listen(PORT);