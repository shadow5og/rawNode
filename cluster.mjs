import cluster from "node:cluster";
import http from "node:http";
import os from "node:os"; //returns no of cores our cpu have

const numOfCPUs = os.cpus().length;

if (cluster.isPrimary) {
  console.log(`Master process ${process.pid} is running`);
  //fork workers.
  for (let i = 0; i < numOfCPUs; i++) {
    console.log(`Forking process number ${i}...`);
    cluster.fork(); //creates new node js processes
  }
  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
    cluster.fork(); //forks a new process if any process dies
  });
} else {
  const server = http.createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Home page");
    } else if (req.url === "/slow-page") {
      for (let i = 0; i < 6000000000; i++) {} // Simulate CPU work
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Slow Page");
    }
  });

  server.listen(8000, () => console.log("Server is running on port 8000"));

  console.log(`Worker ${process.pid} started`);
}
