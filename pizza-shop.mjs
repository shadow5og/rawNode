import EventEmitter from "node:events";

class PizzaShop extends EventEmitter {
  constructor() {
    super();
    this.orderNumber = 0;
  }

  orderNumber;

  displayOrderNumber() {
    console.log(`Current order number: ${this.orderNumber}`);
  }

  order(size, flavour) {
    this.orderNumber++;
    this.emit("order", size, flavour);
  }
}

export default PizzaShop;
