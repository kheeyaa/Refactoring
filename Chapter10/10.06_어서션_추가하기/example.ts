// 어서션 추가하기
// https://www.fronttigger.dev/2022/typescript/type-guard

import assert from "assert";

/********* 책 예시 *********/
export class Customer {
  discountRate: number;

  applyDiscount(aNumber) {
    // discountRate는 항상 양수인가?
    return this.discountRate ? aNumber - this.discountRate * aNumber : aNumber;
  }
}

/********* Assert 예시 *********/
export function nodeAssert() {
  const a = 1;
  const b = 1;

  // node: assert package
  assert(a === b);
  console.log("a===b");

  assert(a != b); // 에러 발생 후 프로그램 종료.
  console.log("a!=b"); // 실행 안됨.
}

export function broswerAssert() {
  const a = 1;
  const b = 1;

  // browser: console.assert
  console.assert(a === b);
  console.log("a===b");

  console.assert(a != b); // 로그만 찍힘.
  console.log("a!=b"); // 실행 됨.
}
