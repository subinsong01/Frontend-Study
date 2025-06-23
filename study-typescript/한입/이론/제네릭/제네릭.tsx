/*제네릭
함수, 클래스, 인터페이스 등을 정의할 때 타입을 고정하지 않고 사용하는 시점에 타입을 외부에서 지정할 수 있도록 하는 기능
*/

//재네릭 함수
function func<T>(value: T): T {
  return value;
} 
//<T> : 타입 변수(타입을 저장해줌)
//T : 반환값 T
//T는 함수를 호출할 때 인수에 따라서 결정된다. 
let num = func(10);

if(typeof num === "number"){
  num.toFixed();
}

let bool = func(true);
let str = fun("string");


let arr = func([1,2,3] as [number, number, number]));
let arr = func<[number, number, number]>([1,2,3]);
