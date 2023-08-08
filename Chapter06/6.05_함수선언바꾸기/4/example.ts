// 예시: 매개변수를 속성으로 바꾸기
declare const someCustomers: { name: string; address: { state: string } }[];

export const newEnglanders = someCustomers.filter((c) => isNewEngland(c));

export function isNewEngland(aCustomer) {
  return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(aCustomer.address.state);
}
