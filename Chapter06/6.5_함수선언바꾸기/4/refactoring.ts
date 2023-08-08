// 예시: 매개변수를 속성으로 바꾸기
declare const someCustomers: { name: string; address: { state: string } }[];

// 0. before
// export const newEnglanders = someCustomers.filter((c) => isNewEngland(c));

// export function isNewEngland(aCustomer) {
//   return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(aCustomer.address.state);
// }

// 1. 매개변수로 사용할 코드를 변수로 추출
// export const newEnglanders = someCustomers.filter((c) => isNewEngland(c));

// export function isNewEngland(aCustomer) {
//   const stateCode = aCustomer.address.state;
//   return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(stateCode);
// }

// 2. 함수 추출하기로 새 함수 생성
// export const newEnglanders = someCustomers.filter((c) => isNewEngland(c));

// export function isNewEngland(aCustomer) {
//   const stateCode = aCustomer.address.state;
//   return xxNewinNewEngland(stateCode);
// }
// export function xxNewinNewEngland(stateCode) {
//   return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(stateCode);
// }

// 3. 함수 인라인하기 (기존 함수 호출문을 새 호출문으로 교체)
// export const newEnglanders = someCustomers.filter((c) => xxNewinNewEngland(c));

// export function isNewEngland(aCustomer) {
//   const stateCode = aCustomer.address.state;
//   return xxNewinNewEngland(stateCode);
// }
// export function xxNewinNewEngland(stateCode) {
//   return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(stateCode);
// }

// 4. 함수 선언 바꾸기
export const newEnglanders = someCustomers.filter((c) =>
  isNewEngland(c.address.state)
);

export function isNewEngland(stateCode) {
  return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(stateCode);
}
