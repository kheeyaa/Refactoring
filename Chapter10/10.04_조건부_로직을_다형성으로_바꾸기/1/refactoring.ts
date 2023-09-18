// 조건부 로직을 다형성으로 바꾸기

type BirdType = {
  name: "유럽 제비" | "아프리카 제비" | "노르웨이 파랑 앵무";
  type: "유럽 제비" | "아프리카 제비" | "노르웨이 파랑 앵무";
  numberOfCoconuts: number;
  voltage: number;
  isNailed: boolean;
};

export function plumages(birds: BirdType[]) {
  return new Map(
    birds.map((b) => createBird(b)).map((b) => [b.name, b.plumage])
  );
}

export function speeds(birds: BirdType[]) {
  return new Map(
    birds.map((b) => createBird(b)).map((b) => [b.name, b.plumage])
  );
}

export function createBird(bird: BirdType) {
  switch (bird.type) {
    case "유럽 제비":
      return new EuropeanSwallow(bird);
    case "아프리카 제비":
      return new AfricanSwallow(bird);
    case "노르웨이 파랑 앵무":
      return new NorwegianBlueParrot(bird);
    default:
      return new Bird(bird);
  }
}

export class Bird {
  name: BirdType["name"];
  type: BirdType["type"];
  numberOfCoconuts: BirdType["numberOfCoconuts"];
  voltage: BirdType["voltage"];
  isNailed: BirdType["isNailed"];

  constructor(birdObject: BirdType) {
    Object.assign(this, birdObject);
  }

  get plumage(): string {
    return "알 수 없다";
  }

  get airSpeedVelocity(): number | null {
    return null;
  }
}

class EuropeanSwallow extends Bird {
  get plumage() {
    return "보통이다";
  }

  get airSpeedVelocity() {
    return 35;
  }
}

class AfricanSwallow extends Bird {
  get plumage() {
    return this.numberOfCoconuts > 2 ? "지쳤다" : "보통이다";
  }

  get airSpeedVelocity() {
    return 40 - 2 * this.numberOfCoconuts;
  }
}

class NorwegianBlueParrot extends Bird {
  get plumage() {
    return this.voltage > 100 ? "그을렸다" : "예쁘다";
  }

  get airSpeedVelocity() {
    return this.isNailed ? 0 : 10 + this.voltage / 10;
  }
}
