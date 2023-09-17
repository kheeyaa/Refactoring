// 참조를 값으로 바꾸기
export class Person {
  private _telephoneNumber: TelephoneNumber;

  constructor(areaCode, number) {
    this._telephoneNumber = new TelephoneNumber(areaCode, number);
  }

  get officeAreaCode() {
    return this._telephoneNumber.areaCode;
  }
  set officeAreaCode(arg) {
    // 기존 내부 객체에 접근해서 값을 할당하는 것이 아닌
    // 통째로 내부 객체를 변경함 (참조를 값으로 바꾸기)
    this._telephoneNumber = new TelephoneNumber(arg, this.officeNumber);
  }
  get officeNumber() {
    return this._telephoneNumber.number;
  }
  set officeNumber(arg) {
    this._telephoneNumber = new TelephoneNumber(this.officeAreaCode, arg);
  }
}

class TelephoneNumber {
  private _areaCode: string;
  private _number: string;

  constructor(areaCode, number) {
    this._areaCode = areaCode;
    this._number = number;
  }

  get areaCode() {
    return this._areaCode;
  }
  set areaCode(arg) {
    this._areaCode = arg;
  }
  get number() {
    return this._number;
  }
  set number(arg) {
    this._number = arg;
  }
}
