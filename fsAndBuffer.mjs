import EventEmitter from "node:events";
import PizzaShop from "./pizza-shop.mjs";
import fs from "node:fs";

const pizzaShop = new PizzaShop();

pizzaShop.on("order", (size, flavour) =>
  console.log(`Order recieved. Baking a ${size} ${flavour} pizza.`)
);

pizzaShop.order("Large", "Vegetarian");
pizzaShop.displayOrderNumber();

const emitter = new EventEmitter();

emitter.on("order-pizza", (size, flavour) => {
  console.log(size, flavour);
});
emitter.emit("order-pizza", "large", "vegeterian");

const buffer = new Buffer.from("Nkuli");

buffer.write("Code");
console.log(buffer.toJSON());
console.log(buffer);
console.log(buffer.toString());

const fileContents = fs.readFileSync("./file.txt", "utf-8");
console.log(fileContents);

fs.readFile("./file.txt", "utf-8", (error, data) => {
  if (error) console.error(error);
  else console.log(data);
});

fs.writeFileSync("./greet.txt", "Hello World");

fs.writeFile("./greet.txt", "Mthimkulu", { flag: "a" }, (error, data) => {
  if (error) console.error(error);
  else console.log("File written");
});
