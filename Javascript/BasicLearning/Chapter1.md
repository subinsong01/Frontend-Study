# 📕 Chapter1 

## **🚀 목차**
- String & Number
- Boolean & Null & Undefined
- const, let
- Array
- Object

## String & Number 

**소수점 잘라내기 method** : `toFixed()`

✨ `toFixed`는 숫자 데이터를 문자 데이터로 바꾸는 특징이 있다 

**type을 숫자로 만들어주는 method** : `Number()`

```js
const a = 0.1
const b = 0.2

console.log(Number((a+b).toFixed(1)))
```
## Boolean

```js
const a = true
const b = false

if(a){
  console.log('Hello')
}
```
```
출력 : Hello
```
## Null(명시적으로 값이 없다!) 

```js
let age = null
console.log(age)

setTimeout(function(){
  age = 85
  console.log(age)
}, 1000) //1000 = 1s
```
```
출력 : null , (1초 뒤에) 85
```

## undefined (암시적으로 값이 없다!) 

```js
let age;
console.log(age)

setTimeout(function(){
  age = 85
  console.log(age)
}, 1000) //1000 = 1s
```
```
출력 : undefined , (1초 뒤에) 85
```

##  const, let

- let :재할당 가능
- const : 재할당 불가능

## 배열(Array)

**1️⃣ 생성자 방식**
```js
const fruits = new Array('Apple', 'Banana', 'Kiwi') //new Array() = 생성자 함수 
console.log(fruits[0])
```
```
출력 : Apple
```
**2️⃣ 리터럴 방식**
```js
const fruits = ['Apple', 'Banana', 'Kiwi'] // 리터럴방식
console.log(fruits[1]) // > 첫 번째 아이템을 인덱싱 했다고 표현(인덱싱 : 위치 알아내는 것) 
```
```
출력 : Banana
```

✨ `마지막 아이템 조회 방법 : [ fruits.length - 1 ]`

## 객체(Object) 
### key : value 형태로 만들어짐
- key : 고유하고, 순서가 없는 것이 특징

**1️⃣ 생성자함수 방식으로 객체 데이터 만들기**
```js
const user = new Object()
user.name = 'subin'
user.age = 85

console.log(user)
```
```
출력
age : 85
name : subin
```

**2️⃣ 함수 내부에서 this를 사용하여 객체 데이터 만들기**

```js
function User(){
  this.name = 'subin',
  this.age = 85
}
const user = new User()

console.log(user)
```

**3️⃣ 기호를 사용해서 객체 데이터 만들기 (권장)**

```js
const user = {
  name: 'subin',
  age: 85
}

console.log(user)
```
```js
const user = {
  name: 'subin',
  age: 85
}
const key = 'name'
console.log(user[key]) //대괄호 표기법
```
```
출력 : subin
```

## 참조형(Function)

```js
function hello(){
  console.log('hello')
}

hello()
```
```
출력 : hello
```
