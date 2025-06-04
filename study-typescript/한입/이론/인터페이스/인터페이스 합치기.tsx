/**
* 인터페이스는 동일한 이름으로 중복 선언이 가능하다 
*/

interface Person {
  name: string;
}

interface Person {
  name: string; //무조건 같게 !!! 
  age: number;
}

const person: Person = {
  name: "",
  age: 27,
};

/**
* 모듈 보강 
*/

interface Lib {
  a: number;
  b: number;
}

interface Lib{
  c: string;
}

const lib: Lib = {
    a: 1,
    b: 2,
    c: "hello",
};
  

