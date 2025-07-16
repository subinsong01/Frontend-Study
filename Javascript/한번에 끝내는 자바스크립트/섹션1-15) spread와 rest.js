//spread

const toy = {
  type: "bear",
  price: 10000,
};

const blueToy = {
  type: "bear",
  price: 10000,
  color: "blue"
}

const yellowToy = {
  type: "bear",
  price: 10000,
  color: "blue"
}

//type, price가 모두 같아서 이런식으로 하는 것은 비효율적 ! 
//spread 연산자 : 객체, 배열에서 사용 가능

const toy = {
  type: "bear",
  price: 10000
};

const blueToy = {
  ...toy,
  color: "blue"
}

const yellowToy = {
  ...toy,
  color: "blue"
}


//rest : 특정 부분들을 객체나 배열로 묶어준다.(spred랑 반대 개념)
//항상 마지막에만 작성할 수 있다 
const blueToy = {
  type: "bear",
  price: 10000,
  color: "blue"
}

const { type, ...rest } = blueToy;
console.log(type); //bear
console.log(rest); // {price: 10000, color: "blue"}
