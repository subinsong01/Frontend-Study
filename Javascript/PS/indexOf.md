# 💡 알고리즘 풀이를 위한 기본 문법
**reference :https://hianna.tistory.com/379**

> 3️⃣ JS - indexOf()

**특정 문자 위치 찾기**
- indexOf는 Javascript의 문자열에서 특정 문자의 위치를 찾기 위해서 사용한다.

```js
//사용방법 
string.indexOf(searchvalue, position)
```
indexOf 함수는, 문자열(string)에서 특정 문자열(searchvalue)을 찾고, 검색된 문자열이 '첫번째'로 나타나는 위치 index를 리턴한다.
- searchvalue : 필수 입력값, 찾을 문자열<br/>
- position : optional, 기본값은 0, string에서 searchvalue를 찾기 시작할 위치
- 찾는 문자열이 없으면 -1을 리턴
- 문자열을 찾을 때 대소문자를 구분

```js
const str = "abab";

document.writeln(str.indexOf('ab')); // 0
document.writeln(str.indexOf('ba')); // 1
document.writeln(str.indexOf('abc')); // -1
document.writeln(str.indexOf('AB')); // -1
```

📍 **검색 시작 index 지정하기**
```js
let str = "Hello, world!";
let index = str.indexOf("o", 5);
​
document.writeln(index); //return 8
```
