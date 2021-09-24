# CORS란?
CORS, Cross-Origin Resource Sharing 교차 출처 리소스 공유 이다.  
CORS는 추가 HTTP 헤더를 사용하여, 한 출처에서 실행 중인 웹 애플리케이션이 다른 출처의 선택한 자원에 접근할 수 있는 권한을 부여하도록 브라우저에 알려주는 체제 이다. 

CORS의 예시
`https://domain-a.com`의 프론트 엔드 Javascript 코드가 XMLHttpRequest를 사용하여 `https://domain-b.com/data.json`을 요청하는 경우  
  

## 출처(Origin)란?
출처란 URL 구조에서 Protocol, Host, Port를 합친 것을 말한다.

### SOP, Same-Origin Policy란
보안 상의 이유로, 브라우저는 스크립트에서 시작한 교차 출처 HTTP요청을 제한한다. API를 사용하는 웹 애플리케이션은 자신의 출처와 동일한 리소스만 불러올 수 있으며, 다른 출처의 리소스를 불러오려면 그 출처에서 올바른 CORS 헤더를 포함한 응답을 반환해야한다.  

## CORS 동작 원리
### Simple request
단순 요청 방법은 서버에게 바로 요청을 보내는 방법이다. 아래 그림은 자바스크립트에서 API를 요청할 때 브라우저와 서버의 동작을 나타내는 그림이다. 
![](https://beomy.github.io/assets/img/posts/browser/cors_simle_request.png)  
단순 요청은 서버에 API를 요청하고, 서버는 `Access-Control-Allow-Origin` 헤더를 포함한 응답을 브라우저에 보낸다. 브라우저는 `Access-Control-Allow-Origin` 헤더를 확인해서 CORS 동작을 수행할지 판단한다.
  
**Simple request 조건**  
+ 요청 메서드는 GET, HEAD, POST 중 하나여야 한다.
+ Accept, Accept-Language, Content-Language, Content-Type, DPR, Downlink, Save-Data, Viewport-Width, Width를 제외한 헤더를 사용하면 안된다.
+ Content-Type 헤더는 application/x-www-form-urlencoded, multipart/form-data, text/plain 중 하나를 사용해야 한다.
  

### Preflight request
Preflight 요청은 서버에 예비 요청을 보내서 안전한지 판단한 후 본 요청을 보내는 방법이다. 아래 그림은 Preflight 요청 동작을 나타내는 그림이다.  
![](https://beomy.github.io/assets/img/posts/browser/cors_preflight_request.png)



https://beomy.github.io/tech/browser/cors/
https://developer.mozilla.org/ko/docs/Web/HTTP/CORS
