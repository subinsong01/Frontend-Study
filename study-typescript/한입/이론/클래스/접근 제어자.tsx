/**
* 접근 제어자 : 메서드에 접근할 수 있는 범위를 설정하는 문법
- public : 아무것도 제한하지 않는다
- private: 메서드에서만 사용하는 경우 사용 <-> readOnly랑은 다름 
- protected : 파생클래스에 메서드 안에서는 접근이 가능
- 생성자에게 접근 제어자를 붙이고 싶으면 필드 정의는 생략하기 ! 
*/


//public
class Dog {
  public name: string = "초코"

  public bark() {
    console.log(`${this.name}가 짖어요! 멍멍!`)
  }
}

const dog = new Dog()
console.log(dog.name) // ✅ 접근 가능
dog.bark()            // ✅ 접근 가능

//private
class Cat {
  private secret: string = "물 마시는 시간은 비밀이야"

  public sayHello() {
    console.log("야옹!")
    console.log(this.secret) // ✅ 내부에서는 사용 가능
  }
}

const cat = new Cat()
cat.sayHello()              // ✅ OK
// console.log(cat.secret)  // ❌ Error! 밖에서는 못 봐요

//protected
class Animal {
  protected sound: string = "동물 소리"

  public makeSound() {
    console.log(this.sound) // ✅ OK
  }
}

class Bird extends Animal {
  public sing() {
    console.log(this.sound + " + 짹짹!") // ✅ OK (자식 클래스니까)
  }
}

const bird = new Bird()
bird.sing()               // ✅ OK
// console.log(bird.sound) // ❌ Error! 밖에서는 못 봐요

