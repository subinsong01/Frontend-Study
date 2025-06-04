/**
* 함수 타입 정의
*/

//함수를 설명하는 가장 좋은 방법
//어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기 (js)
//어떤 [타입의]매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 이야기 (ts)

function func(a:number, b:numer) : number {
  return a + b;
} 

/**
* 화살표 함수의 타입을 정의하는 방법
*/
const add = (a:number, b:number) : number  => a + b;


/**
* 함수의 매개변수
*/

function introduce(name="수빈", tall:number){
  console.log(`name: ${name}`);
  console.log(`tall: ${name}`);
}

introduce('수빈', 162);
introduce('수빈')//오류 발생

//오류 해결 방법 : 선택적 매개변수 <-> name: 필수 매개변수 
//항상 필수매개변수는 선택적 매개변수 앞에 선언해주어야 한다.
function introduce(name="수빈", tall?:number){
  console.log(`name: ${name}`);
  console.log(`tall: ${name}`);
}
introduce('수빈')//오류 해결

//**
* 만약에 키에 숫자를 더하고 싶으면 
*/
  
function introduce(name="수빈", tall?:number){
  console.log(`name: ${name}`);
  if(typeof tall === "number"){
  console.log(`tall: ${tall + 10}`);
  }
}

function getSum(...rest : number[]){
  let sum = 0;
  rest.forEach((it) => (sum += it));
  
  return sum;
}

getSum(1,2,3); //6
getSum(1,2,3,4,5); //6
