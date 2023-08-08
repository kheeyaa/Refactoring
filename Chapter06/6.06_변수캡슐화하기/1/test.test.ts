import * as example from "./example";
import * as refactoring from "./refactoring";

describe("6.6.1 값 캡슐화 테스트", () => {
  test("리팩터링 전", () => {
    const owner1 = example.defaultOwner;
    expect(owner1.lastName).toBe("파울러");

    const owner2 = example.defaultOwner;
    owner2.lastName = "파슨스";

    // expect(owner1.lastName).toBe("파울러"); // fail
  });

  test("리팩터링 전", () => {
    const owner1 = refactoring.defaultOwner();
    expect(owner1.lastName).toBe("파울러");

    const owner2 = refactoring.defaultOwner();
    owner2.lastName = "파슨스";

    // expect(owner1.lastName).toBe("파울러"); // fail
  });
});
