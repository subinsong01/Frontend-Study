# 📌 Math.floor() vs Math.ceil() vs Math.round()

1️⃣ **Math.floor()** : 버림 (내림) <br />
2️⃣ **Math.ceil()** : 올림 <br />
3️⃣ **Math.round(x)** : 반올림 <br />

### 1️⃣ Math.floor(x) → 버림 (내림)
소수점 아래를 버리고 가장 가까운 작은 정수로 변환. 무조건 아래로 내림

```js
console.log(Math.floor(4.9));  // 4  (4.9 → 4)
console.log(Math.floor(4.1));  // 4  (4.1 → 4)
console.log(Math.floor(-2.3)); // -3 (-2.3 → -3, 음수도 내림)
```

### 2️⃣ Math.ceil(x) → 올림
소수점 아래가 있으면 무조건 올림해서 가장 가까운 큰 정수로 변환

```js
console.log(Math.ceil(4.1));  // 5  (4.1 → 5)
console.log(Math.ceil(4.9));  // 5  (4.9 → 5)
console.log(Math.ceil(-2.3)); // -2 (-2.3 → -2, 음수도 올림)
```

### 3️⃣ Math.round(x) → 반올림

- 소수점 첫째 자리에서 반올림
  - .5 이상이면 올림
  - .5 미만이면 버림
 
```js
console.log(Math.round(4.4));  // 4  (4.4 → 4)
console.log(Math.round(4.5));  // 5  (4.5 → 5)
console.log(Math.round(4.9));  // 5  (4.9 → 5)
console.log(Math.round(-2.5)); // -2 (-2.5 → -2, JS에서는 -2로 처리)
```
