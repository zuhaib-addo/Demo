const http = require('http');
const port = process.env.PORT || 4000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end('Welcome Node!\n');
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
