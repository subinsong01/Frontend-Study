# Composition API 기본 🌱

## 1. ref와 reactive — 상태 관리의 핵심
`ref`
- 원시 값(숫자, 문자열 등)이나 단일 값에 반응성을 줌
- `.value` 프로퍼티로 접근하고 수정함

```js
import { ref } from "vue";

const count = ref(0);

count.value++;  // 상태 변경 -> 화면 갱신
```

`reactive`
- 객체나 배열 같은 복합 데이터에 반응성을 줌
- 직접 프로퍼티를 수정해도 자동 반응

```js
import { reactive } from "vue";

const state = reactive({
  todos: [],
  user: { name: "Jane" },
});

state.todos.push("할 일");
state.user.name = "John";
```

## 2. `<template>` 에서 상태 사용하기
   
- ref나 reactive로 만든 상태는 자동으로 템플릿에 반영됨
- ref는 템플릿에서 .value 안 붙여도 됨! (Vue가 알아서 처리)

```js
<template>
  <div>{{ count }}</div>
</template>

<script setup>
import { ref } from "vue";

const count = ref(0);
</script>
```

## 3. 이벤트 처리

- 이벤트는 React처럼 @click, @keydown.enter 등으로 처리함
- 함수 직접 연결 가능

```js
<template>
  <button @click="increment">증가</button>
  <div>{{ count }}</div>
</template>

<script setup>
import { ref } from "vue";

const count = ref(0);

function increment() {
  count.value++;
}
</script>

```

## Composition API란?
### Vue 3에서 새롭게 나온 컴포넌트를 작성하는 방법 중 하나

```html
쉽게 말해
필요한 상태(ref, reactive) 만들고,

함수 만들어서 로직 구현하고,

이것들을 <script setup> 안에서 바로 쓴다!
```
