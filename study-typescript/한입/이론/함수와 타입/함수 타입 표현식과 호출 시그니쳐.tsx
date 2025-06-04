/**
* 함수 타입 표현식 : 함수 자체 타입을 선언
*/

//함수의 타입을 별도로 정의하는 방법

//함수 표현식
type Add = (a: number, b: number) => number;

const add: Add = (a, b) => a + b; //함수 표현식을 사용해서 간단함
const add = (a: number, b:number) => a + b; // 중복이 많아짐

/**
* 호출 시그니쳐 : 함수 형태를 가진 객체 타입
* (콜 시그니쳐)
*/

type Operation2 = {
  (a:number, b:number):number;
}
const add2: Operation2 = (a, b) => a + b; //함수 표현식을 사용해서 간단함
