// 간단한 레코드 캡슐화하기
export const organization = { name: "에크미 구스베리", country: "GB" };

function use() {
  let result = "";

  result += `<h1>${organization.name}</h1>`;
  organization.name = "newName";
}
