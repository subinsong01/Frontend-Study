# Chapter8) Context

## 🚀 목차

- `Context?`
- `Context 사용하기`
- `Context 분리하기`


### 📂 Context?
- `Props`를 대체해서 컴포넌트간의 데이터를 전달하는 또 다른 방법
- `props`가 가지고 있는 단점을 커버함
- `context`는 데이터 보관소(객체) 역할이다

`props`

<img width="530" alt="스크린샷 2025-02-19 오전 2 04 53" src="https://github.com/user-attachments/assets/d0c6a850-f1bb-446e-b2c6-012b6e64750e" />

`context`

<img width="530" alt="스크린샷 2025-02-19 오전 2 07 51" src="https://github.com/user-attachments/assets/62ba0d28-193b-4adc-96fb-0d53c5a99dfc" />

### 📂 Context 사용하기

```jsx
import { useRef, useReducer, useCallback, createContext } from 'react'

const TodoContext = createContext();//일반적으로 함수 밖에서 생성

return (
    <div className='App'>
      <Header /> 
      <TodoContext.Provider value={{todos,onCreate,onDelete, onUpdate}}>
        <Editor onCreate={onCreate} />
        <List 
          todos={todos}
          onUpdate={onUpdate} 
          onDelete={onDelete}
        />
      </TodoContext.Provider>
    </div>
  )
}
```

<img width="530" alt="스크린샷 2025-02-19 오후 6 34 15" src="https://github.com/user-attachments/assets/e2d31648-98c3-4959-8fcd-6222369c6aee" />
<img width="530" alt="스크린샷 2025-02-19 오후 6 34 53" src="https://github.com/user-attachments/assets/aba8da9d-3fa9-4931-9650-cdf78214f6bf" />
<img width="530" alt="스크린샷 2025-02-19 오후 6 36 18" src="https://github.com/user-attachments/assets/90f0f083-d310-4316-8032-f05fadcb182c" />



- **Context 적용**


```jsx
//Editor.jsx
import { useState, useRef, useContext } from 'react';
import { TodoContext } from '../App';

const Editor = () => {
  const {onCreate} = useContext(TodoContext);
```

```jsx
//List.jsx
import { useState, useMemo, useContext } from 'react';
import { TodoContext } from '../App';

const {todos} = useContext(TodoContext);

 <div className='todos_wrapper'>
        {filteredTodos.map((todo) => {
          return <TodoItem key={todo.id} {...todo}/>
        })} 
      </div>
```
```jsx
//TodoItem.jsx
import { memo, useContext } from 'react';
import { TodoContext } from '../App';


const TodoItem = ({id, isDone, content, date}) => {
  const {onUpdate, onDelete} = useContext(TodoContext);
  
  const onChangeCheckbox = () => {
    onUpdate(id);
  }
  const onClickDelete = () => {
    onDelete(id);
  }

  return(
    <div className="TodoItem">
      <input onChange={onChangeCheckbox} readOnly checked={isDone} type='checkbox' />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}날짜</div>
      <button onClick={onClickDelete}>삭제</button>
    </div>
  )
}
```


### 📂 Context 분리하기

- `최적화`가 풀리는 이슈 발생🤧

<img width="530" alt="스크린샷 2025-02-19 오후 8 48 24" src="https://github.com/user-attachments/assets/83cd2fd4-b4a0-456c-a901-50a3248a11f3" />

`해결방법 - 분리`

<img width="530" alt="스크린샷 2025-02-19 오후 8 49 28" src="https://github.com/user-attachments/assets/ca5d2924-f6c6-4d05-be21-89b81074c097" />

```jsx
//App.jsx
//Context 분리
export const TodoStateContext = createContext();//일반적으로 함수 밖에서 생성
export const TodoDispatchContext = createContext();//일반적으로 함수 밖에서 생성

 const memoizedDispatch = useMemo(() => {
    return {onCreate, onDelete, onUpdate};
  }, []);

  return (
    <div className='App'>
      <Header /> 
      <TodoStateContext.Provider value={todos}> 
        <TodoDispatchContext.Provider value={memoizedDispatch}> 
        <Editor onCreate={onCreate} />
        <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  )
}
```

```jsx
//Editor.jsx
import { TodoDispatchContext } from '../App';
const {onCreate} = useContext(TodoDispatchContext);
```
```jsx
//List.jsx
const todos = useContext(TodoStateContext);

const todos = useContext(TodoStateContext); //구조 분해 할당으로 가지고 오지 않음. todos 하나이기 때문
```
```jsx
//TodoItem.jsx
import { memo, useContext } from 'react';
import { TodoDispatchContext } from '../App';

  const {onUpdate, onDelete} = useContext(TodoDispatchContext);
```
