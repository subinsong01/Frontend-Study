# Chapter10. 상태관리

## 🚀 목차 

### 📂 10.1) 상태 관리 

**📁 상태(State)**
- 렌더링에 영향을 줄 수 있는 동적인 데이터 값을 말한다
- 동적인 데이터를 나타내며, 값이 변경될 때마다 컴포넌트의 렌더링 결과물에 영향을 준다
- `지역 상태`, `전역 상태`,`서버 상태`로 분류가 가능하다

**1. 지역상태**
- ex) 체크박스의 체크 여부나 폼의 입력값
- 컴포넌트 내부에서 사용되는 상태
- `useState`나 `useReducer`와 같은 훅이 대표적

**2. 전역상태**
- 말 그대로 앱 전체에서 공유하는 상태를 의미
- `Prop drilling`문제를 피하고자 지역 상태를 해당 컴포넌트들 사이의 전역 상태로 공유 가능하다

🧐 `Prop drilling`<br />

 props를 통해 데이터를 전달하는 과정에서 중간 컴포넌트는 해당 데이터가 필요하지 않음에도 자식 컴포넌트에 전달하기 위해 props를 전달해야 하는 과정을 의미한다. <br/>
 즉, 컴포넌트 수가 많아지면 코드가 훨씬 복잡해지게 하는 이슈 ..! 
 
**3. 서버상태**
- 사용자 정보, 글 목록 등 외부 서버에 저장해야 하는 상태를 의미
- ex) 로딩 여부나 에러 상태 등을 포함
- `react-query`, `SWR`과 같은 외부 라이브러리를 사용하여 관리하기도 한다

-----
**📁 상태를 잘 관리하기 위한 가이드**
- 유지보수 및 성능 관점에서 당연히 최소화하는 것이 최고
- 가능하다면 `stateless` 컴포넌트를 활용하는 게 좋다

**✨ 시간이 지나도 변하지 않는다면 상태가 아니다**

- 객체 참조 동일성을 유지하는 방법을 고려하자(`useMemo`, `useState`, `useRef`)
  
  - `useMemo` : 권장하지 않는다(X). only for `성능 개선`
  - `useState` : 좋은 방법은 아니다(X). 초깃값 설정에 큰 비용이 소요될 수 있기 때문에, `callback()` 형식을 사용한다.
  - `useRef`: 가장 적합(O)
    
- 컴포넌트 라이프사이클 내에서 마운트될 때 인스턴스가 생성되고, 렌더링될 때마다 동일한 객체 참조가 유지되도록 구현
  
**✨ 파생된 값은 상태가 아니다**

- 부모에게서 전달받을 수 있는 props이거나 기존 상태에서 계산이 될 수 있는 값은 상태가 아님

🧐 `useState` vs `useReducer`

`useReducer`의 사용을 권장하는 경우

- 다수의 하위 필드를 포함하고 있는 복잡한 상태 로직을 다룰 때
- 다음 상태가 이전 상태에 의존적일 때

즉, `useReducer`는 `무엇을 변경할지`와 `어떻게 변경할지`를 분리하여 `dispatch`를 통해 어떤 작업을 할지를 `액션`으로 넘기고 <br />
`reducer` 함수 내에서 `상태를 업데이트` 하는 방식을 정의한다

ex)
```ts
import { useReducer } from 'react';

//Before
const [fold, setFold] = useState(true);
const toggleFold = () => {
  setFold((prev) => !prev);
}

//After
const [fold, toggleFold] = useReducer((v) =>!v, true);
```
-----
**📁 전역 상태 관리와 상태 관리 라이브러리**
- 상태는 사용하는 곳과 최대한 가까워야 하며 사용 범위를 제한해야만 한다

  - Context API + useState or useReducer
  - 외부 상태 관리 라이브러리(Redux, MobX, Recoil 등)

**✨ Context API**
- 다른 컴포넌트들과 데이터를 쉽게 공유하기 위한 목적
- `Prop Drilling`같은 문제를 해결하기 위한 도구로 사용
-----

### 📂 10.2) 상태 관리 라이브러리  

- `MobX`
- `Recoil`
- `Redux`
- `Zustand`


**✨ MobX**
- 상태 변경 로직을 단순하게 작성 가능
- 객체 지향 스타일로 코드를 작성하는 데 익숙하다면 추천 !
- 하지만 데이터가 언제, 어떻게 변하는지 추적하기 어려움

```ts
import { observer } from "mobx-react-lite";
import { makeAutoObservable } from "mobx";

class Cart {
  itemAmout = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increase(){
    this.itemAmount += 1;
  }

  reset(){
    this.itemAmout = 0;
  }
}

const myCart = new Cart();

const CartView = observer({cart}) => (
  <button onClick={() => cart.reset()}>
    amount of cart items: {cart.itemAmout}
  </button>
));

ReactDOM.rende(<CartView cart={myCart} />, document.body);

setInterval(() => {
  myCart.increase();
}, 1000);
```
**✨ Redux**
- 독립적으로 상태 관리라이브러리 사용 가능
- 상태 변경 추적에 최적화
- 사용 난도가 높다는 단점
- 값을 변경하기 위해서는 `dispatch` & `action`을 넣어줘야 한다

```ts
import { createStore } from "redux";

function counter(state = 0, action) {
  switch(action.type){
    case "PLUS":
      return state + 1;
    case "MINUS":
      return state - 1;
    default:
      return state;
  }
}

let store = createStore(counter);
store.subscribe(() => console.log(store.getState());

store.dispatch({type: "PLUS"});
//1
store.dispatch({type: "PLUS"});
//2
store.dispatch({type: "MINUS"});
//1
```
**✨ Recoil**
- 상태를 저장할 수 있는 `Atom`과 해당 상태를 변형할 수 있는 순수 함수 `selector`를 통해 관리
- 난이도가 쉬움
- 다양한 요구 사항에 대한 충분한 검증이 이루어지지 않았다는 단점

```ts
import React from 'react';
import {RecoilRoot} from "recoil";
import {TextInput} from "./";

function App(){
  return(
    <RecoilRoot>
      <TextInput />
    </RecoilRoot>
 );
};
```
`Atom`은 상태의 일부를 나타내며 어떤 컴포넌트에서든 읽고 쓸 수 있도록 제공

```ts
import { atom } from "recoil";

export const textState = atom({
  key: "textState" //unique ID
  default: "",
});
```
```ts
import { useRecoilState } from "recoil";
import { textState } from "./";

export function TextInput(){
  const [text, setText] = useRecoilState(textState);

  const onChange = (e) => {
    setText(event.target.value);
  }

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}

setInterval(() => {
  myCart.increase();
}, 1000);
```
**✨ Zustand**
- Flux 패턴을 많이 사용
- 클로저를 활용하여 스토어 내부 상태를 관리함으로써 특정 라이브러리에 종속되지 않음
- 상태와 상태를 변경하는 액션을 정의하고 반환된 훅을 어느 컴포너트에서나 임포트 하여 사용 가능

```ts
import { create } from "zustand";

const useBearStore = create((set)) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({bears: state.bears + 1});
  removeAllBears: () => set({bears: 0 }),
  }));

function BearCounter() {
  const bears = useBearStore((state) => state.bears);
  return <h1>{bears} around here</h1>;
}

function Controls(){
  const increasePopulation = useBearStore((state) => state.increasePopulation);
  return <button onClick={increasePopulation}>Plus</button>;
}
```
