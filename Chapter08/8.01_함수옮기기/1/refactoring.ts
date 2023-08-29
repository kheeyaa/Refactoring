// 예시: 중첩 함수를 최상위로 옮기기
// calculateDistance 를 최상위로 옮기기

export function totalDistance(points) {
  // 총 거리 계산
  let result = 0;
  for (let i = 1; i < points.length; i++) {
    result += distance(points[i - 1], points[i]);
  }
  return result;
}
export function distance(p1, p2) {
  const EARTH_RADIUS = 3959; // 단위: 마일
  const dLat = radians(p2.lat) - radians(p1.lat);
  const dLon = radians(p2.lon) - radians(p1.lon);
  const a =
    Math.pow(Math.sin(dLat / 2), 2) +
    Math.cos(radians(p2.lat)) *
      Math.cos(radians(p1.lat)) *
      Math.pow(Math.sin(dLon / 2), 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return EARTH_RADIUS * c;
}
export function radians(degrees) {
  // 라디안 값으로 변환
  return (degrees * Math.PI) / 180;
}

export function trackSummary(points) {
  const totalTime = calculateTime();
  const pace = totalTime / 60 / totalDistance(points);
  return {
    time: totalTime,
    distance: totalDistance(points),
    pace: pace,
  };

  // function calculateDistance() {
  //   return top_calculateDistance(points);
  // }

  function calculateTime() {
    // 총 시간 계산
    return 30;
  }
}
