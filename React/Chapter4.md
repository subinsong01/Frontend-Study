# Chapter4) 라이프사이클이란 ? 

## 🚀 목차

- `라이프사이클이란?`
- `useEffect 사용하기`
- `useEffect로 라이프사이클 제어하기`

### 📂 라이프사이클이란?

<img width="600" alt="스크린샷 2025-02-14 오후 8 06 30" src="https://github.com/user-attachments/assets/4181f269-c097-4e8c-bbb7-912556cf121c" />

출처 : https://yjym33.tistory.com/39 <br />

**Mount : 탄생**

- 컴포넌트가 탄생하는 순간
- 화면에 `처음 렌더링` 되는 순간

**Update : 변화**

- 컴포넌트가 `다시 렌더링` 되는 순간
- 리렌더링 될 때를 의미

**Unmount : 죽음**

- 컴포넌트가 `화면에서 사라지는 순간`
- 렌더링에서 제외 되는 순간을 의미

### 📂 useEffect ? 

- 리액트 컴포넌트의 `사이드 이펙트`를 제어하는 새로운 react hook
- ex) 과식을 하면 `살이 찐다 = 파생되는 효과(사이드 이펙트)`

<img width="600" alt="스크린샷 2025-02-14 오후 8 05 33" src="https://github.com/user-attachments/assets/ffcfc3db-4110-46f4-b225-6817e5c59f90" />


**작동 원리**

`useEffect(()=>{}, [])`

- 배열 `[]`의 값이 변경되면, 첫번째 인수로 전달된 인수가 콜백함수를 실행시켜준다


```jsx
//deps 값이 하나일 때 
  const [count, setCount] = useState(0);

  useEffect(()=>{
    console.log(`count: ${count}`);
  }, [count]);
  //의존성배열(deps)
```
```jsx
//deps 값이 두개일 때
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  useEffect(()=>{
    console.log(`count: ${count} / input : ${input}`);
  }, [count, input]);
  //의존성배열(deps)
```

### 📂 useEffect로 라이프사이클 제어하기

**mount**

```jsx
  useEffect(()=>{
    console.log("mount");
  }, []);
```
**update**

```jsx
useEffect(() => {
  console.log("update");
}); //deps 없애기
```

```jsx
//업데이트 되었을 때만 렌더링 하고 싶은 경우

import{ useRef } from 'react';

const isMount = useRef(false);
useEffect(() => {
  if(!isMount.current){
    isMount.current = true;
    return;
  }
  console.log("update");
}); //deps 없애기
```

**Unmount**

```jsx
import { useEffect } from "react";

const Even = () => {
  useEffect(()=>{
    //클린업, 정리함수
    return () => {
      console.log("cleanup");
    };
  }, [])
  return <div>짝수</div>
}
export default Even;
```
- `return문` 안에 화살표 함수로 넣어준 부분은 `unmount`해주는 부분이다.
