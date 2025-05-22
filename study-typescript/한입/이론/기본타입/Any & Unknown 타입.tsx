//any : 특정 변수의 타입을 우리가 확실하게 모를 때 사용
//타입스크립트는 기본적으로 타입을 지정하지 않아도 초기화하는 값을 기준으로 변수의 타입을 자동으로 추론
//하지만 any를 사용하는 것은 지양해야함 ! any를 사용한다는 것은 타입스크립트를 사용하는 이점을 다 없앤다는 의미랑 똑같기 때문이다.

let anyVar: any = 10;

let num: number = 10;
num = anyVar;

//unknown : 타입을 확실히 모를 때는 unknown으로 사용하기
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

if (typeof unknownVar === "number") {
  num = unknownVar;
}
