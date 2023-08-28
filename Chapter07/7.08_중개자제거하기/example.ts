export class Person {
  private _name: string;
  private _department: Department;
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  set name(arg) {
    this._name = arg;
  }
  set department(arg) {
    this._department = arg;
  }
  get manager() {
    return this._department.manager;
  }
}
export class Department {
  private _chargeCode: string;
  private _manager: Person;
  constructor(chargeCode, manager) {
    this._chargeCode = chargeCode;
    this._manager = manager;
  }
  get chargeCode() {
    return this._chargeCode;
  }
  set chargeCode(arg) {
    this._chargeCode = arg;
  }
  get manager() {
    return this._manager;
  }
  set manager(arg) {
    this._manager = arg;
  }
}

export function use() {
  const aPerson = new Person("홍길동");
  aPerson.department = new Department("A", new Person("김갑수"));
  const manager = aPerson.manager;
}
