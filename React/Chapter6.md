# Chapter6) Hook - UseReducer 

## 🚀 목차

- `UseReducer`
- `todo에 적용하기`


### 📂 UseReducer
- 컴포넌트 내부에 새로운 `State`를 생성하는 `React Hook`
- 모든 `useState`는 `useReducer`로 대체 가능
- **상태 관리 코드를 컴포넌트 외부로 분리할 수 있음**
  
```jsx
//useState
function App(){
  const [todos, setTodos] = useState(mockData);
  const isRef = useRef(3);

  const onCreate = (content) => {
      const newTodo = {
        id: idRef.current,
        isDone: false,
        content: content,
        date: new Date().getTime()
      };

  setTodos([newTodo, ...todos]);
};
```
```jsx
// useReducer

function reducer() {
} //외부에서 관리 

function App(){
  const [todos, dispatch] = useReducer(reducer);
  //...
}
```
**📍 useReducer 사용법**

```jsx
//Exam.jsx

//reducer : 변환기
// > 상태를 실제로 변화시키는 변환기 역할
function reducer(state, action){
  console.log(state, action);
  if(action.type === "INCREASE"){
    return state + action.data;
  }else if(action.type === "DECREASE"){
    return state - action.data;
  }
} //switch문으로도 구현 가능

const Exam = () => {
  //dispatch = 상태 변화가 있어야 한다는 사실을 알리는, 발송하는 함수
  const [state, dispatch] = useReducer(reducer, 0);
  const onClickPlus() => {
    //인수: 상태가 어떻게 변화되길 원하는지
    //-> 액션개체
    dispatch({
      type: "INCREASE",
      data : 1,
    });
  };

  const onClickMinus() => {
    dispatch({
      type: "DECREASE",
      data: -1,
    });
  };

  <return>(
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinu}>-</button>
  );
};

export default Exam;
```



