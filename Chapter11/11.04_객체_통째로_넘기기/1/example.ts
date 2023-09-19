// 객체 통째로 넘기기

export function use() {
  const aPlan = new HeatingPlan(10, 20);
  const aRoom = {
    daysTempRange: {
      low: 12,
      high: 28,
    },
  };
  const low = aRoom.daysTempRange.low;
  const high = aRoom.daysTempRange.high;
  if (!aPlan.withinRange(low, high))
    console.log("방 온도가 지정 범위를 벗어났습니다.");
}

export class HeatingPlan {
  private _temperatureRange: { low: number; high: number };

  constructor(low, high) {
    this._temperatureRange = {
      low: low,
      high: high,
    };
  }

  withinRange(bottom, top) {
    return (
      bottom >= this._temperatureRange.low && top <= this._temperatureRange.high
    );
  }
}
