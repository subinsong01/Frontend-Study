# 📕 Chapter5 : 표준 내장 객체

## **🚀 목차**
```
- 문자
- 숫자
- 수학
- 날짜
- 배열
- 객체
- JSON
```

## 문자
1. `.length()` : 길이
2. `.includes()` : 대상 문자에 주어진 문자가 포함되어 있는지 확인 <br/>

**✨대소문자 구분함✨**
```js
const str = 'Hello World'
console.log(str.includes('hello')); //true
console.log(str.includes('Hello', 0)); //true : 0번째 부터 Hello 문자가 포함되어 있나
``` 
3. `.indexOf()` : 대상 문자에서 주어진 문자와 일치하는 첫 번째 인덱스를 반환(없으면 -1 반환)
```js
const str = 'Hello World'

console.log(str.indexOf('H')); //0
if(str.indexOf('subin') === -1){
  console.log('subin이라는 단어가 없습니다.');
} // -1
```
4. `.padEnd()`: 대상 문자의 길이가 지정된 길이보다 작으면, 주어진 문자를 지정된 길이까지 **끝**에 붙여 **새로운 문자 반환**
```js
const str = '1234567'//string data : 길이 7

console.log(str.padEnd(10, '0');//1234567000
console.log(str)//1234567
```
5. `.padStart()`: 대상 문자의 길이가 지정된 길이보다 작으면, 주어진 문자를 지정된 길이까지 **앞**에 붙여 **새로운 문자 반환**
```js
const str = '1234567'//string data : 길이 7

console.log(str.padStart(10, '0');//0001234567
console.log(str)//1234567
```
6. `.replace()` : 대상 문자에서 패턴과 일치하는 부분을 교체한 새로운 문자를 반환
```js
const str = "Hello Hello?!"

console.log(str.replace('Hello', 'Hi')); //Hi, Hello?!
console.log(str.replace(/Hello/g, 'Hi')); // Hi, Hi?!
console.log(str); //Hello Hello?!
```
7. `slice()`

- 대상 문자의 일부를 추출해 새로운 문자를 반환
- 새로운 문자를 반환
  
```js
const str = "Hello World!"
console.log(slice(0, 5)); //Hello
console.log(slice(6,-1)); //World
console.log(slice(6)); //World!
console.log(str);//Hello World
```

8. `split()` : 대상 문자를 주어진 구분자로 나눠 배열로 반환 <-> `join(''):합쳐줌`
```js
const str = 'Apple', 'Banana', 'Cherry';

console.log(str.split(',')); //['Apple', 'Banana', 'Cherry']
```

9. `trim()`: 앞 뒤 공백 제거

## 숫자

1. `.toFixed()` : 고정 소수점 표기까지 표현하는 `문자`로 반환
```js
const num = 3.141313213123

console.log(num.toFixed(2)); //3.14(문자)
console.log(parseFloat(num.toFixed(2))); //3.14(숫자)
```

2. `.toLocalString()` : 숫자를 현지 언어 형식의 문자로 반환
```js
const num = 100000;
console.log(num.toLocalString()) //1,000,000
```
3. `Number.isInteger()`
   
- 제공되는 숫자가 정수인지 확인
- 정적 메서드
  
```js
const num = 123;
const pi = 3.14;

console.log(Number.isInteger(num)) //true
console.log(Number.isInteger(pi)) //false
```

4. `Number.isNaN()` : 주어진 값이 숫자인지

```js
const num = NaN;
const num = 123;
const str = 'Hello World"
const null = null;

console.log(Number.isNaN(num1)) //true
console.log(Number.isNaN(num2)) //false
console.log(Number.isNaN(str)) //false
console.log(Number.isNaN(null)) //false
```

4. `Number.parseInt()` OR `parseInt()` : 주어진 값을 파싱해서 `정수`로 반환

```js
const str = '3.14123131233' //문자
const num = 3.14312331424 //숫자

console.log(Number.parseInt(str, 10)) //3(10진수)
console.log(Number.parseInt(num, 10)) //3(10진수)
```

5. `Number.parseFloat()` OR `parseFloat()`

- 주어진 값을 파싱해서 `실수`로 반환
- 두번째 인수를 안 넣어줘도 된다 
```js
const str = '3.14123131233' //문자
const num = 3.14123131233 //숫자

console.log(Number.parseFloat(str)) //3.14123131233
console.log(Number.parseFloat(num)) //3.14123131233
```
5. `Math.abs()` : 절대값을 반환
6. `Math.ceil()`: 올림에 정수를 반환
7. `Math.floor()`: 내림에 정수를 반환
```js
console.log(Math.ceil(3.142141343)) //4
console.log(Math.ceil(3.142141343)) //3
```
8. `Math.max()`: 가장 큰 값 반환
9. `Math.min()`: 가장 작은 값 반환
```js
console.log(Math.max(10,3,123,12,1)) //123
console.log(Math.min(-10,3,123,12,1)) //-10
```
10. `Math.pow()`: 거듭제곱
```js
console.log(Math.pow(4,3)) //16
console.log(Math.pow(7,2)) //49
```

11. `Math.round()`: 주어진 숫자를 반올림해 `정수`를 반환
```js
const num1 = 3.1418
const num2 = 3.7123

console.log(Math.round(num1)) // 3
console.log(Math.round(num2)) // 4
```
