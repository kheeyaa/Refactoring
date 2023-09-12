import * as example from "./example";
import * as refactoring from "./refactoring";

const data = `office, country, telephone
Chicago, USA, +1 312 373 1000
Beijing, China, +86 4008 900 505
Bangalore, India, +91 80 4064 9570
Porto Alegre, Brazil, +55 51 3079 3550
Chennai, India, +91 44 660 44766
`;
const expectation = [
  { city: "Bangalore", phone: "+91 80 4064 9570" },
  { city: "Chennai", phone: "+91 44 660 44766" },
];

describe("8.8 반복문을 파이프라인으로 바꾸기", () => {
  test("리팩터링 전", () => {
    const { acquireData } = example;

    expect(acquireData(data)).toEqual(expectation);
  });

  test("리팩터링 후", () => {
    const { acquireData } = refactoring;

    expect(acquireData(data)).toEqual(expectation);
  });
});
