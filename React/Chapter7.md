# Chapter6) 최적화

## 🚀 목차

- `UseMemo와 연산 최적화`
- `React.memo와 컴포넌트 랜더링 최적화`
- `useCallback과 함수 재생성 방지`


### 📂 최적화란? 

- 웹 서비스의 성능을 개선하는 모든 행위
- 아주 단순한 것부터 아주 어려운 방법까지 매우 다양

### 📂 useMemo

- `메모제이션`기법을 기반으로 불 필요한 연산을 최적화 하는 리액트 훅

<img width="700" alt="스크린샷 2025-02-18 오후 7 34 52" src="https://github.com/user-attachments/assets/3fee2131-8bcb-4df8-a7e9-0582dabd4b0a" />

```jsx
//비효율적 코드
const filteredTodos = getFilteredData();

  const getAnalyzedData = () => {
    console.log("getAnalyedData 호출!");
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  };

  const {totalCount, doneCount, notDoneCount} = getAnalyzedData();

  return (
    <div className='List'>
      <h4>Todo List🌱</h4>
      <div>
        <div>total: {totalCount}</div>
        <div>done: {doneCount}</div>
        <div>notDone: {notDoneCount}</div>
      </div>
```

<img width="1440" alt="스크린샷 2025-02-18 오후 7 46 02" src="https://github.com/user-attachments/assets/841211c2-17be-4857-a62b-cf629bee567b" />

`search바에` 검색을 할때마다 `console.log`가 호출되는 비효율적인 상황 발생 

```jsx
//useMemo를 사용한 효율적인 코드
 const {totalCount, doneCount, notDoneCount} = useMemo(() => {
    console.log("getAnalyedData 호출!");
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todos]);//callback함수, 배열(의존성: deps)
//todos의 변경이 있을 때마다 callback함수가 변경되면서 console이 출력된다.
```
`console.log`가 최초 한번만 실행된다

<img width="1440" alt="스크린샷 2025-02-18 오후 7 51 24" src="https://github.com/user-attachments/assets/e991c961-8275-4b36-a0e7-f058911603df" />

### 📂 React.memo와 컴포넌트 랜더링 최적화

- react의 내장 함수이다
- 컴포넌트를 인수로 받아, 최적화된 컴포넌트로 만들어 반환
- `props`가 바꼈을 때만, `rerendering`하는 최적화를 진행해줌
- 얕은 비교로 진행함
 
- 현재 todo는 리스트를 완료/취소 클릭했을 때 모든 컴포넌트들이 새로 랜더링 되는 비효율적 이슈 발생

```jsx
import "./Header.css";
import {memo} from "react";

const Header = () => {
  return (
    <div className="Header">
      <h3>미루지 말고 오늘은 하자 😼</h3>
      <h1>
        {new Date().toDateString()}
      </h1>
    </div>
  );
};

const memoizedHeader = memo(Header);

export default memoizedHeader;
```

```jsx
export default memo(TodoItem, (prevProps, nextProps) => {
  //반환값에 따라, Props가 바뀌었는지 안 바뀌었는지 판단
  // T -> Props가 바뀌지 않음 -> 리랜더링 X
  // F -> Props가 바뀜 -> 리랜더링 O
  if(prevProps.id !== nextProps.id) return false;
  if(prevProps.isDone!== nextProps.isDone) return false;
  if(prevProps.content!== nextProps.content) return false;
  if(prevProps.date!== nextProps.date) return false;

  return true;
});//콜백함수를 커스텀해줌, 메모 메서드에 전달해줌 (=사실상 불편)
```

### 📂 useCallback
- 불 필요한 함수 재생성 방지하기
  
```jsx
//App.jsx
const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime()
      },
    });
  }, []) ;

  const onUpdate = useCallback((targetId) => {
    //todos State의 값들 중에
    //targetId와 일치하는 id를 갖는 투구 아이텡믜 isDone 변경 
    dispatch({
      type: "UPDATE",
      targetId: targetId
    })
  }, []);

  const onDelete = useCallback((targetId) =>{
    //인수로는 todos 배열에서 targetId와 일치하는 id를 갖는 요소만 삭제한 새로운 배열
    dispatch({
      type: "DELETE",
      targetId: targetId
    })
  }, []); //최초 한번만 리랜더링
```

```jsx
//TodoItem.jsx
export default memo(TodoItem);
```

### 🧐 최적화는 언제 진행할까?
- 일반적으로 기능을 다 구현하고 진행

