# JSON이란?
JSON, Javascript Object Notation의 약자이다. 

Key-Value 쌍 또는 Attribute-Value 쌍으로 이루어진 데이터 오브젝트를 전달하기 위해 인간이 읽을 수 있는 텍스트를 사용하는 개방형 표준 포맷이다. 비동기 브라우저/서버 통신(AJAX)를 위해, 넓게는 XML(AJAX가 사용)을 대체하는 주요 데이터 포맷이다.

특히 인터넷에서 자료를 주고 받을 때 그 자료를 표현하는 방법으로 알려져 있다.

본래는 자바스크립트 언어로부터 파생되어 자바스크립트의 구문 형식을 따르지만 언어 독립형 데이터 포멧이다. 즉, 프로그래밍 언어나 플랫폼에 독립적이므로, 구문 분석 및 JSON 데이터 생성을 위한 코드는 C, C++, C#, Java, Javascript, Python 등 수많은 프로그래밍 언어에서 쉽게 이용할 수 있다.

### JSON 구조

-   JSON 데이터는 이름과 값의 쌍으로 이루어진다.
-   JSON 데이터는 쉼표(,)로 나열된다.
-   객체는 중괄호로 둘러쌓아 표현한다.
-   배열은 대괄호로 둘러쌓아 표현한다.

```
"데이터이름":값
```

JSON 데이터의 KEY값은 문자열로 구성된다.

JSON 데이터의 VALUE값은 다음과 같은 타입이 올 수 있다.

-   숫자(number)
-   문자열(string)
-   불리언(boolean)
-   객체(object)
-   배열(array)
-   NULL

```
// 객체
{
    "name":"WONILLISM",
    "age":1,
    "weight":3.14
    // 배열
    "language": [
        {"name":"Korean", "skill":"Very Good"},
        {"name":"English", "skill":"So So"}
    ]
}
```

[http://tcpschool.com/json/json\_basic\_structure](http://tcpschool.com/json/json_basic_structure)

[https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global\_Objects/JSON](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/JSON)

[https://ko.wikipedia.org/wiki/JSON](https://ko.wikipedia.org/wiki/JSON)