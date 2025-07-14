//null 병합 연산자 : 변수에 기본값을 할당하고 싶을 때 사용한다
//A ?? B : A가 undefined가 아니면 A를 출력하고, undefined인 경우네는 B를 출력한다
let num1; 
let num2 = 10;

console.log(num1 ?? 20); //20
console.log(num2 ?? 20); //10
