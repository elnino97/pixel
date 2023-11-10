const http = require("http");
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("<h1>Hello world but it's big</h1>");
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
