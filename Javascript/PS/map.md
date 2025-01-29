# 💡 알고리즘 풀이를 위한 기본 문법

> JS - map()

- `map()`은 배열의 각 요소를 변환해서 새로운 배열을 만드는 메서드
- 원본 배열은 그대로 두고, 변환된 값들로 이루어진 새로운 배열을 만들어줌
  
**🎯 쉽게 이해하는 map()** <br />

1. ✅ 🍎 과일 이름을 대문자로 변환하기

```js
const fruits = ["apple", "banana", "cherry"];
const upperFruits = fruits.map(fruit => fruit.toUpperCase());

console.log(upperFruits); // ["APPLE", "BANANA", "CHERRY"]
```
1. map()은 배열의 각 요소(fruit)를 가져와서 toUpperCase()로 변환한 후 새로운 배열을 반환
2. 기존 배열 fruits는 변경되지 않는다


**📍map()의 기본 사용법** <br />

```js
1. array.map(요소 => 새로운 값);
2. array.map((요소, 인덱스, 배열) => 새로운 값);
```
`요소`: 배열에서 하나씩 꺼낸 값 <br />
`인덱스` (선택): 현재 요소의 위치 <br />
`배열` (선택): 원본 배열 전체

------
**🎯 예제** <br />

1️⃣ 숫자를 제곱하기

```js
const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(num => num * num);

console.log(squared); // [1, 4, 9, 16, 25]
```

2️⃣ 배열 요소를 문자열로 변환하기

```js
const numbers = [1, 2, 3];
const strings = numbers.map(num => `숫자: ${num}`);

console.log(strings); 
// ["숫자: 1", "숫자: 2", "숫자: 3"]
```

3️⃣ 객체 배열 변환하기

```js
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 }
];

const names = users.map(user => user.name);

console.log(names); // ["Alice", "Bob"]
```

4️⃣ map()으로 가위바위보 변환하기

```js
function solution(rsp) {
    return rsp.split('').map(num => num === '2' ? '0' : num === '0' ? '5' : '2').join('');
}

console.log(solution("205")); // "052"
```

**✅ map()과 forEach() 비교 예시**

```js
const numbers = [1, 2, 3, 4, 5];

// map 사용 (새로운 배열 반환)
const squared = numbers.map(num => num * num);
console.log(squared); // [1, 4, 9, 16, 25]

// forEach 사용 (단순 반복, 반환값 없음)
numbers.forEach(num => console.log(num * num));

//forEach()는 반환값이 undefined 
```
🚀 map()은 새로운 배열이 필요할 때 사용! <br />
🚀 forEach()는 단순한 작업(출력, 로컬스토리지 저장 등)에 사용!
