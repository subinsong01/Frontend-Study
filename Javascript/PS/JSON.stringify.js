/*JSON.stringify()
- 객체를 JSON 형식의 문자열로 변환
- 배열을 JSON 문자열로 변환
- 숫자, 문자열, 불리언 값도 JSON 문자열로 변환
- null 값 처리*/

//기본 사용법
const obj = { name: "John", age: 30, city: "New York" };
const jsonString = JSON.stringify(obj);

console.log(jsonString); // '{"name":"John","age":30,"city":"New York"}'

//배열을 JSON 문자열로 변환

const arr = [1, 2, 3, 4];
const jsonString = JSON.stringify(arr);
console.log(jsonString); // `[1,2,3,4]`

//숫자, 문자열, 불리언 값도 JSON 문자열로 변환
const num = 123;
const str = "Hello, World!";
const bool = true;

console.log(JSON.stringify(num));  // "123"
console.log(JSON.stringify(str));  // "\"Hello, World!\""
console.log(JSON.stringify(bool)); // "true"
