// 입력 매개변수의 값을 수정할 때

export function discount(inputValue: number, quantity: number) {
  let result = inputValue;
  if (inputValue > 50) result = result - 2;
  if (quantity > 100) result = result - 1;
  return result;
}
