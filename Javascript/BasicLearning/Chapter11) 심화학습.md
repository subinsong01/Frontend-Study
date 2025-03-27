# 📕 Chapter11) 심화학습

## **🚀 목차**

```
- Symbol, BigInt 데이터
- 불변성과 가변성
- 얕은 복사와 깊은 복사
- 가비지 컬렉션
- 클로저
- 메모리 누수
- 콜 스택, 테스크 큐, 이벤트 루프
```

## 📂 심볼

- 변경이 불가능한 데이터를 말한다
- 유일한 식별자를 만들어 데이터를 보호하는 용도로 사용 가능
  
`Symbol('설명')` 
- 설명은 단순 디버깅을 위한 용도일 뿐, 심볼 값과는 관계가 없다

```js
const sKey = Symbol('Hello!');
const user = {
  key: '일반정보~'
  [sKey]: '민감한 정보'
}

console.log(user.key) //일반정보
console.log(user['key']) //일반정보
console.log(user[sKey]) //민감한 정보
console.log(user[Symbol('Hello')]) //undefined
```

## 📂 BigInt

- 길이 제한이 없는 정수입니다.
- 숫자 데이터가 안정적으로 표시할 수 있는
- 최대치보다 큰 정수를 표현할 수 있다
- 정수 뒤에 'n'을 붙이거나 'bigInt()'를 호출해 생성한다

```js
const a = 11n
const b = 22

//숫자 => Bigint
console.log(a + BigInt(b)) //33n
console.log(typeof(a+BigInt(b))//bigint

//BigInt => 숫자
console.log(Number(a) + b) //33
console.log(typeof (Number(a) + b))//number
```

## 📂 불변성과 가변성

✨ `자바스크립트에는 원시값과 참조값이 있다`

- `불변성` : 생성된 데이터가 메모리에서 변경되지 않는다
- `가변성` : 생성된 데이터가 메모리에서 변경될 수 있음

🚀 자바스크립트 원시형은 `불변성`을 참조형(객체, 배열, 함수)은 `가변성`을 가지고 있다.

- 참조형은 같은 값을 가져도 항상 새로운 메모리 주소에 생성된다.(가변성이기 때문에 비교를 해봐야한다)
- 원시형은 생긴게 같으면 같다.
  
  `일치연산자(===)는 메모리 주소를 비교하기 위한 용도`


## 📂 얕은 복사와 깊은 복사

<img width="633" alt="스크린샷 2025-03-13 오후 1 25 10" src="https://github.com/user-attachments/assets/cd6481df-b685-4eb7-86e5-bde547ab3663" />

- 자바스크립트의 `참조형`데이터에서만 유효한 말
- 원시 타입은 깊은 복사가 되고, 참조 타입은 기본적으로 얕은 복사가 됨.
  
🌱 `얕은 복사` : 참조형의 1차원 데이터만 복사 <br />
- 객체의 참조값(주소값)을 복사
- `slice()`
  
🌱 `깊은 복사` : 참조형의 모든 차원 데이터를 복사
- 객체의 실제 값을 복사
- 깊은 복사된 객체는 객체 안에 객체가 있을 경우에도 원본과의 참조가 완전히 끊어진 객체를 말한다.
- 복사를 하는 목적은 기존 객체의 값만 복사본으로 가져와 별도로 활용하기 위함이 대부분이다.
- 기존 객체까지 건드린다면 이것은 복사를 하는 목적에 벗어난다.
- `spread()`
- `JSON.parse && JSON.stringify`

`원시타입`
- 변수를 복사하면 새로운 메모리 공간에 독립적인 값이 저장됨 → 깊은 복사가 됨.
  
```js
let a = 10;
let b = a; // a의 값을 b에 복사 (깊은 복사)
b = 20;  

console.log(a); // 10 (변경되지 않음)
console.log(b); // 20
```

`참조타입`
- 객체, 배열, 함수 등이 포함됨.
- 값이 변경될 수 있음(가변성, mutable).
- 변수를 복사하면 객체의 참조(메모리 주소)가 복사됨 → 얕은 복사가 됨.

```js
let obj1 = { value: 10 };
let obj2 = obj1; // obj1의 참조값(주소)이 obj2에 복사됨

obj2.value = 20; 

console.log(obj1.value); // 20 (obj1도 같이 변경됨)
console.log(obj2.value); // 20
```

## 🗑️ 가비지 컬렉션
- js의 메모리 관리 방법으로 자바스크립트 엔진이 자동으로
- 데이터가 할당된 메모리에서 더이상 사용되지 않는 데이터를 해제하는 것을 의미
- 개발자가 직접 강제 실행하거나 관리 불가

**장점**

- 메모리 관리를 완벽하게 할 필요는 없다.

**단점**

- 언제 가비지 컬렉션이 진행될지 예측하기 어렵다.
- 객체가 쓸모 없어지는 시점에 정확히 메모리가 해제되지 않기 때문에 최적의 메모리 관리가 되지 않는다.
- 가비지 컬렉터가 동작하는 시간이 든다.
어떤 객체가 쓸모 없는지 판단하는 시간이 소요된다.

## 📂 클로저

- 함수가 선언될 때의 유효범위를 기억하고 있다가
- 함수가 외부에서 호출될 때 그 유효범위의 특정 변수를 참조할 수 있는 개념을 의미
- 클로저는 함수가 선언될 때의 스코프를 기억하는 기능을 말한다.
- 즉, 함수가 실행된 이후에도 클로저는 그 함수가 선언된 환경을 참조할 수 있다.

```js
//예시
function createCount(){
  let a = 0;
  return function(){
    return a+= 1
  }
}

const count1 = createCount();
console.log(count1());//1
console.log(count1());//2
console.log(count1());//3

const count2 = createCount();
console.log(count2());//1
console.log(count2());//2
console.log(count2());//3
```
## 📂 메모리 누수
- 더 이상 필요하지않은 데이터가 해지되지 못하고 메모리를 계속 차지하는 형상 <br/>

`어떨 때 발생해요 ?`
1. 불필요한 전역 변수 사용
2. 분리된 노드(요소, element) 참조
3. 해제하지 않은 타이머
```js
let a = 0
const intervalId = setInterval(() => {
  a += 1
})

setTimeout(() => {
  console.log(a)
  clearInterval(intervalId);
}, 1000)

```
4. 잘못된 클로저 사용

## 📂 콜 스택, 테스크 큐, 이벤트 루프

