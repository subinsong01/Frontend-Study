//타입 별칭 > 타입을 마치 변수처럼 정의해서 사용
//주의사항: 같은 scope 내에서는 중복해서 정의해주면 안된다.
//컴파일 했을 때, 자바스크립트에서는 type User가 사라짐
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user1: User = {
  id: 1,
  name: "subin",
  nickname: "haely",
  birth: "1997-12-01",
  bio: "하이",
  location: "분당",
};

let user2: User = {
  id: 1,
  name: "subin",
  nickname: "haely",
  birth: "1997-12-01",
  bio: "하이",
  location: "분당",
};


//인덱스 시그니처 > 규칙이 있으면 이런식으로 사용

type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};
type CountryNumberCodes = {
  [key: string]: number;
  //Korea: string; //오류 발생 string이 아닌 number가 되어야한다. 이건 똑같이 가지고 가야함
  Korea: number;
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
};
