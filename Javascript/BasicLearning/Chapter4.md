# 📕 Chapter 4

## **🚀 목차**
```
- prototype
- ES6 Class 기본 문법
- Getter, Setter
- 정적 메소드
- 상속과 instanceof
- instanceof와 constructor
```

## prototype

- `배열 데이터에서 사용할 수 있는 속성이나 메서드는 보통 prototype이랑 연결되어 있다`

```js
const fruits = new Array('Apple', 'Banana', 'Cherry') //new Array = 생성자 함수

console.log(fruits)
console.log(fruits.length) //3
console.log(fruits.includes('Banana')) //true

Array.prototype.subin = function(){
  console.log(this)
}

frutis.subin() //['Apple', 'Banana', 'Cherry']

const arr = []
arr.subin //출력:[]
```

```js
const subin = {
  firstName = 'subin',
  lastName = 'song',
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`
  }
}

const neo = {
  firstName = 'neo',
  lastName = 'kim'
  }

console.log(subin.getFullName()) //subin song
console.log(subin.getFullName.call(neo)) //neo kim
```
✨ **prototype**
```js
function User(first, last){
  this.firstName = first
  this.lastName = last
}

User.prototype.getFullName = function(){
  return `${this.firstName} ${this.lastName}`
}

const subin = new User('subin','song') //new = 생성자 함수라함

console.log(subin.getFullName())//subinsong
console.log(subin)
```
`출력`
```html
firstName: 'subin'
lastName: 'song'
```

## ES6 Class 기본 문법

```js
class User {
  constuctor(first, last){
    this.firstName = first
    this.lastName = last
  }
  getFullName(){
    return `${this.firstName} ${this.lastName}`
  }
}
const subin = new User('subin','song')
console.log(subin.getFullName())//subinsong
```

## ES6 Class 기본 문법[getter, setter]

- getter : 값을 얻는 용도
- setter : 값을 지정하는 용도

```js
class User {
  constructor(first, last) {
    this.firstName = first
    this.lastName = last
  }
get fullName(){
  console.log('Getting full name');
  return `${this.firstName} ${this.lastName}
}//값 조회
set fullName(value){
    console.log(value);
    [this.firstName, this.lastName] = value.split(' ')
  }//Neo pizza
}//값 할당
const subin = new User('subin', 'song')
console.log(subin.getFullName()) //subin song
subin.firstName = 'Neo'
console.log(subin.getFullName()) //Neo song

subin.fullName = 'Neo pizza'
console.log(subin)
```
## 정적 메소드

`Array.isArray()` : `// () 안에 값을 넣어서 boolean 값을 출력해낸다`

```js
class User{
  constructor(first, last) {
    this.firstName = first
    this.lastName = last
  }
getFullName() {
  return `${this.firstName} ${this.lastName}`
  }
static isUser(user){
  if(user.firstName && user.lastName){
    return true //firstName이랑 lastName 둘 다 있는 경우 true 
  }
  return false
  }
}

const subin = new User('subin', 'song')
const neo = new User('neo', 'pizza')

console.log(subin.getFullName()) // subin song
console.log(neo.getFullName()) // neo pizza
console.log(User.isUser()) //true
console.log(subin.isUser()) //error

console.log(User.isUser(neo)) //true
```
## 상속 instanceof

## instanceof와 constructor
