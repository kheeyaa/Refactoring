// 값을 참조로 바꾸기

export class Order {
  private _number: number;
  private _customer: Customer;

  constructor(data: { number: number; customer: number }) {
    this._number = data.number;
    this._customer = new Customer(data.customer);
  }

  get customer() {
    return this._customer;
  }

  get number() {
    return this._number;
  }
}

export class Customer {
  private _id: number;

  constructor(id) {
    this._id = id;
  }

  get id() {
    return this._id;
  }
}
