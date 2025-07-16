let arr = [1,2,3,4,5];

arr.forEach((elm) => {
  console.log(elm)
});

arr.forEach((elm.idx) => {
  console.log(`${idx}번째 요소는 ${elm}입니다`);
  console.log(array);
});

//for문으로 *10된 요소들 출력
let newArray = [];

for(let i = 0; i < arr.length; i++){
  newArray.push(arr[i] * 10);
}

console.log(newArray);

//map으로 짧게 구현하기
let arr = [1,2,3,4,5];

let newArray = arr.map((elm) => {
  return elm * 10;
})

console.log(newArray);

//at : 마지막 요소 출력하기에 쉬운1

let colors = ['red', 'purple', 'orange'];
console.log(colors.at(-1));
console.log(colors.includes("yellow");//false
console.log(colors.includes("yellow", 1);//두번째 요소에 숫자는 1번부터 탐색해보라는 의미

console.log(colors.indexOf("purple")); //1

let colors = [
  { id:1, color: "green"},
  { id:2, color: "pink"},
  { id:3, color: "yellow"}
  ];

//findIndex : 객체인 경우에만 가능
let idx = colors.findIndex((elm) => elm.color === "purple");
console.lof(idx); //2


//concat : 배열을 하나로 이어줌
let array1 = ["green", "yellow"];
let array2 = ["purple", "pink"];
console.log(array1.concat(array2));

//sort : 기본적으로 오름차순으로 정렬된다
let colors = ["green", "blue", "purple"];
colors.sort();
console.log(colors) //["blue", "green", "purple"];

//reduce : callback 함수와 initial value가 들어간다
// 누적된 값을 출력하고 싶을 때 유용하다
let numbers = [1, 100, 25, 50];
let sum = numbers.reduce((acc, cur, idx) => {
    console.log(acc, cur, idx);
    return acc + cur
},0);

console.log(sum);

//isArray : 배열인지 아닌지 판별해주는 method
Array.isArray([1,2,3]); //true
