## NoSQL , SQL

**SQL(관계형 DB)** : RDBMS에서 데이터를 저장, 수정 삭제 및 검색 가능 
데이터는 **정해진 데이터 스키마에 따라 테이블에 레코드로 저장**되고 **관계를 통해 여러 테이블에 분산**된다. **스키마를 준수하지 않은 레코드는 테이블에 추가 X** , 데이터의 중복을 피하기 위해 '관계'를 이용함 **테이블 간의 JOIN 지원** 그래서 **안전성과 일관성**이 우수
대표적으로는 MySQL

**NoSQL(비관계형 DB)** : 단순히 기존 관계형 DBMS가 갖고 있는 특성 뿐만 아니라, 다른 특성들을 부가적으로 지원하다는 것을 의미
**스키마도 관계도 없어서 컬렉션을 만들면 어떠한 데이터든 들어갈 수 있다.**
**JOIN 기능 미지원** 하나의 쿼리로 여러 테이블을 합치는 작업이 항상 가능하지는 않다. 동시에 쿼리를 수행하는 경우 쿼리가 섞여 예상치 못한 결과를 낼 가능성이 있다는 단점이 있다.
데이터의 일관성을 보장해주는 기능이 약한 대신, **데이터를 빠르게 넣을 수 있고 쉽게 여러 서버에 데이터를 분산할 수 있어서 확장성과 가용성은 우수** 
대표적으로는 몽고디비 

|  SQL   |  NoSQl   |
| :----: | :------: |
| 테이블 |  컬렉션  |
|  로우  | 다큐먼트 |
|  컬럼  |   필드   |
