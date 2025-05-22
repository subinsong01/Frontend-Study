//배열타입 정의하기
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["hello", "my", "name", "is", "subin"];
let boolArr: Array<boolean> = [true, false, true]; // <> : 제네릭 문법

//만약 배열에 들어가는 요소들의 타입이 다야한 경우(union type으로)
let multiArr: (number | string)[] = [1, "number"];

//다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

//튜플 : 길이와 타입이 고정된 배열 > js로 컴파일 하면 배열로 변환된다.
//튜플은 자바스크립트에는 존재하지 않으며 타입스크립트에만 있다
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, "2", false];

const user: [string, number][] = [
  ["영철", 1],
  ["수빈", 2],
  ["은석", 3],
  ["신지", 4],
];
