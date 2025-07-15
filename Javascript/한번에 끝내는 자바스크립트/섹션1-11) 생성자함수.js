/*생성자 함수 
- 동일한 구조의 객체 쉽게 생성
- 코드의 재사용성 높아짐
- 반복되는 코드 작성 감소
*/

function Person(name, age) {
  this.name = name;
  this.age = age;

  this.sayHello = function () {
    console.log(`안녕하세요, 제 이름은 ${this.name}이고, 나이는 ${this.age}살입니다.`);
  };
}

const user1 = new Person('수빈', 25);
user1.sayHello(); // 안녕하세요, 제 이름은 수빈이고, 나이는 25살입니다.
