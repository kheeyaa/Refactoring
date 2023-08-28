export class Person {
  private _name: any;
  private _courses: Course[];
  constructor(name) {
    this._name = name;
    this._courses = [];
  }

  get name() {
    return this._name;
  }
  get courses() {
    return this._courses;
  }
  set courses(aList) {
    this._courses = aList;
  }
}

export class Course {
  private _name: any;
  private _isAdvanced: any;

  constructor(name, isAdvanced) {
    this._name = name;
    this._isAdvanced = isAdvanced;
  }

  get name() {
    return this._name;
  }
  get isAdvanced() {
    return this._isAdvanced;
  }
}

declare function readBasicCourseNames(filename: string): string[];
declare const filename: string;

function use() {
  const aPerson = new Person("kim");
  const numAdvancedCourses = aPerson.courses.filter((c) => c.isAdvanced).length;

  for (const name of readBasicCourseNames(filename)) {
    aPerson.courses.push(new Course(name, false));
  }
}
