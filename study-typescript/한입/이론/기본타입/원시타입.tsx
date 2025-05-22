//원시타입 : 하나의 값만 저장하는 타입 
//`number` `string` `boolean` `null` `undefined`

//number
// : number 이런 방식을 타입 주석(annotation)이라고 한다
let num1: number = 123;
let num2: number = -123;
let num3: number = Infinity;
let num4: number = NaN;

//string
let str1: string = "hello";
let str3: string = `hello`;
let str4: string = `hello ${num1}`;

//boolean
let bool1: boolean = true;
let bool2: boolean = false;

//null
let null1: null = null;

//undefined
let unde1: undefined = undefined;

//리터럴 타입 > 변수의 타입을 그 값 자체로 정의 ! 다른 값을 넣으면 오류 발생
let numA: 10 = 10;
let strA: "hello" = "hello";
