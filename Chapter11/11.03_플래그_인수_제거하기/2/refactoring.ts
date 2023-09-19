// 플래그 인수 제거하기
// isRush 플래그가 복잡하게 로직과 얽혀있을 경우

type Order = {
  basePrice: number;
  discountRate: number;
  discountThreshold: number;
  deliveryState: string;
  placedOn: {
    plusDays: (days: number) => number;
  };
};

export function use() {
  const anOrder = {
    basePrice: 100,
    discountRate: 0.1,
    discountThreshold: 10,
    deliveryState: "MA",
    placedOn: {
      plusDays: (days) => days,
    },
  };
  const deliveryTime = rushDeliveryDate(anOrder); // 래핑함수를 호출한다.
  return deliveryTime;
}

// 아래처럼 래핑 함수를 사용한다.
export function rushDeliveryDate(anOrder) {
  return deliveryDate(anOrder, true);
}

export function regularDeliveryDate(anOrder) {
  return deliveryDate(anOrder, false);
}

// isRush 플래그가 복잡하게 로직과 얽혀있을 경우
export function deliveryDate(anOrder: Order, isRush: boolean) {
  let result;
  let deleveryTime;
  if (anOrder.deliveryState === "MA" || anOrder.deliveryState === "CT") {
    deleveryTime = isRush ? 1 : 2;
  } else if (anOrder.deliveryState === "NY" || anOrder.deliveryState === "NH") {
    deleveryTime = 2;
    if (anOrder.deliveryState === "NH" && !isRush) deleveryTime = 3;
  } else if (isRush) deleveryTime = 3;
  else if (anOrder.deliveryState === "ME") deleveryTime = 3;
  else deleveryTime = 4;

  result = anOrder.placedOn.plusDays(2 + deleveryTime);
  if (isRush) result = result - 1;
  return result;
}
