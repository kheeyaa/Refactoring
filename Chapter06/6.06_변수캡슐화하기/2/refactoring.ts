// defaultOwner.js
// 변수 캡슐화
let defaultOwnerData = { firstName: "마틴", lastName: "파울러" };
export function defaultOwner() {
  // 값 캡슐화
  // return Object.assign({}, defaultOwnerData);

  // https://developer.mozilla.org/ko/docs/Web/API/structuredClone
  return structuredClone(defaultOwnerData); // node 17 이상
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
