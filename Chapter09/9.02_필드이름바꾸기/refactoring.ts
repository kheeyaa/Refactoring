// 필드 이름 바꾸기
export class Organization {
  private _title: string;
  private _country: string;

  constructor(data) {
    this._title = data.title;
    this._country = data.country;
  }

  get title() {
    return this._title;
  }

  set title(aString) {
    this._title = aString;
  }

  get country() {
    return this._country;
  }

  set country(aCountryCode) {
    this._country = aCountryCode;
  }
}

export const organization = new Organization({
  title: "애크미 구스베리",
  country: "GB",
});
