export const reading = {
  customer: "ivan",
  quantity: 10,
  month: 5,
  year: 2017,
};

declare function acquireReading(): {
  customer: string;
  quantity: number;
  month: number;
  year: number;
};
declare function baseRate(month: number, year: number): number;
declare function taxThreshold(year: number): number;

{
  // 클라이언트 1
  const aReading = acquireReading();
  const baseCharge =
    baseRate(aReading.month, aReading.year) * aReading.quantity;
}
{
  // 클라이언트 2
  const aReading = acquireReading();
  const base = baseRate(aReading.month, aReading.year) * aReading.quantity;
  const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));
}
{
  // 클라이언트 3
  const aReading = acquireReading();
  const basicChargeAmount = calculateBaseCharge(aReading);

  function calculateBaseCharge(aReading) {
    return baseRate(aReading.month, aReading.year) * aReading.quantity;
  }
}
