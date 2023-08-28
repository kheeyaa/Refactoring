export class Order {
  priority: any;
  constructor(data) {
    this.priority = data.priority;
  }
}

export const order = [
  new Order({ priority: "high" }),
  new Order({ priority: "rush" }),
];

export const highPriorityCount = order.filter(
  (o) => "high" === o.priority || "rush" === o.priority
).length;
