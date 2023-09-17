// 값을 참조로 바꾸기

let _repositoryData: {
  customers: Map<number, Customer>;
};

export function initialize() {
  _repositoryData = {
    customers: new Map(),
  };
}

export function registerCustomer(id) {
  if (!_repositoryData.customers.has(id))
    _repositoryData.customers.set(id, new Customer(id));
  return findCustomer(id)!;
}

export function findCustomer(id) {
  return _repositoryData.customers.get(id);
}

initialize();

export class Order {
  private _number: number;
  private _customer: Customer;

  constructor(data: { number: number; customer: number }) {
    this._number = data.number;
    this._customer = registerCustomer(data.customer);
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

  constructor(id: number) {
    this._id = id;
  }

  get id() {
    return this._id;
  }
}
