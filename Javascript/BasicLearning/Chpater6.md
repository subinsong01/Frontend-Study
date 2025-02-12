# 📕 Chapter 6. 모듈

## **🚀 목차**
```
- 모듈
- 가져오기 내보내기 패턴 
- 동적으로 모듈 가져오기, 가져온 모듈 바로 내보내기
```

## 모듈
- 특정 데이터들의 집합
- 모듈 가져오기(import), 내보내기(export)
- 한 번만 사용이 가능하다(기본 내보내기)

**📍 기본 내보내기**

`module.js`
```js
//ex
export default 123;
```
`main.js`
```js
import number from './module.js';
console.log(number) //123
```
**📍 이름 내보내기**

`module.js`
```js
//ex
export default 123;

export const str = 'ABC';
export const arr = [];
export function hello(){}
```
`main.js`
```js
import number, { str, arr, hello } from './module.js';
console.log(number) //123
console.log(str)//ABC
console.log(arr)//[]
```

**📍 동적으로 모듈 가져오기** 가져온 모듈 바로 내보내기**

`module.js`
```js
//ex
export default 123;

export const str = 'ABC';
export const arr = [];
export function hello(){}
```
`main.js`
```js
setTimeout(() => {
  import('./module.js').then(abc => {
    console.log(abc)
  )},
}, 1000)
```

**📍 가져온 모듈 바로 내보내기**

`a.js`

```js
export const a = () => 123
```
`b.js`

```js
export const b = () => 456
```
`main.js`
```js
import {a, b} from 'uils.js';

console.log(a());
console.log(b());
```

`utils.js`

```js
export { a } from './a.js';
export { b } from './b.js';
```
