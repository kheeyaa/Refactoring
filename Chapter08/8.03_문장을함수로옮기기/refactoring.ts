// 문장을 함수로 옮기기

export type Photo = {
  title: string;
  location: string;
  date: Date;
};

export type Person = {
  name: string;
  photo: Photo;
};

export function renderPerson(outStream, person: Person) {
  const result: any = [];
  result.push(`<p>${person.name}</p>`);
  result.push(emitPhotoData(person.photo));
  return result.join("\n");
}

export function photoDiv(p: Photo) {
  return ["<div>", emitPhotoData(p), "</div>"].join("\n");
}

export function emitPhotoData(aPhoto: Photo) {
  return [
    `<p>제목: ${aPhoto.title}</p>`,
    `<p>위치: ${aPhoto.location}</p>`,
    `<p>날짜: ${aPhoto.date.toDateString()}</p>`,
  ].join("\n");
}
