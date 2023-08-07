import { defaultOwner } from "./refactoring1-2";

test("값 캡슐화 테스트 1-2", () => {
  const owner1 = defaultOwner();
  expect(owner1.lastName).toBe("파울러");

  const owner2 = defaultOwner();
  owner2.lastName = "파슨스";

  expect(owner1.lastName).toBe("파울러"); // pass
});
