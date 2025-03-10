# 🚀 DOM과 Virtual DOM의 차이

### 🌱 DOM (Document Object Model)

- 브라우저가 HTML을 해석하여 만든 트리 구조의 객체 모델
- JavaScript를 사용하여 HTML 요소를 조작할 수 있음
- 하지만 DOM 조작은 느림 → DOM을 직접 수정하면 리렌더링 비용이 큼

## 🌱 Virtual DOM (가상 DOM)
- React 같은 라이브러리가 사용하는 개념
- 실제 DOM을 직접 조작하는 대신, 메모리 내에서 가상의 DOM을 생성하여 변경 사항을 관리
- 변경 사항을 비교(diffing)한 후, 최소한의 업데이트만 실제 DOM에 반영 (reconciliation)

<img width="764" alt="스크린샷 2025-03-10 오후 7 30 22" src="https://github.com/user-attachments/assets/291777fb-e6d7-4f18-8702-5e33c1450d3a" />

### 🎯 쉽게 비유하면?

**📖 DOM** → 종이에 직접 수정하는 것 <br />
**🖥️ Virtual DOM** → 수정할 내용을 초안(가상 문서)에서 먼저 수정한 후, 차이점만 반영하는 것

**React**가 **Virtual DOM**을 사용하는 이유는 불필요한 DOM 조작을 줄여 성능을 최적화하기 위해서

<img width="760" alt="스크린샷 2025-03-10 오후 7 32 26" src="https://github.com/user-attachments/assets/06311b5d-7722-4fea-b484-65b48f08c505" />

-----

`Vanilla JS`

```js
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>DOM vs Virtual DOM</title>
</head>
<body>
  <h1 id="title">Hello</h1>
  <button onclick="updateDOM()">Update DOM</button>

  <script>
    function updateDOM() {
      const title = document.getElementById("title");
      title.textContent = "Hello, World!";
    }
  </script>
</body>
</html>
```
`React.js`

```jsx
import { useState } from "react";

function App() {
  const [text, setText] = useState("Hello");

  return (
    <div>
      <h1>{text}</h1>
      <button onClick={() => setText("Hello, World!")}>Update Virtual DOM</button>
    </div>
  );
}

export default App;
```
- React는 Virtual DOM을 사용 <br />
- setText가 실행되면 Virtual DOM에서 변경을 감지(diffing)한 후, 최소한의 업데이트만 실제 DOM에 적용 <br />
- 더 최적화된 렌더링이 가능
