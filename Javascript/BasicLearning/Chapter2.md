# 📕 Chapter 2


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
