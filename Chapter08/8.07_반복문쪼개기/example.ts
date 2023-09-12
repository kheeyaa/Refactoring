// 반복문 쪼개기

export const people = [
  { name: "민지", age: 10, salary: 101 },
  { name: "혜인", age: 12, salary: 120 },
  { name: "해린", age: 15, salary: 132 },
  { name: "하니", age: 8, salary: 100 },
  { name: "다니엘", age: 20, salary: 210 },
];

export function foo() {
  let youngest = people[0] ? people[0].age : Infinity;
  let totalSalary = 0;
  for (const p of people) {
    if (p.age < youngest) youngest = p.age;
    totalSalary += p.salary;
  }
  return `최연소 ${youngest}, 총 급여 ${totalSalary}`;
}
