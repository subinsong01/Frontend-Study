//padStart : 문자열(String) 메서드로, 문자열의 앞쪽에 문자를 붙여서 원하는 길이만큼 채워주는 함수

str.padStart(targetLength, padString);
/*
targetLength	최종적으로 만들고 싶은 문자열 길이
padString	앞을 채울 문자열 (보통 "0"을 많이 씀) 
*/

"5".padStart(2, "0");     // "05"
"42".padStart(4, "0");    // "0042"
"hello".padStart(8, "*"); // "***hello"
"99".padStart(2, "0");    // "99" (이미 2자리면 그대로)


//padEnd() : 문자열(String) 메서드로, 문자열의 뒤쪽에 문자를 붙여서 원하는 길이만큼 채워주는 함수
str.padEnd(targetLength, padString);

"5".padEnd(2, "0");       // "50"
"42".padEnd(4, "0");      // "4200"
"hi".padEnd(6, ".");      // "hi...."
"hello".padEnd(8, "*");   // "hello***"
