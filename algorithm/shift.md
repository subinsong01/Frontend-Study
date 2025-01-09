# 💡 알고리즘 풀이를 위한 기본 문법
**reference :https://codingeverybody.kr/**

> 2️⃣ JS - shift() : 배열의 시작 부분에서(shift, 앞 부분으로 빼내듯이 이동시켜) 첫 번째 요소를 제거하는 함수

**📍배열 첫 번째 요소 제거하기** <br />
Array.prototype.shift() 사용법
```js
const arr = [1, 2, 3];

// 배열의 시작 부분에서 첫 번째 요소를 제거한다.
arr.shift();
console.log(arr); // 출력: [2, 3]
```
1. shift() 함수로 배열에서 제거한 첫 번째 요소 값을 반환
2. shift() 함수로 제거할 마지막 요소 값이 없이 배열이 비어 있으면 **undefined**가 반환

**📍반환 값** <br />
shift() 함수는 제거한 요소를 반환한다. 

```js
const fruits = ["apple", "banana", "cherry"];
const removedFruit = fruits.shift();

console.log(removedFruit); // 출력: "apple"
```

**📍delete**<br />
delete 키워드로 배열의 마지막 요소 제거하기
shift() 함수 대신 delete 키워드를 사용하여 배열에서 첫 번째 요소를 제거하면 해당 요소의 값은 배열에서 제거되는 대신 비어 있게 되며, 배열의 길이도 변경되지 않는다<br />

*shift()의 경우 배열의 길이가 변경된다*

```js
const fruits = ["apple", "banana", "cherry"];

// 배열의 마지막 요소를 제거
delete fruits[0];

// 배열 출력
console.log(fruits); // 출력: [비어 있음, "cherry", "banana"]
console.log(fruits[0]); // 출력: undefined
```

**📍반복문과 함께 사용**<br />
```js
const numbers = [3, -2, 8, -5, 7, -1, 6];
const positiveNumbers = [];

while ((number = numbers.shift()) !== undefined) {
    if (number > 0) {
        positiveNumbers[positiveNumbers.length] = number; // 양수만 추출하여 새 배열에 추가
    }
}

console.log(positiveNumbers); // 출력: [3, 8, 7, 6]
```
