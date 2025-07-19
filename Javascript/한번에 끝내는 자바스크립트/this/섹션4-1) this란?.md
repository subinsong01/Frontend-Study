# this란?

> 자신이 속한 객체를 가리킴

- 함수가 어떻게 호출되었는가에 따라 바인딩되는 값이 달라진다.
- 동적으로 결정된다

**함수 호출 방식**
```
1. 일반 함수 호출
2. 메서드 호출
3. 생성자 함수 호출
4. 콜백 함수 호출
```

**1. 일반 함수 호출**
- 일반 함수에서 this는 전역 객체를 가리킨다.
- strict mode에서는 undefined가 될 수 있다.

```js
function regularFunction() {
    console.log(this);
    // 전역 객체(window in browser, global in Node.js)
}
regularFunction();
```

**2.메서드 호출**
- 객체의 메서드 내에서 this는 그 메서드를 호출한 객체를 가리킨다.

```js
const obj = {
  name: 'John',
  greet: function() {
  console.log(this.name); // 'John'
  }
};

obj.greet();
```

**3.생성자 함수 호출**
- 생성자 함수 내에서 this는 생성될 인스턴스를 가리킨다

```js
function Person(name) {
    this.name = name;
}
const person1 = new Person('Alice');
console.log(person1.name); // 'Alice'
```

**4.콜백 함수 호출**
- 보통 콜백 함수는 그 함수가 전달된 컨텍스트에 따라 this가 달라진다.
- 명시적으로 바인딩하지 않으면 전역 객체를 가리킬 수 있다.


```js
const button = document.querySelector('button');
button.addEventListener('click', function() {
    console.log(this); // <button> element
});
```

## this와 화살표 함수

**화살표 함수**

```js
const func = () => {
  console.log('hello  js');
};
```

- 함수를 변수에 할당
- 함수 표현식
- 호이스팅 **불가**

**일반 함수**

```js
function func() {
  console.log('hello js');
}
```
- 함수를 변수에 할당
- 함수 표현식
- 호이스팅 **가능**

**예시**

1) 화살표 함수는 자신의 this를 갖지 않음

- 화살표 함수는 자신만의 this를 바인딩하지 않고, 자신이 정의된 위치의 상위 스코프의 this를 사용한다.
- 이걸 lexical this (렉시컬 스코프의 this) 라고 한다.
- 위 예시에서는 setInterval의 콜백 함수 안에서 this가 전역 객체를 가리키므로, this.count++는 원하는 결과가 아님.
  
```js
function Counter() {
  this.count = 0;
  setInterval(function() {
    this.count++; // 여기서 this는 전역 객체 (브라우저에서는 window)
    console.log(this.count); // NaN 또는 undefined++
  }, 2000);
}
const counter = new Counter();
```

2) 화살표 함수 사용 (상위 스코프 this 사용)

- 이 경우에는 setInterval 안의 화살표 함수가 Counter 함수의 this를 참조하므로, 정상적으로 count가 올라간다.
- 상위 scrope의 this를 참조한다.
  
```js
function Counter() {
  this.count = 0;
  setInterval(function(() => {
    this.count++;  // 여기서 this는 Counter 인스턴스를 가리킴!
    console.log(this.count);
  }, 2000);
}
const counter = new Counter();
```

