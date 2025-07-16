# API란?

> 클라이언트와 서버 통신

`웹 브라우저(클라이언트) > 서버 > 데이터베이스`

이 과정에서 `API`는 `클라이언트`와 `서버` 통신과정에서 찾아볼 수 있다. 


## JSON 
> 자바스크립트에서 데이터를 문자열 형태로 나타내기 위해 사용된다.

`JSON`은 보통 웹 애플리케이션에서 데이터를 전송할 때 사용되며 `key() - value()`쌍으로 이루어짐

### fetch()
> API 호출 방법

```js
//promise 사용
let response = fetch('주소')
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

console.log(response); //성공객체인 response값이 나온다
```

```js
//async-await 사용

const getData = async() => {
  let response = await fetch('주소');
  let data = await response.json();
  console.log(data);
}

getData();
```

```js
//async-await + error 처리까지

const getData = async() => {
  try {
    let response = await fetch('주소');
    let data = await response.json();
    console.log(data);
  } catch(err){
    console.log(err);
  }
};

getData();
```
여기서 `json`처리를 해주는 이유는 `fetch()`는 `Response`객체를 반환한다 <br />

```js
//fetch()
let response = await fetch('주소');
```
- 이 response는 HTTP 응답 전체를 담고 있는 Response 객체이다
- 여기에 실제 데이터는 아직 본문(body) 형태로 감춰져 있다.
- 우리가 원하는 건 그 본문을 꺼내서 JSON으로 변환하는 것!

그래서 `response.json()`을 호출함

```js
//response.json()
let data = await response.json();
```
- response.json()은 응답 본문을 JSON으로 파싱해주는 함수이다
- await를 붙이는 이유는 이것도 비동기 작업이기 때문!

**전체 흐름 정리**

```js
const getData = async () => {
  let response = await fetch("주소");     // 1. 서버에 요청 보냄
  let data = await response.json();       // 2. 응답 본문을 JSON으로 파싱
  console.log(data);                      // 3. 실제 데이터 확인
};
```

| 코드                      | 설명                                      |
|---------------------------|-------------------------------------------|
| `await fetch(url)`        | HTTP 요청을 보내고 응답(Response 객체)을 받음 |
| `await response.json()`   | 응답 본문을 JSON으로 파싱함 (실제 데이터 얻기) |
