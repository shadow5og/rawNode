import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const server = http.createServer((req, res) => {
  try {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/index.html").pipe(res);
  } catch (e) {
    console.error(e);
    const error = { message: "Something went wrong" };
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify(error));
  }
});

server.listen(3000, () => console.log("Server running on port 3000"));
