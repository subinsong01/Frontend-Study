# 🖥️ Document Type Declaration 
```
= DTD 선언
= 문서 형식 선언
```
```html
<!DOCTYPE html> 
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
</body>
</html>
```
- **`<body>`** : 문서의 모든 콘텐츠는 이 안에서 작성한다
- **`<head>`** : meta data 삽입
-----------------

✏️ **`<title>`** : 대제목 역할을 하며, `<head>` 태그 안에 필수로 삽입이 되어야 한다. 
  - 🥳 **검색 최적화에 너무 중요(SEO)** <br />

✏️ **`<style>`** : css 파일을 첨부하는 방법(body에 직접 `<style>`을 넣어서 css를 작업해도 되지만 추천하는 방식은 아니며, 아래 코드를 '<head>`에 삽입하여 css를 따로 관리하는 것이 일반적
```html
<link rel="stylesheet" href="./styles.css">
```
✏️ **`<script>`** : js 파일을 `body`에 첨부하는 방법이다.(body에 직접 `<script>`를 넣어서 js 문법 형식으로 코드를 작성해도 되지만 일반적으로 파일을 따로 만들어서 관리한다. 
```html
<script src="./app.js"></script>
```
### 🚀 여기서 잠깐 !
`<title>`, `<style>`은 `<head>`에 작성하는데 왜 `<script>`는 왜 `<body>`에 작성하는거지..?라는 의문이 들거임 !!

**Why?**
1. 렌더링 차단: <script> 태그는 기본적으로 HTML 문서가 이를 만나는 순간 실행된다. 그래서 HTML 문서를 해석하다가 <script>를 만나면 해당 스크립트를 모두 다운로드하고 실행할 때까지 렌더링이 중단되고, 이는 페이지 로딩 속도에 영향을 줄 수 있다.

2. HTML 요소 접근: <script>가 <head>에 있을 때, 스크립트가 실행될 시점에 아직 필요한 HTML 요소들이 로드되지 않았을 수 있다. 반면, <script>를 <body>의 맨 마지막에 배치하면 모든 HTML 요소가 먼저 로드된 후 스크립트가 실행되기 때문에 JavaScript로 해당 요소들에 접근할 때 문제가 줄어든다.

3. 비동기와 지연 로딩 옵션: <script> 태그에 async나 defer 속성을 사용하면 <head>에 작성하더라도 렌더링 차단 문제를 해결할 수 있다. async는 스크립트를 비동기로 로드해 로드가 완료되면 즉시 실행하지만, defer는 HTML 파싱이 완료된 후에 스크립트를 실행한다.


✏️ **`<meta>`**

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="keywords" content="송수빈, 프론트앤드, FE">
<meta name="description" content="페이지에 대한 설명(접근성을 위한 것)">
```
