# 💡 알고리즘 풀이를 위한 기본 문법

> JS - new Map()

- Map은 JavaScript에서 키-값(key-value) 구조로 데이터를 저장하는 객체
- 기본적인 객체 {}와 비슷하지만, Map은 키에 어떤 데이터 타입도 사용할 수 있고, 삽입 순서를 유지하는 특징이 있다.

**사용 방법**

```js
const map = new Map(); // 빈 Map 객체 생성

// 값 추가 (set)
map.set("name", "Alice");
map.set(123, "숫자 키");
map.set(true, "불린 키");

console.log(map); 
// 출력: Map(3) { 'name' => 'Alice', 123 => '숫자 키', true => '불린 키' }

```

📍 **주요 메서드 및 특징**

1️⃣ 값 추가: set(key, value)

```js
const map = new Map();
map.set("age", 25);
map.set("city", "Seoul");
console.log(map); 
// 출력: Map(2) { 'age' => 25, 'city' => 'Seoul' }
```
2️⃣ 값 가져오기: get(key)

```js
console.log(map.get("age")); // 25
console.log(map.get("city")); // "Seoul"
console.log(map.get("unknown")); // undefined
```

3️⃣ 키 존재 여부 확인: has(key)

```js
console.log(map.has("age")); // true
console.log(map.has("gender")); // false
```
4️⃣ 값 삭제: delete(key)

```js
map.delete("age");
console.log(map.has("age")); // false
```

5️⃣ 모든 값 삭제: clear()

```js
map.clear();
console.log(map.size); // 0
```
6️⃣ 크기 확인: size

```js
const map = new Map();
map.set("a", 1);
map.set("b", 2);
console.log(map.size); // 2
```

7️⃣ 반복문 사용 (forEach & for...of)

```js
const map = new Map([
  ["name", "Bob"],
  ["age", 30],
  ["city", "Busan"]
]);

// forEach
map.forEach((value, key) => {
  console.log(key, ":", value);
});

// for...of
for (const [key, value] of map) {
  console.log(key, ":", value);
}

// 출력:
// name : Bob
// age : 30
// city : Busan
```

**📌 배열 요소 개수 세기 (빈도수 계산)**
```js
const arr = ["apple", "banana", "apple", "orange", "banana", "apple"];
const countMap = new Map();

arr.forEach(item => {
  countMap.set(item, (countMap.get(item) || 0) + 1);
});

console.log(countMap); 
// 출력: Map(3) { 'apple' => 3, 'banana' => 2, 'orange' => 1 }
```
