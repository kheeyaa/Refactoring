export class Order {
  private _priority: Priority;
  constructor(aString: string) {
    this._priority = new Priority(aString);
  }

  get priorityString() {
    return this._priority.toString();
  }

  get priority() {
    return this._priority;
  }

  set priority(aString) {
    this._priority = new Priority(aString);
  }
}

export class Priority {
  private _value: any;
  constructor(value) {
    if (value instanceof Priority) return value;
    if (Priority.legalValues().includes(value)) {
      this._value = value;
    } else {
      throw new Error(`<${value}>는 유효하지 않은 우선순위입니다.`);
    }
  }

  toString() {
    return this._value;
  }

  static legalValues() {
    return ["low", "normal", "high", "rush"];
  }

  get priority() {
    return this._value;
  }

  get _index() {
    return Priority.legalValues().findIndex((s) => s === this._value);
  }

  higherThan(other: Priority) {
    return this._index > other._index;
  }
}

export const order = [new Order("high"), new Order("rush")];

export const highPriorityCount = order.filter((o) =>
  o.priority.higherThan(new Priority("normal"))
).length;
