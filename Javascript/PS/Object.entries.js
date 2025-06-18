//Object.entries()?
//객체 obj의 key-value 쌍을 배열로 바꿔주는 문법이다.
//결과는 [[key1, value1], [key2, value2], ...] 이런 식이다.

//문법
Object.entries(obj)

//예시1
const weights = {
  A: 10000,
  C: 1010,
  G: 100,
  F: 1,
};
Object.entries(weights);

//결과
[
  ["A", 10000],
  ["C", 1010],
  ["G", 100],
  ["F", 1]
]

//사용하는 이유
//이렇게 배열로 바꾸면 정렬하기 쉬워진다.

//예시2
Object.entries(weights).sort((a, b) => b[1] - a[1]) //value(가중치) 기준으로 내림차순 정렬하는 코드
Object.entries(weights).sort((a, b) => b[1] - a[1]) .map(([char]) => char) //["A", 10000] 이런 구조에서 문자만 뽑아낸다. 최종적으로 가중치 높은 문자 순서대로 배열이 만들어진다.



 
