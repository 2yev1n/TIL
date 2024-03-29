# REST

: Representational State Transfer 

* 자원을 이름으로 구분하여 해당자원의 상태(정보)를 주고 받는 모든 것을 의미
  => 자원의 표현에 의한 상태 전달 
* REST는 기복적으로 웹의 기존 기술과 HTTP 프로토콜을 그대로 활용 
  => **웹의 장점을 최대한 활용할 수 있는 아키텍처 스타일**

* REST의 구체적인 개념
  * HTTP URL을 통해 자원을 명시하고 HTTP Method(POST, GET, PUT, DELETE)를 통해 해당 자원에 대한 CRUD를 적용하는 것을 의미 함.



### REST가 필요한 이유 ###

* 애플리케이션 분리 및 통합
* 다양한 클라이언트의 등장
  * 다양한 브라우저와 모바일 디바이스에서도 통신을 할 수 있어야 함.



### REST 구성요소

* 자원: URL
  * 모든 자원에 고유한 ID가 존재, 이 자원은 Server에 존재
  * 자원을 구별하는 ID는 '/groups/:group_id'와 같은 HTTP URL
  * 클라이언트는 URL를 이용해서 자워을 지정하고, 해당 자원의 상태에 대한 조작을 Server에 요청
* 행위: HTTP Method
  * HTTP 프로토콜의 Method를 사용
  * `GET`, `POST`, `PUT`, ` PATCH`, `DELETE` 메서드를 제공
* 표현
  * 클라이언트와 서버가 주고 받는 형태로 `JSON`, `XML`, `TEXT`, `RSS` 등 · · ·
  * `JSON`, `XML`을 통해 데이터를 주고 받는 것이 일반적



### REST의 특징

* Server-Client(서버-클라이언트 구조)
  * 자원이 있는 쪽이 Server, 자원을 요청하는 쪽이 Client가 됨
    * REST Server는 API 제공, 비즈니스 로직 처리 및 저장 책임
    * Client는 사용자 인증, context(세션, 로그인 정보) 등을 직접 관리 책임
    * 역할을 확실히 구분함으로써 서로 간의 의존성 줄임
* 무상태
  * HTTP 프로토콜은 무상태 프로토콜이므로 REST 역시 무상태성을 갖음
  * Client의 context를 Server에 저장 X
    * 세션, 쿠키와 같은 context 정보를 신경쓰지 않아도 되므로 구현 단순해짐
  * Server는 각각의 요청을 별개의 것으로 인식하고 처리
    * 각 API서버는 Client의 요청만을 단순 처리함
    * 즉, 이전 요청이 다음 요청의 처리에 연관 되서는 안됨. (DB에 의해 바뀌는 것은 허용)
    * Server의 처리 방식에 일관성 부여 => 서비스의 자유도 상승
* 캐시 처리 기능
  * 웹 표준 HTTP 프로토콜을 그대로 사용하므로 웹에서 사용하는 기존의 인프라를 그대로 활용 가능
    * 즉, 캐싱 기능 적용 가능
  * 대량의 요청을 효율적 처리 가능

* 계층 구조
  * Client는 REST API Server만 호출
  * REST Server는 다중 계층으로 구성
    * 계층을 추가하여 구조 변경 가능
    * Proxy, Gateway와 같은 네트워크 기반의 중간매체 사용 가능
    * 하지만 Client는 Server와 직접 통신하는지, 중간 서버와 통신하는지 알 수 X
* 인터페이스 일관성
  * URL로 지정한 자원에 대한 요청을 통일, 한정적으로 수행하는 아키텍처 스타일 의미
  * HTTP 표준 프로토콜에 따르는 모든 플랫폼에서 사용 가능, 느슨한 결함 형태를 갖음
    * 특정 언어나 기술에 종속 X
* 자체 표현
  * 요청 메시지만 보고도 쉽게 이해할 수 있는 자체 표현 구조 