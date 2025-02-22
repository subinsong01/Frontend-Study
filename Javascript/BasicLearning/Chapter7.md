# 📕 Chapter 7. 비동기 

## **🚀 목차**
```
- 콜백과 콜백 지옥
- Promise - 비동기 코드 관리
- Async await - 비동기 코드 관리 
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
```
4
5
```
**에러 핸들링**

```js
const delayAdd = index => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        if( index > 10 ) {
          reject(`${index}는 10보다 클 수 없어요`);
            return
        }
        console.log(index)
        cb(index + 1)
      }, 1000)
  })
}

//promise - then - catch(err handling method) - finally():항상 실행 
delayAdd(13)
  .then(res => console.log(res))
  .catch( err => console.log(err))
```

**async - await**
// async-await(try-catch문으로 에러를 잡아야함)-finally():항상 실행 
```js
const delayAdd = index => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        if( index > 10 ) {
          reject(`${index}는 10보다 클 수 없어요`);
            return
        }
        console.log(index)
        cb(index + 1)
      }, 1000)
  })
}

const wrap() = async() => {
 try{
    const res = await delayAdd(2)
    console.log(res)
  }catch(err){
   console.log(err)
  }
}

wrap();
```
## 📂 반복문에서 비동기 처리

```js
const getMovies = movieName => {
  return new Promise(resolve => {
    fecth(``)
    .then(res => res.json())
    .then(res => resolve(res))
  })
}

const titles = ['frozen', 'avengers', 'avatar']

title.forEach(async title => {
  const movies = await getMovies(title)
  console.log(title, movies)
})
//반복을 기다리는 것이 아니라 한번에 진행된다.
//결과가 새로고침할 때마다 다르다 

for(const title of titles){
  const movies = await getMovies(title)
  console.log(title, movies)
}

const wrap = async() => {
  for(const title of titles){
    const movies = await getMovies(title)
    console.log(title, movies)
  }
}
wrap()
```

## 📂 fetch(주소, 옵션)

- Promise 인스턴스를 반환
- 네트워크 요청을 쉽게 보내고 응답을 받을 수 있음
- JSON 데이터를 쉽게 처리 가능

fetch 응답을 response.json()으로 쉽게 JSON 형태로 변환 가능.
  
```js
fetch(``, {
  method: 'GET', //POST, PUT, DELETE 가능
  headers: {
    'Content-Type': 'application/json'
  }, 
  body: JSON.stringify({
  name: 'subin',
  age: 85,
  email: 'subin@gmail.com'
})//body는 항상 문자 데이터로 전송해야 한다.
})
  .then(res => res.json())
  .then(json => console.log())
}
```
```js
const wrap = async() => {
  const res = await fetch(``)
  const json = await res.json()
  console.log(json)
}
wrap()
```
<img width="626" alt="스크린샷 2025-02-22 오후 7 52 59" src="https://github.com/user-attachments/assets/76cad8ca-416c-452f-b8e3-0ab8b174c53b" />
