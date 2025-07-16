# DOM API2

### createElement()

```js
let $type = document.createElement('div');
$type.className = 'info-item'
$type.id = 'type';
$type.textContent = '코숏';

console.log($type);
//<div class="info-item" id="type">코숏</div> 
```
### createTextNode()

```js
let $type = document.createElement('div');
$type.className = 'info-item'
$type.id = 'type';
let $typeText = document.createTextNode('코숏');

console.log($type);
console.log($typeText);
//<div class="info-item" id="type"></div>
//"코숏"
```

### appendChild() 
> node(트리구조)에 추가 해주는 방법

```js
let $type = document.createElement('div');
$type.className = 'info-item'
$type.id = 'type';
let $typeText = document.createTextNode('코숏');

let $animal-info = document.querySelector('div.animal-info');
$animalInfo.appendChild($type);
$type.appendChild($typeText);
```
**버튼 만들어보기**

```js
let $button = document.createElement('button');
$button.id = 'new-button';
$button.classList.add('new-button);
$button.textContent = '버튼';
$button.addEventListener("click", () => {
  window.alert('클릭');
})//기능 넣기

let $animalInfo = document.querySelector('div.animal);
$animalInfo.appendChild($button);

console.log($animalInfo);
```

