//문자열을 사전순으로 비교할 때 사용하는 JavaScript 내장 함수
string1.localeCompare(string2)
//string1이 string2보다 앞에 있으면 -1 반환
//string1이 string2와 같으면 0 반환
//string1이 string2보다 뒤에 있으면 1 반환

//✅ 사전 순 
let words = ["banana", "apple", "grape", "cherry"];

words.sort((a, b) => a.localeCompare(b));
console.log(words);

//결과
//[ 'apple', 'banana', 'cherry', 'grape' ]

//✅ 대소문자 구분 (기본)
let words = ["Banana", "apple", "Grape", "cherry"];

words.sort((a, b) => a.localeCompare(b));
console.log(words);
//결과
//[ 'Banana', 'Grape', 'apple', 'cherry' ] | 🚨 기본적으로 대문자가 소문자보다 먼저 온다!

//✅ 한글 정렬
let words = ["사과", "배", "바나나", "귤", "자두"];

words.sort((a, b) => a.localeCompare(b, "ko"));
console.log(words);
//결과
//[ '귤', '바나나', '배', '사과', '자두' ]
