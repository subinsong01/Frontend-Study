# 💡 알고리즘 풀이를 위한 기본 문법

> JS - replace()

**특정 문자 위치 찾기**
- 문자열을 변경할 때 사용하는 메서드
- 이 메서드는 주어진 문자열에서 특정 부분을 찾아 다른 문자열로 바꿔주는 역할을 한다.
- replace()는 원본 문자열을 변경하지 않고 새로운 문자열을 반환함

```js
//사용방법 
str.replace(searchValue, newValue);
```
**1. 문자열로 바꾸기**
- 문자열을 사용하여 일치하는 부분을 찾고 교체

```js
let str = "Hello, world!";
let newStr = str.replace("world", "JavaScript");

console.log(newStr);  // "Hello, JavaScript!"
```
📍 주의: replace()는 기본적으로 첫 번째 일치하는 부분만 바꾼다

**2. 정규 표현식(Regex) 사용하기**
- replace()는 정규 표현식을 사용할 수 있다.
- 정규 표현식을 사용하면 더 강력한 검색과 교체 작업을 할 수 있다.

1️⃣ 예시: 모든 일치 항목 바꾸기 (g 플래그 사용)

```js
let str = "I love cats. Cats are great.";
let newStr = str.replace(/cats/gi, "dogs");

console.log(newStr);  // "I love dogs. Dogs are great."
```
- /cats/gi: 정규 표현식에서 g는 global 플래그로, 모든 "cats"를 찾아서 바꾼다.
- replace()는 모든 "cats"를 "dogs"로 교체한 새로운 문자열을 반환한다.

2️⃣ 예시: 특정 패턴 바꾸기

```js
let str = "There are 2 apples and 5 oranges.";
let newStr = str.replace(/\d+/g, (match) => {
  return parseInt(match) * 2;
});

console.log(newStr);  // "There are 4 apples and 10 oranges."
```

3️⃣ 예시: 함수로 변환하기
- replace()의 두 번째 인수는 문자열뿐만 아니라 함수도 될 수 있다 
- 이 함수는 일치 항목을 바꾸는 로직을 동적으로 처리할 수 있게 해준다

```js
let str = "I have 1 apple, 2 bananas, and 3 oranges.";
let newStr = str.replace(/\d+/g, (match) => {
  return (parseInt(match) * 10).toString();
});

console.log(newStr);  // "I have 10 apple, 20 bananas, and 30 oranges."
```
📍 **match는 \d+에 일치한 숫자이다.** <br />

4️⃣ 예시: 첫 번째 일치만 변경하기
- 기본적으로 replace()는 첫 번째로 일치하는 항목만 바꾼다.

```js
let str = "hello hello hello";
let newStr = str.replace("hello", "hi");

console.log(newStr);  // "hi hello hello"
```


**🚀 요약**
- replace()는 문자열에서 특정 부분을 찾아 다른 값으로 변경하는 메서드
- 문자열 또는 정규 표현식을 사용하여 교체할 부분을 찾을 수 있다
- 기본적으로 첫 번째 일치 항목만 교체하고, 모든 항목을 교체하려면 g 플래그를 사용한다.
- 교체할 값으로 문자열뿐만 아니라 함수를 사용할 수도 있다

