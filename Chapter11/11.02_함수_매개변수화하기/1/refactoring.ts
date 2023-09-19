// 함수 매개변수화하기

type Person = {
  name: string;
  salary: number;
};

export function raise(aPerson: Person, factor: number) {
  aPerson.salary = Math.floor(aPerson.salary * (1 + factor));
}
