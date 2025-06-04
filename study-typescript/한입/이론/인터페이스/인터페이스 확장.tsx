//name과 age가 4번 중복 선언되어있음 : 엄청 비효율적
//인터페이스는 객체 타입이면 다 확장할 수 있다. > 굉장히 효율적

interface Animal {
  name: string;
  age: number;
}

interface Dog {
  name: string;
  age: number;
  isBark: boolean;
}

interface Cat {
  name: string;
  age: number;
  isScratch: boolean;
}

interface Chicken {
  name: string;
  age: number;
  isFly: boolean;
}

//인터페이스 확장(상속)

interface Animal {
  name: string;
  color: string;
}
interface Dog extends Animal {
  isBark: boolean;
}

interface Cat extends Animal{
  isScratch: boolean;
}

interface Chicken {
  isFly: boolean;
}

//다중 확장 
interface DogCat extends Dog, Cat{
}

//DogCat 타입을 가진 객체를 만들기
const dogCat: DogCat = {
  name: "",
  color:"",
  isScratch: "",
  isBark:"",
}
