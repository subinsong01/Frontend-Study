# 💡 알고리즘 풀이를 위한 기본 문법
**reference :https://www.freecodecamp.org/korean/news/javascript-splice-method/**

> 1️⃣ JS 배열 내장함수 splice()

**기존 요소를 삭제하거나 교체하여 배열의 내용을 변경하며, 제거된 요소가 담긴 별도의 배열을 새로 반환**
```js
// 월과 요일명이 혼합된 배열
let months = ["January", "February", "Monday", "Tuesday"];
```
splice() 메서드를 사용하여 months 메서드에서 요일 이름을 제거하는 동시에 요일만 포함된 새 배열 만들기
```js
// 요일이 담긴 배열 생성하기 
let months = ["January", "February", "Monday", "Tuesday"];
let days = months.splice(2); // 인덱스 2부터 배열 변경

console.log(days); // ["Monday", "Tuesday"]
```
**splice에서는 splice() 메서드를 사용할 때는 start 매개변수에 꼭 값을 전달해야 한다.**<br />
deleteCount라는 두 번째 매개변수에 값을 전달하면 배열에서 제거할 요소의 수를 지정할 수도 있다. 
예를 들어, 하나의 요소만 제거하기 위해 다음과 같이 숫자 1을 두 번째 인수로 전달할 수 있다.

```js
let months = ["January", "February", "Monday", "Tuesday"];
let days = months.splice(2, 1); // 요소 하나만 삭제

console.log(days); // ["Monday"]
console.log(months); // ["January", "February", "Tuesday"]
```

**splice()를 사용해 배열 요소 제거하고 새로 추가하기**
```js
// 필수 매개변수와 선택적 매개변수가 포함된 splice() 문법 
Array.splice(start, deleteCount, newItem, newItem, newItem, ...)

let months = ["January", "February", "Monday", "Tuesday"];
let days = months.splice(2, 2, "March", "April"); // 요소 두 개를 제외하고, 다른 요소를 추가

console.log(days); // ["Monday", "Tuesday"]
console.log(months); // ["January", "February", "March", "April"]
```

**요소를 제거하지 않고 새 배열 요소 추가하기**<br />
숫자 0을 deleteCount 매개변수에 전달하여 기존 요소를 삭제하지 않고도 새 요소를 추가할 수 있다. 

```js
let months = ["January", "February", "Monday", "Tuesday"];
months.splice(2, 0, "March"); // 두 번째 매개변수가 0이므로 기존 요소 모두 유지

console.log(months); 
// ["January", "February", "March", "Monday", "Tuesday"]
```
