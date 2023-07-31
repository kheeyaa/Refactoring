## 환경 설정

1. pnpm 설정

```
$ pnpm init
```

2. jest를 위한 라이브러리 설치

```
$ pnpm install -D typescript jest @types/jest ts-jest
```

3. 바벨 설치

타입스크립트를 사용하기 위해 바벨을 설치함

```
$ pnpm install -D babel-jest @babel/core @babel/preset-env
```

4. jest.config.js 파일 생성

```js
//jest.config.js
module.exports = {
  preset: "ts-jest", //trypeScript파일은 ts-jest에서 CommonJS구문으로 변환
  testEnvironment: "node", //테스트 환경
  testMatch: ["**/*.spec.[jt]s?(x)", "**/*.test.[jt]s?(x)"], //테스트 파일 위치
};
```

5. package.json 스크립트 변경

```
{
  "scripts": {
    "test": "jest"
  }
}
```

6. 테스트 코드 실행

```
$ pnpm test
```
