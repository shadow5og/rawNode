import http from "node:http";

const server = http.createServer((req, res) => {
  const superHero = {
    firstName: "Bruce",
    lasName: "Wayne",
  };
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(superHero));
});

server.listen(3000, () => console.log("Server running on port 3000"));
