export function rating(aDriver) {
  return aDriver.numberOfLateDeliveries > 5 ? 2 : 1;
}

export function reportLines(aCustomer) {
  const lines: any = [];

  // 한 문장씩 나눠서 인라인한다.
  lines.push(["name", aCustomer.name]);
  lines.push(["location", aCustomer.location]);

  return lines;
}
