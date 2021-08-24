ORM - sequelize, 미들웨어, 리프레시 토큰, 이메일 인증관련 모듈 찾기, MVC 패턴

### ORM - Sequelize

ORM(Object-Relational Mapping) :
객체지향 패러다임을 활용하여 관계형 데이터베이스의 데이터를 조작하게 하는 기술
이를 활용하면 쿼리를 작성하지 않고도 객체의 메서드를 활용하는 것처럼 쿼리로직을 작성할 수 있다 

node.js의 대표적인 orm은 sequelize이 있고, 이 외에도 TypeORM , Knew 등이 있다.



### Middleware

미들웨어 : 
클라이언트에게 요청이 오고 그 요청을 보내기 위해 응답하려는 중간(미들)에 목적에 맞게 처리를 하는 함수들 **거쳐가는 함수들**

미들웨어 함수는  req(요청), res(응답), 그리고 어플리케이션 요청-응답 사이클 도중 다음의 미들웨어 함수에 대한 엑세스 권한을 갖는 함수

미들웨어 함수에 대한 엑세스는 next 함수를 이용해서 다음 미들웨어로 현재 요청을 넘길 수 있다. **next를 통해 미들웨어는 순차적으로 처리**



### Refresh Token

Access Token과 똑같은 형태의 JWT 처음에 로그인 완료했을 때 Access Token과 동시에 Refresh Token은 긴 유효기간을 가지면서, Access Token이 만료됐을 때 새로 발급해주는 열쇠가 됨.

예 ) Refresh Token의 유효기간 2주, Access Token의 유효기간을 1시간으로 했을 때, 1시간이 지나면 Access Token은 만료된다. 그러면 Refresh Token의 유효기간 전까지는 Access Token을 새롭게 발급받을 수 있다. 

일정 시간이 지나면 보안을 위해 재발급을 해주는 토큰

![4](https://appservice-guide.s3.ap-northeast-2.amazonaws.com/KR/OAuthguide/4.jpg)

### nodemailer

: node.js에서 사용하는 이메일 전송 라이브러리 

```javascript
const nodemailer = require('nodemailer');

const smtpTransport = nodemailer.createTransport({
  service: "Naver",
  auth: {
    user: "YourEmail@gmail.com",
    pass: "YourPassword"
  },
  tls: {
    rejectUnauthorized: false
  }
});

module.exports = { smtpTransport }
```

**보호되어야 하는 파일이기 때문에 `gitignore` 에 등록해야 한다.**



### MVC 패턴(Model, View, Controller)

하나의 애플리케이션, 프로젝트를 구성할 때 그 구성요소를 세가지의 역할로 구분한 패턴 
프로젝트를 짤 때 구성하는 구조

장 : UI 관련된 부분은 모두 View에 의해 관리
	  모든 데이터와 관련된 로직은 Model에 의해 관리
	  오로지 Controller에 의해 Model에 접근

**View** : 클라이언트와 상호작용이 일어나는 것을 의미 화면에 보여주기 위한 역할을 하는 것

**Controller** : 유저의 요청을 처리해서 응답하는 부분

**Model** : 서비스에 필요한 모든 데이터는 모델에서 정의, 오로지 Model 레이어에 정의된 데이터베이스 schema를 통해서만 데이터베이스에 접근해 CRUD 로직을 처리함

#### Project Layering

* **sever.js**
  Express App으로 서버를 여는 로직
* **app.js**
  Express App 인스턴스를 만들고, 필요한 미들웨어를 붙이는 로직
* **routes**
  라우팅(엔드포인트 나누기)로직
* **controller**
  엔드포인트에 해당하는 함수 로직 
* **services**
  controller에서 넘겨받은 인자로 다양한 알고리즘(필터, 정렬 등)을 처리해서 데이터에 접근하는 로직
* prisma
  데이터베이스에 접근하기 위한 모델이 정의되기 있는 폴더, 아래 모듈은 의존성 없이 다양한 레이어에서 사용될 수 있지만 반복되는 로직이기 때문에 분리해 놓은 폴더
* **middleware**
  컨트롤러에 닿기 전에 반복되는 로직을 모듈화 해 놓는 폴더 
* **utils**
  의존성 없이 모든 레이어에서 공통적으로 자주 사용되는 로직을 모듈화 해 놓은 폴더
* **.env**
  프로젝트 내에서 사용할 환경 변수를 선연해 놓는 곳
