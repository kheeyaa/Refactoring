// 예시: 매개변수 추가하기
export class Book {
  private _reservations: any[];
  constructor() {
    this._reservations = [];
  }

  addReservation(customer) {
    this.zz_addReservation(customer, false);
  }

  zz_addReservation(customer, isPriority) {
    // 새로 추가한 매개변수를 사용하는지 확인
    // https://developer.mozilla.org/ko/docs/Web/API/console/assert
    console.assert(isPriority === true || isPriority === false);
    this._reservations.push(customer);
  }
}
