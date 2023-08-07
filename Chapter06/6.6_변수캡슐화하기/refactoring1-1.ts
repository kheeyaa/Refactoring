// defaultOwner.js
// 변수 캡슐화
let defaultOwnerData = { firstName: "마틴", lastName: "파울러" };
export function defaultOwner() {
  return defaultOwnerData;
}
export function setDefaultOwner(arg) {
  defaultOwnerData = arg;
}

// 변수 사용
// const spaceship: { owner: { firstName: string; lastName: string } | null } = {
//   owner: null,
// };
// spaceship.owner = defaultOwner();
// setDefaultOwner({ firstName: "레베카", lastName: "파슨스" });
