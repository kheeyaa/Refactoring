// 입력 매개변수의 값을 수정할 때

export function discount(inputValue: number, quantity: number) {
  if (inputValue > 50) inputValue = inputValue - 2;
  if (quantity > 100) inputValue = inputValue - 1;
  return inputValue;
}
