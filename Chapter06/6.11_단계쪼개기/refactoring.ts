export function priceOrder(product, quantity, shippingMethod) {
  // 중간 데이터 생성
  const priceData = calcaulatePricingData(product, quantity);
  return applyShipping(priceData, shippingMethod);
}

// 첫 번째 단계를 처리하는 함수
export function calcaulatePricingData(product, quantity) {
  const basePrice = product.basePrice * quantity;
  const discount =
    Math.max(quantity - product.discountThreshold, 0) *
    product.basePrice *
    product.discountRate;

  return { basePrice, quantity, discount };
}

// 두 번째 단계를 처리하는 함수
export function applyShipping(
  { basePrice, quantity, discount },
  shippingMethod
) {
  const shippingPerCase =
    basePrice > shippingMethod.discountThreshold
      ? shippingMethod.discountedFee
      : shippingMethod.feePerCase;
  const shippingCost = quantity * shippingPerCase;
  return basePrice - discount + shippingCost;
}
