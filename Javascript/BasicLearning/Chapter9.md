# 📕 Chapter9. Events

## **🚀 목차**

```
- 이벤트 추가 및 제거 
- 이벤트 객체 
- 기본 동작 방지 
- 버블링과 캡처링
- 이벤트 옵션
- 이벤트 위임
- 마우스와 포인터 이벤터
- 키보드 이벤터
- 양식과 포커스 이벤터
- 커스텀 이벤터 
```

## 📂 이벤트 추가 및 제거

🌱 `.addEventListener()`
- 대상에 지정한 이벤트가 발생했을 때 지정한 함수가 호출된다.

```js
const parentEl = document.querySelector('.parent');

parentEl.addEventListener('click', () => {
  console.log('Click~');
})
```

🌱 `.removeEventListener()`
- 대상에 지정한 이벤트를 제거

```js
const parentEl = document.querySelector('.parent');
const childEl = document.querySelector('.child');

const handler = () => {
  console.log('Parent!');
}

parentEl.addEventListener('click', handler)
childEl.addEventListener('click', () => {
  parentEl.removeEventListener('click', handler)
})
```

## 📂 이벤트 객체

🌱 `.event.target(), event.currentTarget()`
- 이벤트 객체는 대상에서 발생한 이벤트 정보를 담고 있다.

```js
const parentEl = document.querySelector('.parent');

parentEl.addEventListener('click', event => {
  console.log(event.target, event.currentTarget)
})
//event.target = 이벤트가 발생한 해당 요소(내가 클릭한 부분)
//event.currentTarget =  이벤트가 등록된 요소 > parentEl.addEventListener의미

parentEl.addEventListener('wheel', event => {
  console.log(event)
})

parentEl.addEventListener('keydown', event => {
  console.log(event.key)
})
```
## 📂 기본 동작 방지 

🌱 `.event.preventDefault()`

```js
//마우스 휠의 스크롤 동작 방지 
const parentEl = document.querySelector('.parent');
parentEl.addEventListener('wheel', event => {
  event.preventDefault();
})

//<a> 태그에서 페이지 이동 방지
const anchorEl = document.querySelector('.a');
anchorEl.addEventListener('wheel', event => {
    event.preventDefault();
})
```
## 📂 버블링과 캡처링

🌱 `event.stopPropagation()` - 버블링 전파 정지 <br />
🌱 `{ capture: true } ` - 캠처링(먼저 실행해줘!)

```js
//이벤트 전파(버블) 정지
const parentEl = document.querySelector('.parent');
const childEl = document.querySelector('.child');
const anchorEl = document.querySelector('.a');

window.addEventListener('click', event => {
    console.log('window');
})
document.body.addEventListener('click', event => {
    console.log('body');
})
parentEl.addEventListener('click', event => {
    console.log('parent');
    event.stopPropagation() : 버블링 정지
})
childEl.addEventListener('click', event => {
    console.log('child');
})
anchorEl.addEventListener('click', event => {
    console.log('Anchor');
})
```
- 버블링 정지를 하지 않았을 때 
<img width="200" alt="스크린샷 2025-03-04 오후 8 09 22" src="https://github.com/user-attachments/assets/76e599e2-497c-475b-a5c8-7c565533d75d" />

- 버블링 정지 했을 때 
<img width="199" alt="스크린샷 2025-03-04 오후 8 10 45" src="https://github.com/user-attachments/assets/522a282c-e324-486d-b0cc-9dd3a11d45b6" />

## 📂 이벤트 옵션

🌱 `핸들러 한 번만 실행 (once: true)`

```js
const parentEl = document.querySelector('.parent');

parentEl.addEventListener('click', event => {
  console.log('Parent');
}, {
  once: true
})
```
🌱 `기본 동작과 핸들러 실행 분리 (passive: true)`

```js
const parentEl = document.querySelector('.parent');

parentEl.addEventListener('wheel', () => {
  for(let i = 0; i < 10000; i += 1){
  console.log('Parent!');
}, {
  passive: true
})
```

## 📂 이벤트 위임
- 비슷한 패턴의 여러 요소에서 이벤트를 핸들링해야 하는 경우
- 단일 조상 요소에서 제어하는 이벤트 위임 패턴을 사용할 수 있다.

```js
const parentEl = document.querySelector('.parent');
const childEls = document.querySelectorAll('.child');//querySelectorAll : 노트 리스트 반환

//모든 대상 요소에 이벤트 등록!
childEls.forEach(el => {
  el.addEventListener('click', event => {
    console.log(event.target.textContent)
  })
})

//조상 요소에 이벤트 위임!
parentEl.addEventListener('click', event => {
  const childEl = event.target.closest('.child')
  if(childEl){
    console.log(childEl.textContent)
  }
})
```

## 📂 마우스와 포인터 이벤터

- `click` : 클릭했을 때
- `dblclick` : 더블 클릭했을 때
- `mousedown` : 버튼을 누를 때
- `mouseup` : 버튼을 뗄 때
- `mouseenter` : 포인터가 요소 위로 들어갈 때 
- `mousemove`: 포인터가 요소 밖으로 나올 때 
- `contextmenu` : 우클릭 했을 때 
- `wheel` : 휠 버튼이 회전할 때

## 📂 키보드 이벤터

🌱 `keydown | 키를 누를 때` <br/>
🌱 `keyup | 키를 뗄 때`

```js
const inputEl =  document.querySelector('input');

inputEl.addEventListener('keydown', event => {
  console.log(event.key);
}
inputEl.addEventListener('keydown', event => {
  if(event.key === 'Enter' && !event.isComposing){ //한글을 다룰 때는 꼭 처리해주기
    console.log(event.isComposing)//true : 문제를 처리중, true가 아닌 경우에만 값 처리해야함
    console.log(event.target.value); //콘솔에 입력 값이 뜬다
  }
})
```

## 📂 포커스와 폼 이벤트
- `focus` : 요소가 포커스를 얻었을 때
- `blur` : 요소가 포커스를 잃었을 때
- `input`: 값이 변경되었을 때
- `change`: 상태가 변경되었을 때 
- `submit` : 제출 버튼을 선택했을 때
- `reset`: 리셋 버튼을 선택했을 때

✨ **form 요소에서는 submit을 하면 새로고침하는게 기본동작**
- 그렇기 때문에 `preventDefault()`를 해줘야 한다.

## 📂 커스텀 이벤터 
🌱 `dispatchEvent(new Event('click'))`: 강제로 이벤트 발생 <br />
🌱 `new Event(' ', { })`
- 자바스크립트에 존재하지 않는 커스텀을 만들어서 이벤트의 생성자 함수로 실행 가능
  
```js
child1.addEventListener('hello-world', event => {
  console.log('커스텀 이벤트 발생!');
  console.log(event.detail); //123 출력
})

child2.addEventListener('click', () => {
  child1.dispatchEvent(new CustomEvent('hello-world', {
    detail: 123
  }))
})
```
