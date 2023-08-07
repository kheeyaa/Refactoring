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

function enrichReading(original) {
  const result = structuredClone(original);
  result.baseCharge = calculateBaseCharge(result);
  result.taxableCharge = Math.max(
    0,
    result.baseCharge - taxThreshold(result.year)
  );
  return result;

  function calculateBaseCharge(aReading) {
    return baseRate(aReading.month, aReading.year) * aReading.quantity;
  }
}

{
  // 클라이언트 1
  const rawReading = acquireReading();
  const aReading = enrichReading(rawReading);
  const baseCharge = aReading.baseCharge;
}
{
  // 클라이언트 2
  const rawReading = acquireReading();
  const aReading = enrichReading(rawReading);
  const taxableCharge = aReading.taxableCharge;
}
{
  // 클라이언트 3
  const rawReading = acquireReading();
  const aReading = enrichReading(rawReading);
  const basicChargeAmount = aReading.baseCharge;
}
