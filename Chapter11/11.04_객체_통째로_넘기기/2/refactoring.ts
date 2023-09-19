// 객체 통째로 넘기기: 새 함수를 다른 방식으로 만들기

export function use() {
  const aPlan = new HeatingPlan(10, 20);
  const aRoom = {
    daysTempRange: {
      low: 12,
      high: 28,
    },
  };
  const tempRange = aRoom.daysTempRange;
  const isWithinRange = aPlan.withinRange(tempRange);
  if (!isWithinRange) console.log("방 온도가 지정 범위를 벗어났습니다.");
}

export class HeatingPlan {
  private _temperatureRange: { low: number; high: number };

  constructor(low, high) {
    this._temperatureRange = {
      low: low,
      high: high,
    };
  }

  withinRange(tempRange) {
    const low = tempRange.low;
    const high = tempRange.high;
    return (
      low >= this._temperatureRange.low && high <= this._temperatureRange.high
    );
  }
}
