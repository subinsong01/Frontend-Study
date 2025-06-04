/**
* 함수 타입 호환성 : 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는 
* 1. 반환값의 타입이 호환되는가?
* 2. 매개변수의 타입이 호화되는가?
*/ 

//1. 반환값이 호환되는가? 
type A = () => number;
type B = () => 10;

let a: A = () => 10; //number
let b: B = () => 10; //number 리터럴 (number 타입의 하위타입)

a = b // a에게 b를 삽입
// b = a; //오류 발생(다운캐스팅 되어서 오류 발생)

//기준2. 매개변수가 호환되는가?

//2-1. 매개변수의 개수가 같을 때

type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

c = d; //오류 발생 (업캐스팅일 때 오류 발생)
d = c; //다운캐스팅일 때 오류 발생 안 함

//2-2. 매개변수의 개수가 다를 때 

type Func1 = (a:number, b:number) => void;
type Func2 = (a: number) => void;

let fun1: Func1 = (a, b) => {};
let fun2: Func2 = (a) => {};

func1 = func2; // 더 적은 파라미터를 가진 함수가 더 많은 파라미터를 받는 타입에 할당 가능
func2 = func1; //오류 발생
