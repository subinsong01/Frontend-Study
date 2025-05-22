//객체 = object
//객체 리터럴타입으로 사용해야한다.
//객체의 구조를 기반으로 타입을 정의한다(Property Based Type System) > 구조적 타입 시스템이라고 한다.

let user: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "수빈",
};

let dog: {
  name: string;
  color: string;
} = {
  name: "보리",
  color: "brown",
};

user.id;

//optional property
let user: {
  id?: number; // ? : property가 있어도 되고 없어도 된다(선택적 property)
  name: string;
} = {
  id: 1,
  name: "수빈",
};

user = {
  name: "바보",
};


//읽기 전용 property : readonly를 넣어주면 된다 
let config: {
  readonly apiKey: string; //읽기전용
} = {
  apiKey: "m123123123123",
};

config.apiKey = "dgfdgs"; //오류 발생
