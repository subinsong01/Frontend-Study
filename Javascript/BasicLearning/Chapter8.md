# 📕 Chapter1 

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
