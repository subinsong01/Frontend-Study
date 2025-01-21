# 📕 Chapter 2

## **🚀 목차**
```
- 전개연산자
- 구조분해할당
- for 반복문
- while 반복문 
```

## 전개연산자 
- 대괄호 날려줌
- 배열, 객체 데이터에서 사용이 가능하다
  
```js
const a = [1,2,3]

console.log(a)
```
```
출력 : 1 2 3
```

```js
const a = [1,2,3]
const b = [4,5,6]

const d = [...a,...b]
console.log(d)
```
```
출력: [1,2,3,4,5,6]
```
```js
const a = {x:1, y:2}
const b = {y:3, z:4}

const c = Object.assign({},a,b)
console.log(c)
```
```
x : 1
y : 3 //나중에 온 y로 덮어 쓰여짐
z : 4
```
```js
function fn(x,y,z){
  console.log(x, y, z)
}

fn(1,2,3)
const a = [1,2,3]
fn(...a)
```
```
1 2 3
```

**✨concat** : `합쳐주는 역할`

ex)

```js
const a = [1,2,3]
const b = [4,5,6]

const c = a.concat(b)
console.log(c)
```
```
출력: [1,2,3,4,5,6]
```
## 구조분해할당 


📍 **기본 구조**
```js
const arr = [1,2,3]
const = []
```
📍 **디졸브**
```js
const arr = [1,2,3]
const[a, ...rest] = arr

console.log(a, rest)
```
```
출력: 1, [2,3]
```
## for 반복문

📍 **for**
```js
for(let i = 9; i > -1; i++){
  if(i < 4){
    break;
  }
  console.log(i)
}
```
```
출력
9
8
7
6
5
4
```
📍 **for of : 보통 배열에 권장** 
```js
const fruits = ['Apple', 'Banana', 'Cherry']

for(const a of fruits){
  console.log(a)
}
```
```
출력
Apple
Banana
Cherry
```
📍 **for in : 객체(순서x)나 배열의 속성을 순회할 때 사용**
```js
const user = {
  name: 'subin',
  age: 85,
  inValid: true,
  email: 'haely97@naver.com'
}

for(const key in user){
  console.log(key)
  console.log(user(key))
}
```

```
출력
name
subin
age
85
isValid
true
email
haely97@naver.com
```
## while 반복문

```js
let n = 0
while(n < 4){
  console.log(n)
  n += 1
}
```
