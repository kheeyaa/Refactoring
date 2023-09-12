// 문장 슬라이드하기

export function foo() {
  const pricingPlan = retrievePricingPlan();
  const order = retreiveOrder();
  const baseCharge = pricingPlan.base;
  let charge;
  const chargePerUnit = pricingPlan.unit;
  const units = order.units;
  let discount;
  charge = baseCharge + units * chargePerUnit;
  let discountableUnits = Math.max(units - pricingPlan.discountThreshold, 0);
  discount = discountableUnits * pricingPlan.discountFactor;
  if (order.isRepeat) discount += 20;
  charge = charge - discount;
  chargeOrder(charge);
  return charge;
}

export function retrievePricingPlan() {
  return {
    base: 1,
    unit: 2,
    discountThreshold: 3,
    discountFactor: 4,
  };
}

export function retreiveOrder() {
  return {
    units: 10,
    isRepeat: true,
  };
}

export function chargeOrder(charge: number) {
  console.log(charge);
}
