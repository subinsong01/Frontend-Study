//조건문 - switch - case
//break: 조건에 맞는 이후에 모든 케이스들을 출력하지 않게 하기 위해(fall through(떨어짐)현상이라고 함)
//default: case문에 없는 경우에 출력

let fruits = 'apple';

switch(fruits){
  case 'banana':
    console.log('바나나');
    break;
  case 'orange':
    console.log('오렌지');
    break;
  case 'apple':
    console.log('사과');
    break;
  default:
    console.log('더 줘');
}

//if-else : 복잡한 조건, 비교 연산(>, < 등)에 유리
//switch : 특정 값과의 일치만 따질 때 유리 (=== 비교)
