/**
* 타입스크립트의 클래스
*/

/** 
 1. 규모가 큰 애플리케이션에서 모델 계층, 서비스 계층, 유즈케이스 계층을 구조화하기 위해 자주 사용
 2. 상속(extends)이 필요할 때 : 공통 로직을 부모 클래스에 정의하고, 여러 자식 클래스에서 재사용할 수 있어 코드 중복을 줄이고 유지보수성 향상에 효과적
**/
const employee = {
    name: "수빈",
    age: 13,
    position: "developer",
    work(){
      console.log("일 좀");
    },
};

//클래스 정의  : 직원 객체를 만들기 위한 설계도
class Employee {
  //필드
  name: string;
  age:number;
  position:string;

  constructor(name: string, age: number, position: string){
    this.name = name;
    this.age = age;
    this.position = position;
  }

  //메서드
  work(){
    console.log("일함");
  }
}

class ExecutiveOfficer extends Employee {
  //ExecutiveOfficer는 Employee를 상속받은 클래스
  officeNumber: number;
  
  //생성자
  constructor(
    name: string, 
    age: number,
    position: string,
    officeNumber: number
){
    super(name, age, position); // 부모 생성자 호출(부모 클래스의 생성자를 호출)
    this.officeNumber = officeNumber;
  } }
const employeeB = new Employee("숩", 27, "개발자");
console.log(employeeB);

const employeeC: Employee = {
  name: "",
  age: 0,
  position: "",
  work(){},
};

