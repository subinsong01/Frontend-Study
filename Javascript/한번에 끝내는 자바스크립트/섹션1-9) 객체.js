//비원시타입1. 객체 - 값을 저장할 수 있는 자료형 
//생성자 함수, 리터럴

//1. 생성자
let obj = new Object();
console.log(obj); //{}

//2.리터럴
let obj = {};
console.log(obj); //{}

//객체 속성(key of value)
let book = {
  title: '자바스크립트',
  author: '숩',
  category: 'js',
};

//점 표기법
console.log(car.title);
console.log(car.author);

//괄호 표기법
console.log(car['title']);
console.log(car.['author']);

let car = {
  name: '붕붕',
  model: 'morning',
  color: 'black',
};

const getValue = (key) => {
  console.log(car[key]); //black
};

getValue('color');

//추가
let cat = {
  age: 2,
};

cat.name = '야옹이';
cat['color'] = 'white';

console.log(cat);

//수정
let cat = {
  age: 2,
  name: '환타',
  color: 'orange',
};

cat.name = '옹이';
cat['color'] = 'pink';

console.log(cat);

/*
age: 2,
name: '옹이',
color: 'pink',
*/
/* 
중요한 부분 = const로 선언하고 수정해도 오류가 나지 않는다.
왜일까? 이유는 고유한 값을 수정하는 게 아니기 때문이다.
*/

/*수정이 불가능한 경우*/

const cat = {
  age: 2,
  name: '야옹쓰',
  color: 'white',
};

cat = {
  age: 3,
};

console.log(cat);//error 발생

//삭제
const car = {
  age : 2,
  name: '애옹',
  color: 'gray',
};

delete cat.color;
delete cat['age'];

console.log(cat); //name:애옹

//호출방법
const person = {
  name: '숩',
  age: 23,
  print: function(){
    console.log('hello');
  },//method
};

person.print(); //hello
person.['print'](); //hello

const person = {
  name: '숩',
  age: 23,
  print: function(){
    console.log(`제 이름은 ${this.name}입니다`);
  },
};

person.print(); //제 이름은 숩입니다.
person.['print'](); //제 이름은 숩입니다. 
