// 예시: 조건문이 있을 때의 슬라이드

type Resource = {
  name: string;
  value: number;
};

const availableResources: Resource[] = [
  {
    name: "resource1",
    value: 234,
  },
];

export function createResource() {
  return {
    name: "resource2",
    value: 123,
  };
}

export const allocatedResources: Resource[] = [];

export function foo() {
  let result: Resource;
  if (availableResources.length === 0) {
    result = createResource();
    allocatedResources.push(result);
  } else {
    result = availableResources.pop()!;
    allocatedResources.push(result);
  }
  return result;
}
