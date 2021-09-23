![HTTP](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fczg6hw%2FbtreYcsbn45%2FB6Je0841HSwFfzkzH0oi6k%2Fimg.png)

HTTP, Hyper Text Transfer Protocol의 약자로, W3(World Wide Web) 상에서 정보를 주고받을 수 있는 포로토콜(규약)이다.

TCP/IP 레이어를 기반으로 사용한다.

HTTP는 클라이언트와 서버 사이에 이루어지는 요청/응답(request/response) 프로토콜이다.  

##### _클라이언트 client, 네트워크를 통하여 서버라는 다른 컴퓨터 시스템 상의 원격 서비스에 접속할 수 있는 응용 프로그렘이나 서비스를 말한다._

##### _서버 server, 클라이언트에게 네트워크를 통해 정보나 서비스를 제공하는 컴퓨터 시스템으로 컴퓨터 프로그램 또는 장치를 의미한다._  


![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FXVgxm%2FbtreYaA87RJ%2FDLODJ3LsJNS9O2mtQGu7X1%2Fimg.png)


Chrome 개발자 도구를 통해서 확인해보자.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FqaUqZ%2FbtreOtI5fAR%2FuxzEpes9OOb7wxs9hkY8Hk%2Fimg.png)

개발자 도구의 네트워크 탭에 가면 요청/응답에 대한 정보를 확인할 수 있다. 

내 블로그에 GET방식으로 요청을 했고 http 응답 상태 코드는 200으로 응답이 성공적으로 완료됐다.

[HTTP 상태 코드](https://developer.mozilla.org/ko/docs/Web/HTTP/Status)

  


### HTTP의 구조

![HTTP 구조](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FvIX2c%2Fbtre7IqKu6Q%2FIsIrKjmicHXqyd3ZYtZqvK%2Fimg.png)

HTTP는 애플리케이션 레벨의 프로토콜로 TCP/IP 위에서 작동한다. HTTP는 상태를 가지고 있지않은 프로토콜이며 Method, Path, Version, Headers, Body 등으로 구성된다.

HTTP는 암호화가 되지 않은 평문 데이터를 전송하는 프로토콜이므로, HTTP로 비밀번호나 주민등록번호 등의 개인정보를 주고 받으면 제 3자가 정보를 조회할 수 있었다. 

이러한 문제를 해결하기 위해 HTTPS가 등장하게 되었다.

### HTTPS

HTTPS, Hyper Text Transfer Protocol over Secure socket layer의 약자로서, HTTP의 보안이 강화된 버전이다.  
HTTPS는 소켓 통신에서 일반 텍스트를 이용하는 대신에 SSL이나 TLS 프로토콜을 통해 세션 데이터를 암호화한다. 따라서 데이터의 적절한 보호를 보장한다.  

##### _HTTPS는 공개키/개인키 암호화 방식을 이용해 데이터를 암호화하고 있다. 공개키와 개인키는 서로를 위한 1쌍의 키이다._

##### _공개키: 모두에게 공개가능한 키, 개인키: 나만 가지고 알고 있어야하는 키_


[https://www.zerocho.com/category/HTTP/post/5b3723477b58fc001b8f6385](https://www.zerocho.com/category/HTTP/post/5b3723477b58fc001b8f6385)

[https://ko.wikipedia.org/wiki/HTTPS](https://ko.wikipedia.org/wiki/HTTPS)

[https://mangkyu.tistory.com/98](https://mangkyu.tistory.com/98)