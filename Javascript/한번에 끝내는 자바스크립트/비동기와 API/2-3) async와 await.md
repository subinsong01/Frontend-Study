# async - await
> 비동기를 처리하는 방법 중 하나 (가독성이 좋아서 가장 많이 사용된다)

- 에러처리는 `try`랑 `catch`를 사용해주면 된다

```js
const delay = (ms) => {
  return new Promise((resolve) => {
      setTimeout(() => {
        resolve('3초가 지남');
      }, ms);
  });
};

const start = async() => {
  let result = await delay(3000); //await = then역할
  console.log(result);
};

start();
```

**에러 처리**

```js

const delay = (ms) => {
  return new Promise((resolve) => {
      setTimeout(() => {
        resolve('3초가 지남');
      }, ms);
  });
};

const start = async() => {
  try{
    let result = await delay(3000);
    console.log(result);
  }
  catch(error){
    console.log(error)
  }
};

start();
```

| 특징                       | 설명                                                    |
|----------------------------|---------------------------------------------------------|
| `async` 함수               | 항상 Promise 반환                                       |
| `await`                    | await는 Promise가 처리(해결)될 때까지 기다리는 키워드                        |
| 동기처럼 작성 가능         | 가독성 높고, 유지보수 쉬움                              |
| 에러는 `try/catch`로 처리  | 에러 핸들링이 깔끔함                                    |
| async 함수 내에서만 사용 가능 | 전역이나 일반 함수에서 쓰면 에러 발생                     |

# Promise.all()

> Promise.all()은 여러 Promise를 병렬로 실행하고 전부 fulfilled 상태가 될 때까지 기다렸다가 결과를 배열로 반환

- **하나라도 실패하면 전체 실패**
  
```js
Promise.all([promise1, promise2, promise3])
  .then((results) => {
    // 모든 Promise가 성공한 경우
    console.log(results); // [result1, result2, result3]
  })
  .catch((error) => {
    // 하나라도 실패하면 여기로
    console.error(error);
  });
```
**예시**

```js
function fetchData1() {
  return new Promise((resolve) => setTimeout(() => resolve("🍎"), 1000));
}

function fetchData2() {
  return new Promise((resolve) => setTimeout(() => resolve("🍌"), 2000));
}

function fetchData3() {
  return new Promise((resolve) => setTimeout(() => resolve("🍇"), 1500));
}

Promise.all([fetchData1(), fetchData2(), fetchData3()])
  .then((results) => {
    console.log(results); // ["🍎", "🍌", "🍇"]
  });
```
```
약 2초 후에 ["🍎", "🍌", "🍇"]가 한꺼번에 출력
```

### async/await와 함께 사용

```js
async function getFruits() {
  try {
    const results = await Promise.all([fetchData1(), fetchData2()]);
    console.log(results); // ["🍎", "🍌"]
  } catch (error) {
    console.error("에러 발생:", error);
  }
}
```

| 특징                          | 설명                                                 |
|-------------------------------|------------------------------------------------------|
| 병렬 실행                     | 여러 비동기 작업을 동시에 처리                       |
| 모든 작업 성공 시 결과 반환   | 모든 Promise가 `fulfilled` 상태가 되면 결과 배열 반환 |
| 하나라도 실패 시 전체 실패    | 하나라도 `reject` 되면 `catch()`로 이동              |
| 가장 오래 걸리는 작업만큼 기다림 | 실행 시간은 가장 느린 Promise 기준                   |

# Promise.allSettled()

- 모든 Promise가 완료될 때까지 기다림 (fulfilled든 rejected든)
- 각 Promise의 상태와 값을 반환함
- 사용하는 경우 : **에러가 있어도 무시하고 전체 결과가 필요할 때**
- ex) 사용자 업로드 파일 여러 개 처리 → 일부 실패해도 나머지는 보여줘야 할 때



```js
const p1 = Promise.resolve("성공");
const p2 = Promise.reject("실패");
const p3 = Promise.resolve("또 성공");

Promise.allSettled([p1, p2, p3]).then((results) => {
  console.log(results);
});
```
**결과**
```
[
  { status: "fulfilled", value: "성공" },
  { status: "rejected", reason: "실패" },
  { status: "fulfilled", value: "또 성공" }
]
```

# Promise.race()

- 가장 먼저 끝난 하나의 Promise 결과만 반환
- 나머지는 무시됨
- 사용하는 경우 : **타임아웃 처리, 속도가 중요할 때**
- ex) 여러 서버 중 먼저 응답 오는 서버를 사용하고 싶을 때
- ex) 3초 안에 응답 없으면 에러로 처리하고 싶을 때

```js
const slow = new Promise((resolve) => setTimeout(() => resolve("느림"), 3000));
const fast = new Promise((resolve) => setTimeout(() => resolve("빠름"), 1000));

Promise.race([slow, fast]).then((result) => {
  console.log(result); // "빠름"
});
```
```js
const api = fetch("https://example.com");
const timeout = new Promise((_, reject) =>
  setTimeout(() => reject("타임아웃!"), 3000)
);

Promise.race([api, timeout])
  .then(res => console.log("성공!", res))
  .catch(err => console.error(err)); // 타임아웃! (3초 초과 시)
```

## 정리

| 메서드               | 설명                                                        | 실패 시 동작            | 결과 형태                        |
|----------------------|-------------------------------------------------------------|--------------------------|----------------------------------|
| `Promise.all()`      | 모두 성공해야 `.then` 실행                                   | 하나라도 실패 → `.catch` | 성공 결과 배열                    |
| `Promise.allSettled()` | 모두 끝나면 상태/결과를 모두 반환                           | 실패해도 `.then` 실행    | 상태 + 값 or 에러 포함한 배열     |
| `Promise.race()`     | 가장 먼저 끝난 하나만 반환                                    | 가장 먼저 실패해도 `.catch` | 단일 값 (가장 먼저 끝난 하나)     |
