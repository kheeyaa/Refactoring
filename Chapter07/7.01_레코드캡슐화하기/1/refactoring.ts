// 간단한 레코드 캡슐화하기
export class Organization {
  private _data: any;
  constructor(data) {
    this._data = data;
  }

  set name(aString) {
    this._data.name = aString;
  }
  get name() {
    return this._data.name;
  }
  set country(aCountryCode) {
    this._data.country = aCountryCode;
  }
  get country() {
    return this._data.country;
  }
}

export const organization = new Organization({
  name: "에크미 구스베리",
  country: "GB",
});

export function getOrganization() {
  return organization;
}

function use() {
  let result = "";

  result += `<h1>${getOrganization().name}</h1>`;
  getOrganization().name = "newName";
}
