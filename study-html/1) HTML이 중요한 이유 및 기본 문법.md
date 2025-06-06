# 🤔 HTML이 왜 중요해? 

<img width="600" height="300" alt="스크린샷 2024-10-17 오후 12 10 44" src="https://github.com/user-attachments/assets/52f5a036-f326-4f25-a810-07ba5a824fc3">

- 웹 페이지의 모든 것은 `HTML`로부터 시작되기 때문이다.
- 웹 페이지에 보이는 모든 것들은 기승전 HTML 태그의 결과물이다.
- `Semantic MarkUp = Search Engine Optimization = SEO(검색 엔지 최적화)가 가장 중요`

**1. 태그 Tag 해부학**
```html
<h1>송수빈</h1>
<p>반갑습니다</p>
<a href="#">링크</a>
<p attr="value"></p>
```
`<p attr="value"></p> = 속성(attribute)을 통해 추가적인 정보를 제공한다`

**2. 제목과 문단 Heading&Paragraph**<br/>
- `<h1>제목</h1>`
  -  `<h1>` `<h2>` `<h3>` `<h4>` `<h5>` `<h6>` > 중요한 순서대로 <br/>
- `<p>문단</p>`

**3. 강조**<br/> : `em`과 `strong`의 사용 차이는 없고, 원하는 거 사용하면 된다 
- `<em>`
- `<strong>`

**4. 링크** <br/> : `<a>`를 사용하며, `href attribute`가 필수적으로 들어간다
- `<a href="" />`
- `<href>` 주소값 표기 방법
  - **WEB URL**
  - **페이지 내 이동**
  - **메일 쓰기 : `<a href="mailto:메일주소"/>`**
  - **전화 걸기 : `<a href="tel:전화번호" />`**
  - **`target="_blank"`** : 열 때 새탭으로 열게 해줌 

**5. 이미지**  <br/> : `<img src="#" alt="" />`를 사용한다

- alt : 시야가 안 보이는 분들을 위함(screen reader) = 대체 텍스트 역할이다.
- 절대 경로 : 링크 넣어주기(https:// ~)
- 상대 경로 : 폴더구조가 images/cat.jpg이면 ➡️ `<img srx="./images/cat.jpg alt=""/>`

**6. 목록** <br/> : `<ul>, <ol>`를 사용한다.
- `<ul>` : 순서가 중요하지 않은 목록
- `<ol>` : 순서가 중요한 목록
- `<li>` :  `<ul>`과 `<ol>`의 자식으로 사용된다

**7. 정의 리스트** <br/> : `<dl>, <dt> == key(용어) , <dd> == description data, <dfn> == 정의` 순서로 사용한다.

- 용어를 정의할 때
- key-value로 정보를 제공할 때 {key: value}
- `<d1>`없이 다른 것들은 독립적으로 사용이 불가능하다.

**8. 인용**  <br/> : `<blockquote> : 인용`, `<cite> : 출처`

- 일반적으로 `<blockquote>`와 `<cite>` 형식으로 작성하는 것이 정석이며, 출처를 알고 싶을 때는 `<blockquote cite="">`형식으로 사이트를 넣어주면 더 완벽한 형태라고 할 수 있다.
- `<q>` : 문장 내에 있는 부분을 인용할 때 사용한다(""가 생김)

**9. <Form / >으로 입력받기** <br/> : 사용자에게 입력을 받는 것 

- `<action>` = "API 주소"
- `<method>` = "GET | POST"
- `<input>` = `<input type="text" />` : 입력창
- `<placeholder>`: 아무것도 없을 때 보여주는 문구
- `<maxlength="">, <minlength="">`: 문자의 한계를 제한할 때
- `<required>`: 필수적으로 필요할 때
- `<disabled>`: 입력을 못 하게 막아두는 것
- `<value>` : 기본적으로 작성되는 것(변경이 불가한 부분) <br />

✏️ **input type** : 유효성 검사 
- `<email>` : 이메일(@)가 없으면 오류 발생
- `<password>` : 암호화 형식으로 출력된다 
- `<url>`: url 값만 입력이 가능
- `<number>`: 숫자만 입력 가능 
- `<file>` : `accept = ".png, .jpg" ` attribute
  
✏️ **label 태그** : 어떤 input(id가 명시되어 있어야 함) field랑 연결 되어있는지 보여준다
```html
  <label for="user-name">이름</label>
  <input type="text" id="user-name" />
```
- label을 클릭하면 결과적으로 input form에 focus가 되고 이런 부분이 사용자 측면을 고려한 것이다.

✏️ **radio box - check box** 

- **radio button**을 사용할 때는 반드시 `value`를 넣어줘야 한다
  - name은 둘 다 같은 값을 사용해줘야 한다 = 연관된 것이라는 부분을 알려주기 위한 것
  - 다중 선택이 불가능하다 
```html
  <form action="" method="GET">
    <input type="radio" name="subsription" value="subscribed" id="subscribed" />
    <label for="subscribed">구독중</label>
    <input type="radio" name="subsription" value="unsubscription" id="unsubscribed" />
    <label for="subscribed">미구독</label>
```
- **checkbox**을 사용할 때는 반드시 `value`를 넣어줘야 한다.
  - name은 둘 다 같은 값을 사용해줘야 한다 = 연관된 것이라는 부분을 알려주기 위한 것
  - 다중 선택이 가능하다.
  
✏️ **select box**

- **select**을 사용할 때는 반드시 `name`을 넣어줘야 한다
- 다중 선택을 하고 싶은 경우에 `multiple`을 attribute로 넣어주면 된다.

✏️ **Text Area**

- `<textarea>`는 블로그와 같은 긴 글을 작성할 때 사용한다.

✏️ **button**을 사용할 때는 반드시 `type`을 넣어줘야 한다

-`<submit>` : form을 제출하는 경우에 사용한다. <br />
-`<button>` : 대부분 button을 많이 사용한다.

**10. Table - 기본 구조** 

- `<th>`랑 `<td>`랑 숫자가 같아야 한다.

```html
<table>
  <tr> 
    <th>테이블 헤더</th> 
    <td>테이블 데이터</td>
  </tr>
</table>
```
**11. Table - 심화** 

- `<rowspan> = 2` : 두 칸을 합쳐서 사용하겠다(세로) > 다음 <tr> 부분은 생략하면 된다 
- `<colspan> = 6` : 여섯칸을 합쳐서 사용하겠다(가로)
- `<th>`한테만 사용이 가능한 것 = scope(row | col)

**12. 미디어 파일(Media)** 

- 오디오 삽입
```html
<audio src="" controls/>
<audio src="" loop autoplay/>
<audio src="" autoplay/> /*자동 재생*/ 
```
  - 오디오 삽입 > **사용자 친화적**
```html
<audio controls>
  <source src="./assets/audios/cat.wav" type="audio/wav"/>
  <source src="./assets/audios/cat.wav" type="audio/mpeg"/>
  <source src="./assets/audios/cat.wav" type="audio/mpeg"/>
  <p>
   당신의 브라우저를 버리시고 크롬을 사용하시는게 어떨까요?
  </p>
</audio>
```
- 비디오 태그 : 오디오 태그랑 굉장히 유사하다
  
```html
<video src="" controls/>
<video src="" loop autoplay/>
<video src="" autoplay/> /*자동 재생*/
```
**13. Etc** 

- `<abbr title="풀네임">약어</abbr>` : 약어
```html
<p>
너 혹시 <addr title="Attention deficit hyperactivity disorder">ADHD</addr>니 ?
</p>
```
이런식으로 하면 `ADHD`를 눌렀을 때 풀네임으로 나온다

- `<address>`
  - 1. (물리적)주소
  - 2. URL
  - 3. email 주소
  - 4. 전화번호
  - 5. SNS
   
- `<pre>` : 내가 타이핑한 그대로 출력이 된다.
- `<code>`: 일반적으로 `<pre>`와 함께 쓰인다 
