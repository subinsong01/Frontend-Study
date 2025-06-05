/**
* 인터페이스와 클래스
*/

interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move():void; //move라는 메서드를 반드시 가져야함
}

//Character class는 CharacterInterface를 구현한다는 의미
//첫번째 방법
class Character implements CharacterInterface {
  name: string;
  moveSpeed: number;

  constructor(name: string, moveSpeed: number){
    this.name = name;
    this.moveSpeed = moveSpeed;
  }

  move(): void{
    console.log(`${this.moveSpeed} 속도로 이동 ~`);
  }
} 

//두번째 방법
class Character implements CharacterInterface {
  constructor(
    public name: string, 
    public moveSpeed: number,
    private extra: string,
  ) //무조건 public만 가능
  {}

  move(): void{
    console.log(`${this.moveSpeed} 속도로 이동 ~`);
  }
} 
