# 📕 Chapter8

## **🚀 목차**

```
- DOM
- Node vs Element
- 검색과 탐색
- 생성, 조회, 수정1
- 생성, 조회, 수정2
- 크기와 좌표
```
✨ **DOM**
- DOM이란 HTML 문서를 객체로 표현한 것
- JS에서 HTML을 제어할 수 있게 해준다
- DOM API = 사용할 수 있는 명령들

## 📂 Node vs Element
- **Node**: HTML 요소, 텍스트, 주석 등 모든 것을 의미(더 상위 개념)
- **Element**: HTML 요소를 의미

<img width="650" alt="스크린샷 2025-02-24 오후 10 19 31" src="https://github.com/user-attachments/assets/fb428b8b-5fa3-473a-8045-06e7362ff141" />

<img width="650" alt="스크린샷 2025-02-24 오후 10 20 09" src="https://github.com/user-attachments/assets/216b5f7c-8560-4521-b898-7c7bcc4518bb" />

```html
//index.html
<div class="parent">
  <div class="child">1</div>
  텍스트1
  <div class="child">2</div>
  텍스트2
</div>
```
```js
//main.js
const parent = document.querySelector('.parent');

console.log(parent.childNodes)
console.log(parent.children);
```

## 📂 검색과 탐색

🌱 `document.getElementById()`
- HTML의 `id` 속성 값으로 검색한 요소를 반환
- 여러 요소가 검색되면, 가장 먼저 찾은 요소만 반환
- 검색 결과가 없으면, `null`로 반환

ex) 1
```js
//js
const el = document.getElementById('child2');
console.log(el);
```
```html
//html
<div id="child2" class="child2">2</div>
```
🌱 `document.querySelector()`
- `css 선택자`로 검색한 요소를 하나 반환
- 여러 요소가 검색되면, 가장 먼저 찾은 요소만 반환
- 검색 결과가 없으면, `null`로 반환

ex) 2
```js
//js
const el = document.querySelector('.child:first-child');
console.log(el);
```
🌱 `document.querySelectorAll()`
- `css 선택자`를 검색한 모든 요소를 `NodeList`로 반환(노드가 여러개 들어있는 하나의 객체)
- `NodeList` 객체는 `.forEach()`를 사용할 수 있다.

```js
const nodeList = document.querySelectorAll('.child');
console.log(nodeList);
nodeList.forEach(el => console.log(el.textContent));

console.log(Array.from(nodeList).reverse())
```
🌱 `N.parentElement()`
- **노드**의 부모 요소를 반환한다.

```js
const el = document.querySelector('.child');
console.log(el.parentElement);
```
🌱 `E.closet()`
- **자신을 포함**한 조상 요소 중 `css 선택자`와 일치하는 가장 가까운 요소를 반환
- 요소를 찾지 못하면 `null`반환
```js
const el = document.querySelector('.child');

console.log(el.closet('div'));
console.log(el.closet('body'));
console.log(el.closet('.hello'));
```
🌱 `N.previousSibling` vs `N.nextSibling()`
- **노드**의 이전 형제 혹은 다음 형제 노드를 반환
```js
const el = document.querySelector('.child');

console.log(el.previousSibling);
console.log(el.previousSibling.parentElement);
console.log(el.nextSibling);
```
🌱 `E.previousElementSibling` vs `E.nextElementSibling()`
- 요소로 취급
  
🌱 `E.children()`
- 요소의 모든 자식 요소를 반환한다

🌱 `E.firstElementChild()` vs `E.lastElementChild()`
- 요소의 첫 번째 자식 혹은 마지막 자식 요소를 반환한다.


## 📂 생성, 조회, 수정(1)

🌱 `document.createElement()`
- 메모리에만 존재하는, 생성하는 새로운 html 요소를 생성해 반환한다.

```js
const divEl = document.createElement('div');
console.log(divEl);

const inputEl = document.createElement('input');
console.log(inputEl);
```
🌱 `E.prepend()` vs `E.append()`
- 노드를 요소의 첫 번째 혹은 마지막 자식으로 삽입한다

```js
const parentEl = document.querySelector('.parent');

const el = document.createElement('div')
el.textContent = 'Hello~'

parentEl.prepend(new Comment('주석'));
parentEl.append(el)
parentEl.append('Text!');
```
🌱 `E.remove`
- 요소를 제거
```js
const el = document.querySelector('.child');
el.remove()
```

🌱 `E.insertAdjacentElement()`
- '대상 요소'의 지정한 위치에 '새로운 요소'를 삽입
- 대상_요소.insertAdjacentElement(위치, 새로운_요소)
  
```js
/* html */
<!-- 'beforebegin'-->
<div class="target">
  <!--'afterbegin'-->
    Content~~
  <!-- 'beforeend' -->
</div>
<!-- 'afterend' -->

const childEl = document.querySelector('.child')
const newEl = document.createElement('span')
newEl.textContent = 'Hello~'

childEl.insertAdjacentElement('afterbegin', newEl);
```

🌱 `E.insertBefore()`
- '부모 노드'의 자식이 '참조 노드'의 이전 형제로 '노드'를 삽입한다.
- 부모_노드.insertBefore(노드, 참조_노드)

🌱 `N.contains()`
- '주어진 노드'가 '노드'의 자신을 포함한 후손인지 확인한다.
- 노드.contains(주어진_노드)

🌱 `N.textContent()`
- **노드**의 모든 텍스트를 얻어나 변경한다

```js
const el = document.querySelector('.child')
console.log(el.textContent); //1

el.textContent = '7'
console.log(el.textContent);//7
```
🌱 `E.innerHTML`
- **요소**에서 사용한다.
- 요소의 모든 HTML 내용을 하나의 문자로 얻거나, 새로운 HTML을 지정한다.

```js
const el = document.querySelector('.parent')
console.log(el.innerHTML)

el.innerHTML = '<span style="color: red;">Hello</span>' //방법 1
el.innerHTML = /*html*/`
<div style="border: 4px solid;">
  <span style="color: red;">Hello</span>
</div>` //방법 2
```


🌱 `E.dataset`
- 요소의 각 'data-' 속성 값을 얻거나 지정한다

✨ `JSON.stringify(obj)` : 모든 obj를 문자화 시키는 역할을 한다

<img width="272" alt="스크린샷 2025-03-03 오후 1 34 04" src="https://github.com/user-attachments/assets/2513f3cb-d101-4a38-827b-1681673f1248" />

<img width="500" alt="스크린샷 2025-03-03 오후 1 35 03" src="https://github.com/user-attachments/assets/c0cb89b5-7fd1-4ce1-87c0-014483385cc0" />

🌱 `E.tagName`
- 요소의 태그 이름을 반환한다

🌱 `E.id`
- 요소의 'id' 속성 값을 얻거나 지정한다

```js
const el = document.querySeletor('.child')
console.log(el.id)

el.id = 'child1'
console.log(el.id)
console.log(el)
```

🌱 `E.className`
- 요소의 `class` 속성 값을 얻거나 지정한다
  
🌱 `E.classList`
- 요소의 `class()` 속성 값을 제어한다
- `.add()`: 새로운 값을 추가
- `.remove()`: 기존 값을 제거
- `.toggle()`: 값을 토글
- `.contains()`: 값을 확인 
