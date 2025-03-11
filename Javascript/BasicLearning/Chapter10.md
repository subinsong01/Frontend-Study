# 📕 Chapter10. 기타 Web APIs

## **🚀 목차**

```
- Console
- Cookie, Storage
- Location
- History1
- History2
```

## 📂 Console

1. 콘솔에 메시지나 객체를 출력한다.
  
🌱 `.log() : 일반 메시지` <br />
🌱 `.warn() : 경고 메시지`<br />
🌱 `.error() : 에러 메시지`<br />
🌱 `.dir() : 속성을 볼 수 있는 객체를 출력` <br />

2. 콘솔에 메소드 호출의 누적 횟수를 출력하거나 초기화한다.
  
🌱 `.count() : 일반 메시지` <br />
🌱 `.countReset() : 일반 메시지` <br />

<img width="714" alt="스크린샷 2025-03-04 오후 11 39 10" src="https://github.com/user-attachments/assets/aca62dae-17e6-4c93-8584-32cad43503e3" />

```js
//count()
console.count() // default: 1로 출력된다. 
```
3. 콘솔에 타이머가 시작해서 종료되기까지의 시간을 출력한다

🌱 `.console.time('이름') : 일반 메시지` <br />
🌱 `.console.timeEnd('이름') : 일반 메시지` <br />

```js
console.time('반복문')

for(let i = 0; i < 10000; i += 1) {
  console.log(i)
}

console.timeEnd('반복문');
```
4. 메소드 호출 스택을 추적해 출력한다.

🌱 `.console.trace()`

```js
function a() {
  function b() {
    function c() {
      console.log('Log!');
      console.log('Trace!');
      } //c 함수 내부에서 trace 실행 
      c()
    }
  b()
  }
a()
```

5. 콘솔에 기록된 메시지를 모두 삭제한다

🌱 `.console.clear()`

## 📂 Cookie
- 도메인 단위로 저장
- 표준안 기준, 사이트당 최대 20개 4KB로 제한
- 누적이 가능
- ex) 사이트 배너의 하루동안 보지 않기같은 것을 구현할 때 사용 

🌱 `domain : 유효 도메인 설정` <br />
🌱 `path : 유효 경로 설정`<br />
🌱 `expires: 만료 날짜 설정`<br />
🌱 `max-age: 만료 타이머 설정(초 단위로 가능)` <br />

```js
//cookie
console.log(document.cookie)
```
```js
//쿠기에 a = 1이 저장된다. 
document.cookie = 'a = 1'
console.log(document.cookie)
```
## 📂 Storage

- 도메인 단위로 저장
- 5MB 제한
- 세션 혹은 영구 저장 가능
- sessionStorage : 브라우저 세션이 유지되는 동안에만 데이터 저장
- localStorage : 따로 제거하지 않으면 영구적으로 데이터 저장
  
🌱 `.getItem() : 데이터 조회` <br />
🌱 `.setItem() : 데이터 추가`<br />
🌱 `.removeItem: 데이터 제거`<br />
🌱 `.clear(): 스토리지 초기화` <br />

## 📂 Location

🌱 `.href: 전체 URL 주소` <br />
🌱 `.hash: 해시 정보(페이지의 ID)` <br />
🌱 `.assign(주소): 해당 주소로 페이지 이동` <br />
🌱 `.replace(주소): 해당 주소로 페이지 이동, 현대 페이지의 히스토리를 제거한다는 점에서 assign이랑 다름` <br />

- `history` 제거는 뒤로 가기를 방지해줌
  
🌱 `.reload(주소): 페이지 새로고침, `true`인수는 `강력` 새로고침 ` <br />
  
## 📂 History



