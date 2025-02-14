# Chapter2) React 입문을 위한 기본

## 🚀 목차

- `Props`
- `EventHandler`
- `State`
- `State & Props`
- `useRef`
- `React Hook`

### 📂 Props
- Props는 부모에서 자식으로 값을 넘겨주는 것
  
```jsx
// 부모 컴포넌트
import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  return <ChildComponent name="Subin" />;
};

export default ParentComponent;
```
```jsx
// 자식 컴포넌트
import React from "react";

const ChildComponent = (props) => {
  return <p>안녕하세요, {props.name}님!</p>;
};

export default ChildComponent;
```
### 📂 EventHandler
- 클릭하는 동작과 같은 것을 의미
- `onClick`이 대표적인 이벤트핸들러

```jsx
import React from "react";

const ButtonComponent = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <button onClick={handleClick}> //이벤트핸들러
      클릭하세요
    </button>
  );
};

export default ButtonComponent;
```

### 📂 State
- 현재 가지고 있는 형태나 모양을 정의
- 변화할 수 있는 동적인 값

<img width="500" alt="스크린샷 2025-02-13 오후 7 53 37" src="https://github.com/user-attachments/assets/4e706136-476f-44c7-a9bc-2309ef5d356b" />

`state`에 따라서 랜더링 되는 화면을 다르게 보여줄 수 있다

<img width="400" alt="스크린샷 2025-02-13 오후 7 54 28" src="https://github.com/user-attachments/assets/24cba822-14b0-461f-9753-047c31bde49b" />

```jsx
//example
import './App.css'
import { useState } from 'react';
function App() {
  const state = useState(0); //state의 초기값
  console.log(state);

  return (
    <>
    
    </>
  );
}

export default App
```

<img width="300" alt="스크린샷 2025-02-13 오후 7 57 55" src="https://github.com/user-attachments/assets/3f576b98-b508-48df-9139-1365ecc4b08a" />

- 첫번째는 `useState`의 초기값을 나타낸다
- 두번째는 변화시키는 함수를 나타낸다

```jsx
import './App.css'
import { useState } from 'react';
function App() {
  const [count, setCount] = useState(0); //state의 초기값
  const [light, setLight] = useState("OFF");

  return (
    <>
    <div>
      <h1>{light}</h1> 
      <button 
        onClick={() => {
          setLight(light === "ON"?  "OFF" : "ON");
      }}
    >
      {light === "ON" ? "끄기" : "켜기"}
      </button>
    </div>
    <div>
    <h1>{count}</h1>
    <button onClick={() =>{
      setCount(count+1);
    }}>+</button>
    </div>
    </>
  );
}

export default App
```
**📌 여기서 의문점 ?**

```jsx
//const [light, setLight] = useState("OFF");
let light = "OFF";

return (
  <>
    <div>
      <button
        onClick={() => {
          //setLight(light === "ON" ? "OFF" : "ON";
    }}
    >
```

`state가 아닌 단순 js로 처리해도 되지 않나? 라는 생각을 할 수 있지만!!!` <br />
`js로 처리하면 아무런 랜더링이 이루어지지 않는다. 컴포넌트는 state가 변화할때만 랜더링이 되기 때문`

### 📂 State & Props

```jsx
import './App.css'
import { useState } from 'react';

const Bulb = ({light}) => {
  console.log(light);
  return(
    <div>
      {light === "ON" ? (
      <h1 style={{backgroundColor: "orange"}}>ON</h1>
        ): (
      <h1 style={{backgroundColor: "gray"}}> OFF </h1>
    )}
    </div>
  );
}; //props가 아니라 구조분해할당으로 바로 light를 불러옴

function App() {
  const [count, setCount] = useState(0); //state의 초기값
  const [light, setLight] = useState("OFF");

  return (
    <>
      <div>
        <Bulb light={light}/>
        <button 
          onClick={() => {
            setLight(light === "ON"?  "OFF" : "ON");
        }}
      >
        {light === "ON" ? "끄기" : "켜기"}
        </button>
      </div>
      <div>
      <h1>{count}</h1>
      <button onClick={() =>{
        setCount(count+1);
      }}>+</button>
      </div>
    </>
  );
}

export default App
```
**여기서 발생하는 문제**

<img width="300" alt="스크린샷 2025-02-13 오후 11 05 59" src="https://github.com/user-attachments/assets/7cf30c39-106c-41a9-af05-7fecdf7dca49" />
<img width="300" alt="스크린샷 2025-02-13 오후 11 06 52" src="https://github.com/user-attachments/assets/09d5a8c7-0f82-473d-8041-f984ee7660cc" />

`켜기`버튼이 아니라 `+`를 눌렀을 때 `OFF`가 증가한다는 것 ...!!! 즉 `bulb` 컴포넌트가 리랜더링된다.. 🤧 <br />
`왜 이런 현상이 일어날까 ?`

**React component가 리랜더링 될 때**

- 자신이 관리하는 state의 값이 변경됐을 때
- 자신이 제공받는 props의 값이 변경됐을 때
- 부모 컴포넌트가 리랜더링 되었을 때 자식 컴포넌트도 리랜더링 된다

`🧐 그렇기 때문에 코드에서도 count(부모 컴포넌트)가 랜더링 > bulb(자식 컴포넌트)도 함께 랜더링 되는 이슈 발생` <br />
=> 성능이 **굉장히** 안 좋아짐

```jsx
import './App.css'
import { useState } from 'react';

const Bulb = () => {
  const [light, setLight] = useState("OFF");
  return(
    <div>
      {light === "ON" ? (
      <h1 style={{backgroundColor: "orange"}}>ON</h1>
        ): (
      <h1 style={{backgroundColor: "gray"}}> OFF </h1>
    )}

    <div>
      <button 
          onClick={() => {
            setLight(light === "ON"?  "OFF" : "ON");
        }}
      >
        {light === "ON" ? "끄기" : "켜기"}
        </button>
      </div>
    </div>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0); //state의 초기값

  return (
  <div>
    <h1>{count}</h1>
    <button onClick={() =>{
        setCount(count+1);
      }}>+</button>
  </div>
  );
};

function App() {

  return (
    <>
    <Bulb />
    <Counter />
    </>
  );
}
export default App
```

### 📂 State 예제1) 사용자 입력받기

```jsx
import { useState } from "react";

const Register = () => {
  const [name, setName] = useState('이름');
  const [birth, setBirth] = useState('생일');
  const [country, setCountry] = useState('국적');
  const [bio, setBio] = useState('자기소개');

  const onChangeName = (e) => {
    setName(e.target.vale);
  }
  const onChangeBirth = (e) => {
    setBirth(e.target.value);
  }

  const onChangeCounty = (e) => {
    setCountry(e.target.value);
  }

  const onChangeBio = (e) => {
      setBio(e.target.value);
  }

  return (
    <div>
      <div>
        <input 
          value={name}
          onChange={onChangeName} 
          placeholder={"이름"} 
        />
      </div>
      <div>
        <input 
          value={birth}
          onChange={onChangeBirth}
          type="date"
        />
      </div>

      <div>
        <select value={country} onChange={onChangeCounty}>
          <option></option>
          <option value='kr'>한국</option>
          <option value='us'>미국</option>
          <option value='uk'>영국</option>
        </select>
        </div>
      <div>
        <textarea value={bio} onChange={onChangeBio}/>
        {bio}
      </div>
    </div>
  )
}

export default Register;
```

### 📂 State 예제2) 사용자 입력받기 업그레이드

- state를 하나로 묶어서 관리하기(객체 형태)
- `onChange`

```jsx
import { useState } from "react";

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country:"",
    bio: ""
  });
  const onChange = (e) => {
    console.log(e.target.name, e.target.value,);
    setInput({
      ...input,
      [e.target.value]: e.target.value,
    });
  };

  return (
    <div>
      <div>
        <input 
          value={input.name}
          onChange={onChange} 
          placeholder={"이름"} 
        />
      </div>
      <div>
        <input 
          value={input.birth}
          onChange={onChange}
          type="date"
        />
      </div>

      <div>
        <select value={input.country} onChange={onChange}>
          <option></option>
          <option value='kr'>한국</option>
          <option value='us'>미국</option>
          <option value='uk'>영국</option>
        </select>
      </div>

      <div>
        <textarea value={input.bio} onChange={onChange}/>
      </div>
    </div>
  )
}
export default Register;
```
### 📂 useRef

- 새로운 Reference 객체를 생성하는 기능 `const refObject = useRef()`

`useState vs useRef 차이점`

<img width="400" alt="스크린샷 2025-02-14 오후 4 58 14" src="https://github.com/user-attachments/assets/d5ffa877-a958-45b6-9b94-c1d21b1da347" />

- 랜더링에 영향을 미치지 않는 변수를 선언하고 싶을 때 사용
  
<img width="400" alt="스크린샷 2025-02-14 오후 5 06 53" src="https://github.com/user-attachments/assets/c7f0ef1e-34c7-43ee-b038-858d8a23778f" />

```jsx

import { useState, useRef } from "react";

const refObj = useRef(0);//생성
console.log(refObj.current);

<button onClick={()=>{
  refObj.current++;
  console.log(refObj.current);
  }}
>
  ref+1
</button>
```
<img width="400" alt="스크린샷 2025-02-14 오후 5 17 10" src="https://github.com/user-attachments/assets/3fb06baf-f8b3-406d-8196-73521cc7eb7d" />

`초기에 0이 다시 랜더링 되지 않는다`

### 📂 React Hooks

- 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능

```jsx
import { useState } from "react";

const HookExam = () => {

  const state = useState();
  return <div>hook exam</div>
}

export default HookExam;
```

- 조건문이나 반복문으로 호출이 불가능하다
- 나만의 훅을 직접 만들 수 있다
 
```jsx
//ex) 커스텀 훅 전
const HookExam = () => {
  const [input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  }

  return (
    <div>
      <input type={input} onChange={onChange} />
    </div>
  )
}
```

```jsx
//ex) 커스텀 훅 적용

import { useState } from "react";

function useInput() {
  const[input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return [input, onChange];
} //일반적으로 hooks폴더엔 넣어준다


const HookExam = () => {
  const [input, onChange] = useInput();
  const [input2, onChange2] = useInput();

  return (
    <div>
      <input type={input} onChange={onChange} />
      <input type={input2} onChange={onChange2} />
    </div>
  )
}

export default HookExam;
``` 
