# 📕 Chapter11) 심화학습

## **🚀 목차**

```
- 정규식 생성
- 메소드
- 플러그
- 패턴1
- 패턴2
```

## 📂 정규식 생성

- 문자 검색
- 문자 대체
- 문자 추출 
  
`생성자` 

```
new RegExp('표현', '옵션')
new RegExp('[a-z]', 'gi')
```
`리터럴`
```
/표현/옵션
/[a-z]/gi
```
```js
const regexp = /the/gi //the와 match 되는 부분을 보여준다(대소문자 구문X)
console.log(str.match(regexp));
```

## 📂 메소드

- 정규식.test(문자열) : 일치 여부 반환 (true, false)
- 문자열.match(정규식) : 일치하는 문자의 **배열 반환**
- 문자열.replace(정규식, 대체문자) : 일치하는 문자를 대체 

## 📂 플래그

- g : 모든 문자 일치(global)
- i : 엉어 대소문자를 구분 않고 일치
- m : 여러 줄 일치, 각각의 줄을 시작과 끝으로 인사

```js
console.log(str.match(/the/));
console.log(str.match(/the/g));
console.log(str.match(/the/gi));
```
