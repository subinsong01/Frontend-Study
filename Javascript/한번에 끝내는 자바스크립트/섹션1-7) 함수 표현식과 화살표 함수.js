/* 차이점 : 호이스팅 */

/* 함수 선언식 : function 키워드 옆에 함수의 이름 작성 */
function func(){
  console.log('hello javascript');
}

hoisted();

function hoisted(){
  console.log('hoisting');
}//hoisting

/* 함수 표현식 : 변수에 함수를 마치 하나의 값처럼 할당 */
const func = () => {
  console.log('hello javascript');
}

const func = function() {
  console.log('hello js');
}

hoisted();

const hoisted = function (){
  console.log('hoisting');
}//error


//콜백함수 : 다른 함수의 인자로 전달되는 함수, 직접 실행 X → 다른 함수에 넘겨서, 그 안에서 실행

function callMeLater(callback) {
  console.log("일하는 중...");
  callback(); // "callback" = 나중에 불릴 함수
}

function sayHello() {
  console.log("안녕하세요!");
}

callMeLater(sayHello);

//일하는 중...
//안녕하세요!
