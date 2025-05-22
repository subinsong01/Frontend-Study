//void > 아무것도 없음을 의미하는 타입

function func1(): string {
  return "hello";
}
function func2(): void {
  console.log("hello");
} //return 값을 반환하고 싶지 않을 때 void 선언

//never : 존재하지 않는 > 불가능한 타입(그 어떤 값도 저장을 못함)
function func3(): never {
  while (true) {}
} //무한 루프
