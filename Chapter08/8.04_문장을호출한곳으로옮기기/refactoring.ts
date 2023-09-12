// 문장을 호출한 곳으로 옮기기

type Photo = {
  title: string;
  location: string;
  date: Date;
};

type Person = {
  name: string;
  photo: Photo;
};

type OutStream = {
  stream: string;
  write: (text: string) => void;
};

export function renderPhoto(outStream: OutStream, photo: Photo) {
  console.log("사진 렌더링");
}

export function recentDateCutoff() {
  return new Date("2020-01-01");
}

export function renderPerson(outStream: OutStream, person: Person) {
  outStream.write(`<p>${person.name}</p>`);
  renderPhoto(outStream, person.photo);
  emitPhotoData(outStream, person.photo);
  outStream.write(`<p>위치: ${person.photo.location}</p>`);
}

export function listRecentPhotos(outStream: OutStream, photos: Photo[]) {
  photos
    .filter((p) => p.date > recentDateCutoff())
    .forEach((p) => {
      outStream.write("<div>");
      emitPhotoData(outStream, p);
      outStream.write(`<p>위치: ${p.location}</p>`);
      outStream.write("</div>");
    });
}

export function emitPhotoData(outStream: OutStream, photo: Photo) {
  outStream.write(`<p>제목: ${photo.title}</p>`);
  outStream.write(`<p>날짜: ${photo.date.toDateString()}</p>`);
}
