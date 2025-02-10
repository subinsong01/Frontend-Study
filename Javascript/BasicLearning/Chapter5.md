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
