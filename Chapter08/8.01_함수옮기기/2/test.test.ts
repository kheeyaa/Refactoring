import * as example from "./example";
import * as refactoring from "./refactoring";

describe("8.1.2 다른 클래스로 옮기기", () => {
  test("리팩터링 전", () => {
    const { Account } = example;

    const account1 = new Account(3000, true);
    const account2 = new Account(3000);

    expect(account1.bankCharge).toBe(2558.5499999999997);
    expect(account2.bankCharge).toBe(5254.5);
  });

  test("리팩터링 후", () => {
    const { Account, AccountType } = refactoring;

    const account1 = new Account(3000, new AccountType(true));
    const account2 = new Account(3000);

    expect(account1.bankCharge).toBe(2558.5499999999997);
    expect(account2.bankCharge).toBe(5254.5);
  });
});
