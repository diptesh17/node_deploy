const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to Algo_binary");
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log("Server is running on port 3000"));
