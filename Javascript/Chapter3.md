# 📕 Chapter 3. 함수 

## **🚀 목차**
```
- 호이스팅
- 매개변수 패턴(객체 구조 분해, 배열 구조 분해, 나머지 매개변수)
- 화살표 함수 
- 콜백
- this
```

## 호이스팅
- 함수선언문에서만 발생한다
- 함수의 선언부가 코드의 유효한 범위 안에서 제일 꼭대기로 끌어올려져서 작동하는 현상을 의미한다

```js
hello()

function hello(){
  console.log('Hello~');
} //함수선언문(O)

const hello = functio(){
  console.log('Hello~');
} //함수표현(X)
```
```
출력 : Hello~
```

## 매개변수 패턴


📍 **객체 구조 분해 할당**
```js
const user = {
  name: 'subin',
  age: 14
}

function getName({name}){
  return name
}

function getEmail({email='이메일이 없습니다'}){
  return email
}

console.log(getName(user))
console.log(getEmail(user))
```
```
출력
subin
이메일이 없습니다
```

📍 **배열 구조 분해 할당**
```js
const fruits = ['apple', 'banana', 'cherry']
const numbers = [1,2,3,4,5,6,7]

function getSecondItems([,b]){
  return b
}
console.log(getSecondItems(fruits))
console.log(getSecondItems(numbers))
```
```
출력
banana
2
```

📍 **나머지 매개변수**
```js
function sum(...rest){
  console.log(rest)
  return rest.reduce(function (acc, cur){
    return acc + cur
  }, 0)
}

console.log(sum(1,2)) //3
console.log(sum(1,2,3,4)) //10
console.log(sum(1,2,3,4,5,6,7,8,9,10))//55
```
```
출력
[1,2]
3
[1,2,3,4]
10
[1,2,3,4,5,6,7,8,9,10]
55
```
## 화살표 함수

```js
const a = () => {}
const b = x => {}
const c = (a,b) => {}
const d = x => { return x*x }
const e = x => x * x
const f = x => {
  console.log(x*x)
  return x * x
}

const g = () => { return {a: 1} }
const h = () => ({a:1})
const i = () => { return [1,2,3] }
const j = () => [1,2,3]
```
```
출력 : 3
```
## 콜백
- 함수가 실행될 때 인수로 들어가는 또 하나의 함수를 의미
- 다른 함수가 호출될 때, 그 함수 호출에 인수로 사용되는 함수

```js
const a = callback => {
  console.log('A');
  callback()
}
const b = () => {
  console.log('B');
}

a(b)
```
```
출력
A
B
```
```js
const sum = (a,b) => {
  setTimeout(() => {}, 1000)
}
console.log(sum(1,2))
```
```
출력 : 3
```
```js
const sum = (a,b,c) => {
  setTimeout(() => {
    c(a+b)
  }, 1000)
}

sum(1,2,value => {
  console.log(value)
})
sum(3,7,value => {
  console.log(value)
})
```
```
출력
3
10
```
## 재귀 
- 자신을 자신의 영역 내부에서 다시 호출하는 것을 의미
- 무한동작한다 

## this
- 일반 함수의 this는 호출 위치에서 정의
- 화살표 함수의 this는 자신이 선언된 함수 범위에서 정의

```js
const user = {
  firstName = 'subin',
  lastName = 'song',
  age = 13,
  getFullName : function(){
    return `${this.firstName} ${this.lastName}` //this = user
  }
}

console.log(user.getFullName())
```
```
출력 : subin song
```
**객체 데이터에서 > 멤버** : 속성과 method를 다 합쳐서 부름 
```js
function user() {
  this.firstName = 'haely'
  this.lastName = 'song'

  return {
    firstName = 'subin',
    lastName = 'song',
    age = 13, //firstName, lastName, age = property(속성이라고 한다) 
    getFullName : function(){
      return `${this.firstName} ${this.lastName}` //this = user
    } //getFullName은 method라고 한다
  }
}
const u = user()
console.log(u.getFullName())
```
