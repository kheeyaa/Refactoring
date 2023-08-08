// 예시: 매개변수 추가하기
export class Book {
  private _reservations: any[];

  constructor() {
    this._reservations = [];
  }

  addReservation(customer) {
    this._reservations.push(customer);
  }
}
