# 📕 Chapter 7. 비동기 

## **🚀 목차**
```
- 콜백과 콜백 지옥
- Promise
- Async await
- Resolve reject & error handling#1
- Resolve reject & error handling#2
- 반복문에서 비동기 처리
- fetch() 
```
### ✨ **동기**와 **비동기**에 대해서 알아보자 
1. `동기` : 순차적으로 코드 실행 O
2. `비동기` : 순차적으로 코드 실행 X

**📍 example. 1**
```js
console.log(1)
setTimeout(() => { console.log(2) }, 1000)
console.log(3)
```
```
출력 : 1 3 2
```

**📍 example. 2**
```js
const btnEl = document.querySelector('h1');
btnEl.addEventListener('click', () => {
  console.log('Clicked!');
})
console.log('Hello World!');
```
```
출력
Hello World!
(버튼 눌렀을 때) Clicked!
```
**📍 example. 3**
```js
fetch(' ')
  .then(res => res.json())
  .then(res => console.log(res))

console.log(1)
console.log(2)
console.log(3)
```
```
출력
1
2
3
fetch 해서 가져온 데이터가 뜸
```

## 📂 콜백 패턴
📍 **동기 방식**
```js
const a = () => console.log(1)
const b = () => console.log(2)

a()
b()
```
```
출력
1
2
```
📍 **비동기 방식**
```js
const a = () => {
  setTimeout(() => {
    console.log(1)
  }, 1000)
}
const b = () => console.log(2)

a()
b()
```
```
출력
2
1
```
📍 **콜백패턴(비동기방식)**

```js
const a = (callback) => {
  setTimeout(() => {
    console.log(1)
    callback() //순서를 보장함
  }, 1000)
}
const b = () => console.log(2)

a(() => {
  b()
})
```
```
출력
1
2
```
📍 **콜백지옥(비동기방식)**

```js
const getMovies = (movieName, callback) => {
  fetch(``)
  .then(res => res.json())
  .then(res => {
    console.log(res)
    callback()
  })
}

//점점 들여쓰기 되는 것을 콜백지옥이라고 한다
getMovies('frozen', () => {
  console.log('겨울왕국')
  getMovies('avengers', () => {
    console.log('어벤져스!')
    getMovies('avatar', () => {
      console.log('아바타!')
    })
  })
})
```

## 📂 Promise
```js
const a = callback => {
  setTimeout(() => {
    console.log(1)
    callback()
  }, 1000)
}

const b = () => console.log(2)

a(() => {
  b()
})
```
## 📂 Async Await 패턴 

- await -> promise instance가 반환되는 함수 앞에서만 사용
- 비동기적인 코드를 동기적으로 작성할 수 있게 해주는 문법

```js
const a = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(1)
      resolve()
    }, 1000)
  }}
}

const b = () => console.log(2)

//a.then(() => b()) //then을 사용해서 비동기 호출

const wrap = async() =>{
  await a()
  b()
}

wrap() 
```
`비동기 방식 수정`

```js
const getMovies = (movieName, callback) => {
  fetch(``)
  .then(res => res.json())
  .then(res => {
    console.log(res)
    callback()
  })
}

//훨씬 더 직관적
const wrap = async() => {
  await getMovies('frozen')
  console.log('겨울왕국');
  await getMovies('avengers')
  console.log('어벤져스');
  await getMovies('avatar')
  console.log('아바타');
}

wrap();
```

## 📂 Resolve, Reject & Error handling#1

```js
const delayAdd = (index, cb, errorCb) => {
  setTimeout(() => {
    if( index > 10 ) {
      errorCb(`${index}는 10보다 클 수 없어요`);
        return
    }
    console.log(index)
    cb(index + 1)
  }, 1000)
}

delayAdd(
  4,
  res => console.log(res);
  err => console.log(err);
)
```
