# 💡 알고리즘 풀이를 위한 기본 문법

> JS - filter

- 필터처럼 원하는 것만 골라내는 도구<br/>
- 배열에서만 사용이 가능

```js
function solution(my_string, letter) {
    return my_string.split('').filter(char => char !== letter).join('');
}
```
**간단한 예시**

```js
const fruits = ["사과", "바나나", "오렌지", "사과", "배"];
```
- 만약에 사과만 필요한 경우
```js
const apples = fruits.filter(fruit => fruit === "사과");
console.log(apples);  // ["사과", "사과"]
```

📍 **작동 방법**

1. fruits.filter()는 fruits라는 과일 목록을 하나씩 살펴보고, fruit === "사과"라고 묻습니다. <br />
2. 만약 사과라면 그 사과를 골라내고, 아니면 다음 과일로 넘어갑니다. <br />
3. 그래서 최종적으로 사과만 모은 새로운 목록을 만들어요

📍 **배열에서 사용하는 경우**

```js
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers); // [2, 4]
```

📍 **📝 문자열에서 filter()를 사용하려면?**

- 문자열은 직접 filter()를 사용할 수 없지만, split('')을 이용해 배열로 바꾸면 가능

```js
const myString = "banana";
const filteredString = myString.split('').filter(char => char !== 'a').join('');

console.log(filteredString); // "bnn"
```

`🎯 결론`

`1.✅ filter()는 배열에서만 사용 가능`<br />
`2.✅ 문자열에서 사용하려면 먼저 split('')로 배열로 변환`<br />
`3.❌ 숫자나 일반 객체에서는 사용 불가능`

