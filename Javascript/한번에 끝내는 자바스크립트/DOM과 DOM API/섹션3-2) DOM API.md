# DOM API1
### document.getElementById()
1. 단 하나의 요소만을 반환
2. id 속성값이 일치하는 요소 하나를 반환
3. 수정 가능 

```html
//ex)
<div id="color">빨강</div>
```
```js
let $color = document.getElementById('color')
console.log($color); // <div id="color">빨강</div> 
```
**수정**
```js
let $color = document.getElementById('color');
$color.classList.add('dog-color');

console.log($color);
//<div class="info-item dog-color" id="color">
```
**삭제**
```js
let $color = document.getElementById('color');
$color.classList.remove('dog-color');

console.log($color);
//<div class="dog-color" id="color">
```
DOM API를 사용해서 특정 요소를 변수에 할당할 때에는 일반적으로 요소를 할당할 변수의 이름 앞에 $를 붙여준다

### document.querySelector()

1. CSS 선택자 문법으로 일치하는 첫 번째 요소 하나를 반환
2. 수정 가능 

```html
<div id="color">빨강</div>
<p class="text">문장1</p>
<p class="text">문장2</p>
```
```js
let $el1 = document.querySelector('#color');   // id 선택
let $el2 = document.querySelector('.text');    // class 선택
let $el3 = document.querySelector('p');        // 태그 선택

console.log($el1); // <div id="color">빨강</div>
console.log($el2); // <p class="text">문장1</p> ← 첫 번째만 반환
console.log($el3); // <p class="text">문장1</p>
```

### querySelectorAll()

- CSS 선택자 문법을 이용해서 일치하는 모든 요소(NodeList)를 선택

```html
<body>
  <div class="animal-info">
    <div class="info-item">강아지</div>
    <div class="info-item">고양이</div>
    <div class="info-item">까마귀</div>
  </div>
  <script src="src/index.js"></script>
</body>
```

```js
let $infoItem = document.querySelectorAll('div.info-item')
console.log($infoItem);
```

### getElementsByClassName()

- HTML 요소 중 특정 클래스명을 가진 모든 요소들을 선택해서 **HTMLCollection** 객체로 반환하는 메서드

```js
let $infoItem = document.getElementsByClassName('info-item')
console.log($infoItem);
```

### getElementByTagName()

- 지정한 태그 이름을 가진 모든 요소들을 선택해서 HTMLCollection 객체로 반환하는 메서드

```js
let $infoItem = document.getElementByClassName('div')
console.log($infoItem);
```

## 내용 변경
### textContent()
```js
let $age = document.getElementById('age');
$age.textContent = '5살'
```

### style()

```js
let $color = document.getElementById('color');
$color.style.color = 'blue';
$color.style.fontSize = '30px';
```
