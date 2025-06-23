/**
* 첫번째 사례
*/
function swap<T, U>(a:T, b: U){
  return [b, a]
}//타입 변수를 여러개 선언하는 것도 가능함

const[a, b] = swap("1",2);

/**
* 두번째 사례
*/
function returnFirstValue<T>(data: [T, ...unknown[]]){
  return data[0];
}
let num = returnFirstValue([0,1,2]);
//0
let str = returnrFirstValue([1, "hello", "mynameis"]);
//"hello"


/**
* 세번째 사례
*/

function getLength<T extends { length: number }>(data: T){
  return data.length;
}

let var1 = getLength([1,2,3]);
let var2 = getLength("12345");
let var3 = getLength({length:10});
let var4 = getLength(10);
