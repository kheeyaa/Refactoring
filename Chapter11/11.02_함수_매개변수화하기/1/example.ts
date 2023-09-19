// 함수 매개변수화하기

type Person = {
  name: string;
  salary: number;
};

export function tenPercentRaise(aPerson: Person) {
  aPerson.salary = Math.floor(aPerson.salary * 1.1);
}
export function fivePercentRaise(aPerson) {
  aPerson.salary = Math.floor(aPerson.salary * 1.05);
}
