# 💡 알고리즘 풀이를 위한 기본 문법

> JS - some()
- some() 메서드는 배열의 요소 중 하나라도 주어진 조건을 만족하면 true를 반환하고, 모두 불만족하면 false를 반환하는 배열 탐색 메서드

```js
//기본 사용방법 
const numbers = [1, 2, 3, 4, 5];

// 배열에 짝수가 하나라도 있으면 true 반환
const hasEven = numbers.some(num => num % 2 === 0);

console.log(hasEven); // true (2, 4가 있기 때문)

```
1️⃣  some()을 이용한 특정 값 포함 여부 확인

```js
const fruits = ["apple", "banana", "cherry"];

// 배열에 "banana"가 있으면 true 반환
const hasBanana = fruits.some(fruit => fruit === "banana");

console.log(hasBanana); // true
```
2️⃣ some()을 사용한 예외 처리

```js
const want = ["banana", "apple", "rice"];
const discount = ["chicken", "pork", "beef"];

// want 배열에 있는 요소가 discount에 하나라도 포함되면 true
const isAvailable = want.some(item => discount.includes(item));

console.log(isAvailable); // false
```
**✨ discount.includes(item)는 discount 배열이 item을 포함하고 있는지 확인한다.**

**🚀 결론**
- some()은 배열 메서드이며, 조건을 만족하는 요소가 하나라도 있으면 true를 반환
- 특정 값이 배열에 존재하는지 확인할 때 자주 사용
- filter()와 다르게 일치하는 요소를 찾으면 즉시 종료하므로 더 효율적 <br />

`🚀 즉, some()은 빠르게 배열 내 조건을 검사할 때 유용한 메서드이다`
