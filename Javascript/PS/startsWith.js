//startsWith()는 문자열이 특정 문자열로 시작하는지를 확인하는 문자열 메서드
//기본 문법

str.startsWith(searchString[, position])
//str: 검사할 문자열
//searchString: 이 문자열로 시작하는지 확인할 대상
//position (선택): 검사 시작 위치 (기본값은 0)

const phone_book = ["119", "97674223", "1195524421"];
phone_book.sort(); // ["119", "1195524421", "97674223"]

console.log(phone_book[1].startsWith(phone_book[0])); // true

//boolean으로 반환
