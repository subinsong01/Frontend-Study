# Chapter02) 타입?

**2장에서 느낀 잠 : 타입스크립트는 자스에 업그레이드된 버전이며, 그냥 자스에 타입만 더해주면 타입스크립이구나..?!**

대충 요약하자면 이거 ,,, 🥱 이지만 그래도 중요하다고 생각하는 부분을 요약해봤다

### 🛠️ 정적 타입과 동적 타입 
- 타입을 결정하는 **시점**에 따라 타입을 나눈다.
- 정적타입 : 모든 변수의 타입이 **컴파일 타입**에 결정된다(ex. C, Java, TS)
- 동적타입 : **런타임**에서 결정된다(ex. Python, JS)

✅ **런타임과 컴파일타임에 대해서 알아보자**
- 기계가 소스코드를 이해할 수 있도록 기계어로 변환되는 시점이 **컴파일타임**
- 변환된 파일이 메모리에 적재되어 실행되는 시점 **런타임**

### 🛠️ 강타입과 약타입 
- 런타임에 타입이 자동으로 변경되는 것을 **암묵적 타입 변환**이라고 한다
- **종류**
  - 강타입 = 가진 값끼리 연산을 하면 **오류** 발생 (ex. 파이썬, TS)
  - 약타입 = 내부적으로 판단해서 연산을 수행한 후에 값 도출 (ex. JS, Java, C++)
  
### 🛠️ TS의 타입 시스템

```tsx
//타입스크립트에서 타입 선언 방식
변수 : type
```
```tsx
let isDone : boolean = false;
let decimal : number = 6;
let color: string = "red";
let list : number[] = [1,2,3];
let x : [string, number ]; //튜플
```
### 🛠️ 구조적 타이핑 
- 타입은 이름으로 구분되며, 컴파일타임 이후에도 남아있다.
- 이것을 명목적으로 구체화한 **타입 시스템** 이라고 부른다
- 서로 명확한 상속 관계나 공통으로 가지고 있는 인터페이스가 없다면 타입은 서로 호환 X
- ✨ 타입스크립트에서 타입을 구분하는 방법 : **구조** ✨
  - 🔗 **구조적 서브 타이핑** : 집합으로 나타낼 수 있는 TS의 타입 시스템을 지탱하고 있는 개념을 의미(TS에서 사옹된다)
  - **JS에서는 덕 타이핑 사용** : 어떤 타입에 부합하는 메서드를 가질 경우 해당 타입에 속하는 것으로 간주하는 방식 
- **구조적 타이핑과 덕 타이핑 차이🧐**
  - 타입을 검사하는 시점
  - 덕 타이핑 : 런타임에 검사
  - 구조적 타이핑 : 컴파일 타임에 타입체커가 타입을 검사
```tsx
//특정 값이 string | number type을 동시에 가질 수 있다 
type stringOrNumber = string | number;
```
↔️ **명목적 타이핑** : 타입의 동일성을 확인하는 과정에서 구조적 타이핑 보다 안전

### 🛠️ TS의 점진적 타입 확인

- TS는 점진적으로 타입을 확인하는 언어이다.
- 컴파일 타임에 타입을 검사하면서 필요에 따라 타입 선언 생략을 허용하는 방식


✅ **TS에서 any type**

- TS 내 모든 타입의 종류를 포함하는 가장 상위 타입으로 어떤 타입 값이든 할당 가능하다
- 단, TS 컴파일 옵션인 **noImplicitAny** 값이 **true**일 때는 에러가 발생한다
- TS로 코드를 작성할 때는 **tsconfig**의 **noImplicitAny** 옵션을 **true**로 설정

✅ **트리쉐이킹**

- JS + TS에서 사용하지 않는 코드를 삭제하는 방식(웹팩, 롤업 같은 모듈 번듈러를 사용)
- 사용하지 않는 코드는 자동으로 삭제
  
