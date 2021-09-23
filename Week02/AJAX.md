# AJAX란
AJAX, Asynchronous Javascript and XML의 약자이다.

비동기적인 웹 애플리케이션 제작을 위해 아래와 같은 조합을 이용하는 웹 개발 기법이다.

표현 정보를 위한 HTML(또는 XHTML)과 CSS
동적인 화면 출력 및 표시 정보와의 상호작용을 위한 DOM, Javascript
웹 서버와 비동기적으로 데이터를 교환하고 조작하기 위한 XML, XSLT, XMLHttpRequest


AJAX는 서버와 통신하기 위해 XMLHttpRequest 객체를 사용하는 것을 말한다. JSON, XML, HTML 그리고 일반 텍스트 형식 등을 포함한 다양한 포맷을 주고 받을 수 있다. AJAX의 강력한 특징은 페이지 전체를 리프레쉬하지 않고서도 수행 되는 비동기성이다. 이러한 비동기성을 통해 사용자의 Event가 있으면 전체 페이지가 아닌 일부분만을 업데이트 할 수 있게 해준다.



##### _Synchoronous, 동기_

##### _요청과 그 결과가 동시에 일어나는 것, 바로 요청을 하면 시간이 얼마가 걸리던지 요청한 자리에서 결과가 주어져야한다._

##### _Asynchronous, 비동기_

##### _요청과 결과가 동시에 일어나지 않는 것, 요청한 그 자리에서 결과가 주어지지 않는다._

##### _동기는 설계가 매우 간단하고 직관적이지만 결과가 주어질 때까지 아무것도 못하고 대기해야 하는 단점이 있다._

##### _비동기는 동기보다 복잡하지만 결과가 주어지는데 시간이 걸리더라도 그시간 동안 다른 작업을 할 수 있으므로 자원을 효율적으로 사용할 수 있는 장점이 있다._



AJAX의 특징은 페이지 새로고침 없이 서버에 요청이 가능하고, 서버로부터 데이터를 받고 작업을 수행한다.



AJAX 동작 원리
![](https://blog.kakaocdn.net/dn/yUaEQ/btrfPAFnyuy/aGXkT5AtsaWIwCGPKZScL0/img.png)

1. 사용자에 의한 요청 이벤트 발생

2. 요청 이벤트가 발생하면 이벤트 헨들러에 의해 자바스크립트가 호출

3. 자바스크립트는 XMLHttpRequest 객체를 사용하여 서버로 요청을 보냄
  이때 웹 브라우저는 요청을 보내거 나서, 서버의 응답을 기다릴 필요없이 다른 작업을 처리할 수 있다.

4. 서버는 전달받은 XMLHttpRequest 객체를 가지고 AJAX요청을 처리

5.
6. 서버는 처리한 결과를 HTML, XML 또는 JSOM 형태의 데이터로 웹 브라우저에 전달  
  이때 전달되는 응답은 새로운 페이지를 전부 보내는 것이 아니라 필요한 데이터만을 전달

7. 서버로부터 전달받은 데이터를 가지고 웹 페이지의 일부분만을 갱신하는 자바스크립트를 호출

8. 결과적으로 웹 페이지의 일부분만이 다시 로딩되어 표시됨





## 예제
html
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
    <button id="test">BUTTON</button>
    <script src="./index.js"></script>
</body>
</html>
```
js
```js
// id="test"인 요소에 클릭 이벤트 추가
document.getElementById("test").addEventListener("click", ()=>{
    // AJAX를 위한 XMLHttpRequest 객체
    let xhttp = new XMLHttpRequest();

    // XMLHttpRequest의 요청
    xhttp.onreadystatechange = (e)=>{
        // XMLHttpRequest를 이벤트(e) 파라미터에서 가져옴
        let req = e.target;
        console.log(req);

        // 통신 상태가 완료되면
        if (req.readyState === XMLHttpRequest.DONE) {
            // http response 응답코드가 200(정상)이면
            if (req.readyState === 200) {
                // response 결과 출력
                console.log(req.response);
                // json 타입을 object 형식으로 변환
                console.log(JSON.parse(req.responseText));
            }
        }
    }
    // http 요청 타입, 주소, 동기식 여부
    xhttp.open("GET", "test.json", true);
    // http 요청
    xhttp.send();
});
```
json
```json
{
    "test":"wonillism"
}
```

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcM53uM%2FbtrfKBemWiU%2F9EaqMKDce3W5lC4ZL29XTk%2Fimg.png)

버튼을 클릭하면 test.json을 GET방식으로 비동기식 요청을 하게 된다. 요청이 완료되면 응답 코드를 확인하고 콘솔에 출력한다.

[https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState)

 [XMLHttpRequest.readyState - Web APIs | MDN

The XMLHttpRequest.readyState property returns the state an XMLHttpRequest client is in. An XHR client exists in one of the following states:

developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState)

XMLHttpRequest.readyState

-   0(UNSENT) : request가 초기화되지 않음
-   1(OPENED) : 서버와 연결을 함
-   2(HEADERS\_RECEIVED : 서버가 요청 받음
-   3(LOADING) : 서버의 응답을 기다림
-   4(DONE) : 서버의 응답이 완료됨




http://tcpschool.com/ajax/ajax_intro_basic

https://ko.wikipedia.org/wiki/Ajax