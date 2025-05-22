//enum 타입
//여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
//자바스크립트에는 없고 타입스크립트에만 있다.

enum Role {
  ADMIN = 0, //10 (알아서 증가함)
  USER = 1, // +1
  GUEST = 2, //+1
} //숫자를 지워도 자동으로 할당된다 > 숫자형 enum

enum Language {
  korea = "ko",
  english = "en",
}
const user1 = {
  name: "수방",
  role: Role.ADMIN,
  language: Language.korea,
};

const user2 = {
  name: "은석",
  role: Role.USER,
  language: Language.english,
};

const user3 = {
  name: "영철",
  role: Role.GUEST,
  language: Language.english,
};

console.log(user1, user2, user3);
