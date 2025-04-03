# Chapter05) 타입 활용하기

**5장에서 느낀 잠 : 자스를(=기본) 잘해야함..🔥**

### 🛠️ 5.1 | 조건부 타입 
- `extends`, `infer`, `never`을 활용해 원하는 타입을 만들어보며 어떤 상황에서 조건부 타입이 필요한지 알아보기🧐

📍 `1.extends와 제네릭을 활용한 조건부 타입`
- 타입을 확장할 때와 타입을 조건부로 설정할 때 사용된다
- 제네릭 타입에서는 한정자 역할

> **책 기준**
```tsx
//extends 사용법
T extends U ? X : Y
```
타입 T를 U에 할당할 수 있으면 X 타입, 아니면 Y 타입 

```tsx
interface Bank {
  financialCode : string;
  companyName: string;
  name: string;
  fullName: string;
}

interface Card{
  financialCode : string;
  companyName: string;
  name: string;
  appCardType?: string;
}

type PayMethod<T> = T extends "card" ? Card : Bank;
type CardPayMethodType = PayMethod<"card">; 
type BankPayMethodType = PayMethid<"bank">;
```

> **쉬운 예제**

```tsx
type Check<T> = T extends string ? "문자열" : "문자열 아님";

type A = Check<"hello">; // "문자열"
type B = Check<123>; // "문자열 아님"
```

📍 `2.infer를 활용해서 타입 추론하기`
- `extends`로 조건을 서술하고 `infer`로 타입을 추론하는 방식을 취한다

infer 예시
```tsx
type GetElementType<T> = T extends (infer U)[] ? U : T;

type A = GetElementType<string[]>; // string
type B = GetElementType<number[]>; // number
type C = GetElementType<boolean[]>; // boolean
```
📌 **동작 방식**<br />
- T extends (infer U)[] ? U : T <br />

→ T가 배열이면 요소 타입을 U로 추론하고 반환.<br />
→ 배열이 아니라면 그냥 T를 반환.

### 🛠️ 5.2 | 템플릿 리터럴 타입 활용하기 
🧐 **템플릿 리터럴** : JS의 템플릿 리터럴 문법을 사용해 특정 문자열에 대한 타입을 선언할 수 있는 기능 
- TS는 유니온 타입을 사용하여 변수 타입을 특정 문자열로 지정할 수 있다.
```tsx
//예시
type HeaderTag = "h1" | "h2" | "h3" | "h4" | "h5";
```
- 휴먼 에러를 방지 가능
- 자동 완성 기능을 통해 개발 생산성을 높일 수 있다.

```tsx
type HeadingNumber = 1 | 2 | 3 | 4 | 5;
type HeaderTag = `h${HeadingNumber}`;
```
- 수평 또는 수직 방향을 표현하는 `Direction`타입을 표현
```tsx
type Direction =
  | "top"
  | "topLeft"
  | "topRight"
  | "bottom"
  | "bottomLeft"
  | "bottomRight";
```
`템플릿 리터럴 타입 적용`
```tsx
type Verticle = "top" | "bottom";
type Horizon = "left" | "right";

type Direction = Verticle | `${Verticle}${Capitalize<Horizon>}`; //Capitalize는 대문자로 반환하는 메서드
```
### 🛠️ 5.3 | 커스텀 유틸리티 타입 활용하기 

- `1. 유틸리티 함수를 활용해 styled-components의 중복 타입 선언 피하기`
  
  - `Pick`: 객체 타입에서 특정 속성을 선택
```tsx
// 1️⃣ Pick<T, K> → 특정 속성만 선택

type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};
```
```tsx
interface ButtonProps {
  color: string;
  size: "small" | "medium" | "large";
  disabled: boolean;
}

type StyledButtonProps = Pick<ButtonProps, "color" | "size">;

// 결과:
type StyledButtonProps = {
  color: string;
  size: "small" | "medium" | "large";
}
```
✅ StyledButtonProps 타입에는 color, size 속성만 남고, disabled는 제거된다

  - `Omit`: 제외할 때

```tsx
//2️⃣ Omit<T, K> → 특정 속성 제외
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
```
```tsx
interface ButtonProps {
  color: string;
  size: "small" | "medium" | "large";
  disabled: boolean;
}

type ButtonWithoutDisabled = Omit<ButtonProps, "disabled">;

// 결과:
type ButtonWithoutDisabled = {
  color: string;
  size: "small" | "medium" | "large";
}
```
`📍 styled-components에서 스타일과 무관한 속성을 제외할 때 활용 가능`
```tsx
const StyledButton = styled.button<Omit<ButtonProps, "disabled">>`
  background-color: ${(props) => props.color};
  font-size: ${(props) => (props.size === "large" ? "20px" : "14px")};
`;
```
✅ disabled 속성을 제외하고, 스타일 관련 속성만 유지

**Pick 유틸리티 타입을 활용해서 props에서 필요한 부분만 선택하여 styled-compoenets 컴포넌트의 타입을 정의하면, 중복된 코드를 작성하지 않아도 되고 유지보수를 더욱 편리하게 해준다**

-`2. PickOne 유틸리티 함수`

**서로 다른 2개 이상의 객체를 유니온 타입으로 받을 때 타입 검사가 제대로 진행되지 않는 이슈가 있고, 이런 문제를 해결하기 위한 것이 `PickOne`**

-`3. NonNullable 타입 섬사 함수를 사용하여 간편하게 타입 가드하기`

ex) null을 가질 수 있는 값의 null처리는 자주 사용되는 타입 가드 패턴 

🧐 **NonNullable 타입이란?**

- 제네릭으로 받는 T가 null 또는 undefined일 때 never 또는 T를 반환하는 타입
- NonNullable을 사용하면 null이라 undefined가 아닌 경우를 제외할 수 있다
- null, undefined를 검사해준다
- Promise.all을 사용할 때 Nonnullable 적용하기
  
```tsx
//사용법
type NonNullable<T> = T extends null | undefined ? never : T;
```
### 🛠️ 5.4 | 불변 객체 타입으로 활용하기

- 일반적으로 상수값을 관리할 때 `객체`를 사용(객체 타입을 받음)
- ex) theme, animation 등

`1️⃣ Atom component에서 theme style 객체 활용하기`

- theme 객체를 두고 관리한다(작은 스타일링 컴포넌트들)
- `keyof`, `typeof` 사용 방법 숙지하기
⬇️ 
🧐 **TS keyof 연산자로 객체의 키값을 타입으로 추출**

- `keyof` 연산자는 객체 타입을 받아 해당 객체의 키값을 `string` 또는 `number`의 리터럴 유니온 타입을 반환
- `keyof`는 인덱스 시그니터의 키 타입을 반환

```tsx
interface ColorType {
  red: string;
  green: string;
  blue: string;
}
type ColorKeyType = keyof ColorType //'red' | 'green' | 'blue'
```
🧐 **TS typeof 연산자로 객체의 키값을 타입으로 추출**

- `typeof`가 변수 혹은 속성의 타입을 추론하는 역할을 한다
- 주로 `ReturnType`과 같이 유틸리티 타입이나 keyof 연산자 같이 타입을 받는 연산자와 함께 쓰임

```tsx
const color = {
  red: "#ddsdf",
  green: "#34fsfd",
  blue: "adsfsadf",
}

type ColorsType = typeof colors;
```

### 🛠️ 5.5 | Record 원시 타입 키 개선하기 

- 객체 선언 시 키가 명확하지 않다면 `Record`의 키를 `string`이나 `number` 같은 원시 타입으로 명시하곤 함 
- Record를 명시적으로 사용하는 방안

`1. 무한한 키를 집합으로 가지는 Record`
  
```tsx
type Category = string;
interface Food {
  name: string;
  ...
}

const foodByCategory: Record<Category, Food[]> = {
  한식 : [{name: "비빔밥"}, {name: "뚝불"}],
  중식 : [{name: "짜장면"}, {name: "짬뽕"}],
}
```
```tsx
foodByCategory["양식"].map((food) => console.log(food.name)); //에러 발생
⬇️
foodByCategory["양식"]?.map((food) => console.log(food.name)); //undefined
```
🧐 **옵셔널 체이닝이란?** <br />

객체의 속성을 찾을 때 중간에 null 또는 undefined가 있어도 오류 없이 안전하게 접근하는 방법 <br />
?. 문법으로 표현되며 중간에 null 또는 undefined인 속성이 있는지 검사한다 

**근데**<br/>
**이런식이면 어떤 값이 undefined인지 매번 판단해야 한다는 번거로움 이슈 발생** 

`2. 유닛 타입으로 변경`

```tsx
type Category = "한식 | 일식";

interface Food {
  name: string;
  ..
}
const foodByCategory : Record<Category, Food[]> = {
  한식 : [{name: "비빔밥"}, {name: "뚝불"}],
  중식 : [{name: "짜장면"}, {name: "짬뽕"}],
};
```

- 유닛 타입을 활용하면 개발 중에 유효하지 않은 키가 사용되었는지를 확인할 수 있지만 **키가 무한해야 하는 상황에는 적합하지 않음**

`3. Partial을 활용하여 정확한 타입 표현`

- 키가 무한한 상황에서는 이를 사용하여 해당 값이 undefined일 수 있는 상태임을 표현 가능
- 객체 값이 `undefined`일 수 있는 경우에 `Partial`을 사용해서 `PartialRecord`타입을 선언하고 객체를 선언할 때 활용 가능

```tsx
type PartialRecord<K extends string, T> = Partial<Record<K, T>>;
type Category = string;

interface Food {
  name: string;
  ..
}
const foodByCategory : Record<Category, Food[]> = {
  한식 : [{name: "비빔밥"}, {name: "뚝불"}],
  중식 : [{name: "짜장면"}, {name: "짬뽕"}],
};

foodByCategory["양식"]
foodByCategory["양식"].map((food) => console.log(food.name)); //Object is possibly 'undefined'
foodByCategory["양식"]?.map((food) => console.log(food.name)); //OK
```
foodByCategory[key]를 Food[]또는 **undefined**로 추론하고 표시해주고 이를 사전에 조치해서 예상치 못한 런타임 오류를 줄일 수 있다

