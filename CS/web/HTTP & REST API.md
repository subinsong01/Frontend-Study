# ✨ HTTP 메서드 

- 클라이언트는 요청의 목적에 따라 적절한 `http`메서드를 사용한다.
- 대표적인 `http`메서드
  
  <img width="500" alt="스크린샷 2025-03-11 오후 4 44 00" src="https://github.com/user-attachments/assets/c86ac622-4f94-4d69-926a-4322322d68f0" />

- 특정한 웹 사이트에 접속하면, 기본적으로 `GET`방식으로 호출을 진행한다
- `http`는 상태를 저장하지 않는다(Stateless)
- 클라이언트는 HTTP로 서버에 연결한 뒤에, 응답을 받으면 연결을 끊어버린다.
  - 서버 입장에서 접속 유지에 대한 요구가 적어, 불특정 다수를 대상으로 하는 서비스에 적합하다
- ex) 상품 확인 -> 장바구니 -> 결제의 과정이 시스템적으로 **상태 정보로 기록되지 않는다**
- 하지만, **세션**을 이용해 원하는 기능이 수행되도록 한다.
  
**🧐 Keep Alive**
1. HTTP 1.1 버전부터 keep-alive를 지원한다
2. 하나의 웹 사이트에 방문하면 대개 수십 개의 파일을 제공한다.
3. TCP 통신 과정에서 연결 수행 / 연결 해제 과정에서 리소스가 많이 소요된다.
4. `keep-alive`는 이런 파일을 하나씩 받기 위하여 매번 연결을 맺고 끊는 것을 방지한다.

# ✨ REST API 
- 서비스가 서로 다른 방식으로 개발하면, 개발자 사이의 소통 문제가 발생할 수 있기 때문에 기준이 되는 아키텍처 `REST`를 채택한다.

🌱 **REST 이해하기**
- REST = Representational State Transfer
- 말 그대로 특정한 자원에 대하여, 자원의 상태에 대한 정보를 주고받는 개발 방식이다.
- 구성요소
  
  <img width="352" alt="스크린샷 2025-03-11 오후 4 54 29" src="https://github.com/user-attachments/assets/7d0a0ea5-3614-418d-81b5-0e940eaa80a7" />

ex) REST 방식을 채택한 서버로 요청을 보내는 예시

1. 클라이언트가 회원가입을 하고 싶음
2. 이때, 아이디 : 'gildong', 비밀번호 : '1234'로 하고 싶다!

  <img width="352" alt="스크린샷 2025-03-11 오후 4 57 12" src="https://github.com/user-attachments/assets/a0546731-df31-4007-9de6-274d051bfed9" />
  <img width="352" alt="스크린샷 2025-03-11 오후 4 57 43" src="https://github.com/user-attachments/assets/abf37164-8269-4ca2-bed5-cc6348d8667b" />

3. API : 프로그램이 상호작용하기 위한 인터페이스
4. REST API 호출 : REST 방식을 따르고 있는 서버에 특정한 요청을 전송하는 행위

  <img width="400" alt="스크린샷 2025-03-11 오후 4 58 52" src="https://github.com/user-attachments/assets/038fa2fc-7164-467f-a97d-e71b1abb7e1d" />

🌱 **목킹(mocking)**

- 어떠한 기능이 있는 것처럼 흉내내어 구현한 것을 의미
- 클라이언트 개발을 위해 간단히 서버 기능을 테스트하고 싶을 때 사용

  <img width="350" alt="스크린샷 2025-03-11 오후 5 00 48" src="https://github.com/user-attachments/assets/3ac0c4ca-c3a7-42bf-8722-cda52f0452fe" />

  <img width="350" alt="스크린샷 2025-03-11 오후 5 01 08" src="https://github.com/user-attachments/assets/7e59d6c5-347b-4ef5-983d-a434b61ae8f8" />

