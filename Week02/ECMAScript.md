Javascript를 접하게되면 자연스래 ES5, ES6 ... 등의 단어를 들어볼 수 있다. 그냥 자바스크립트의 버전이겠거니하고 넘겼었는데 좀 더 자세히 알아보자.

### ECMAScript란?

ECMA International이 ECMA-262 기술 규격에 따라 정의하고 있는 표준화된 스크립트 프로그래밍 언어를 말한다.

ECMAScript는 스크립트 언어가 준수해야 하는 규칙, 세부 사항 및 지침을 제공한다. ECMAScript는 문서로 작성되어 있으며, [이 곳](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)에서 자세히 알 수 있다.



Javascript는 ECMAScript 사양을 준수하는 범용 스크림팅 언어이다. ECMAScript 문서를 보면, 어떻게 스크립트 언어를 쓸 수 있는지 알 수 있다.

Javascript 엔진은 Javascript 코드를 이해하고 실행하는 프로그램 또는 인터프리터이다. 일반적으로 대부분의 웹 브라우저에서 찾아 볼 수 있다.

Javascript 엔진에는 여러 종류가 있는데, 예를 들면 Google Chrome의 V8, Mozilla Firefox의 SpiderMonkey, Microsoft Edge의 Chakra 등이 있다.

이 엔진들은 몇 가지 특징이 있다.

-   Performance(수행능력) 차이
    -   각 엔진마다 Javascript를 얼마나 효율적으로 처리하고 있는가에 따라 다르기 때문
-   지원되는 ECMAScript가 다름
    -   Javascript 엔진을 담당하는 회사나 조직의 업데이트에 따라 다르다

몇 가지 버전별 특징을 알아보자.

### ES1 ~ 3 (1999)

Javascript의 가장 기본이 되는 기능만 존재하는 버전, hoisting, prototype, scope 등

### ES5 (2009)

-   배열에 forEach, map, filter, reduce, some, every와 같은 메소드 지원
-   Object에 대한 getter / setter 지원
-   Javascript strict 모드 지원
-   JSON 지원 (과거에는 XML을 사용)

### ES6 (ES 2015)

-   let, const 키워드 추가
    -   기존의 변수는 함수 scope를 가진 var를 이용하여 선언, 기존에는 상수형 키워드가 없어 이를 구분하기위해 let, const 키워드 추가
-   arrow 문법 지원
    -   익숙해지면 편하고 간결해진 코드 작성가능
    -   this를 바인딩하지 않음, 선언된 scope의 this를 가리킨다.
-   iterator / generator 추가
-   module import / export 추가
-   Promise 도입

### ES7 (ES 2016)

-   "\*\*" 제곱 연산자 제공
-   Array.includes : 배열에 해당 요소가 존재하는지 확인하는 메소드 제공

### ES8 (ES 2017)

-   async / await 제공

[https://www.greycampus.com/blog/programming/java-script-versions](https://www.greycampus.com/blog/programming/java-script-versions)

[https://www.w3schools.com/js/js\_es5.asp](https://www.w3schools.com/js/js_es5.asp)

[https://wormwlrm.github.io/2018/10/03/What-is-the-difference-between-javascript-and-ecmascript.html](https://wormwlrm.github.io/2018/10/03/What-is-the-difference-between-javascript-and-ecmascript.html)

[https://en.wikipedia.org/wiki/ECMAScript](https://en.wikipedia.org/wiki/ECMAScript)

[https://ko.wikipedia.org/wiki/ECMA%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8](https://ko.wikipedia.org/wiki/ECMA%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8)