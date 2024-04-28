import fs from "node:fs";
import zlib from "node:zlib";

const gzib = zlib.createGzip();
const readableStream = fs.createReadStream("./file.txt", {
  encoding: "utf-8",
});

readableStream.pipe(gzib).pipe(fs.createWriteStream("./file2.txt.gz"));

const writeableStream = fs.createWriteStream("./file2.txt");
readableStream.pipe(writeableStream);
