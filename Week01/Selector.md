# Selector란?

선택자란 말 그대로 선택을 해주는 요소이다. 이를 통해 특정 요소들을 선택하여 스타일을 적용할 수 있게된다. 

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FokYsB%2FbtrfbYV2VXT%2FGlOHGkrYNJgAseh4VWKVTk%2Fimg.png)

HTML페이지 안의 특정 요소들을 어떻게 렌더링할 것인지 브라우저에게 알려주는 CSS 문장이다.

### 선택자 종류

-   Universal Selector(전체 선택자)
    -   "\*" : HTML페이지 내부의 모든 태그를 선택
-   Type Selector(태그 선택자, 유형 선택자)
    -   주어진 노드 이름을 가진 모든 요소를 선택
    -   <p>, <span>, <header>, ... 등
-   Class Selector(클래스 선택자)
    -   클래스 속성값이 \[클래스 이름\]으로 지정된 요소를 선택
    -   문서 안에 복수의 요소에 스타일을 적용하는 경우에 사용
    -   <div class="클래스 이름">
    -   마침표(.)을 사용하여 표시
-   ID Selector(ID 선택자)
    -   ID 속성값이 \[ID 이름\]으로 지정된 요소를 선택
    -   문서 내에는 주어진 ID를 가진 요소가 하나만 존재해야 함
    -   <div id="ID 이름">
    -   샾(#)을 사용하여 표시
-   Combinator(복합 선택자)
    -   두 개 이상의 선택자 요소가 모인 선택자
    -   Descendant Combinator(하위 선택자)
        -   section ul { color: red}  
            ![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fn2SxB%2FbtrfgZ02Nur%2F4jzTB9sKqxTRwSKoGVRh0k%2Fimg.png)
    -   Child Combinator(자식 선택자)
        -   section>ul { color: blue}  
            ![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbo0cGO%2Fbtrfhkp94zm%2F2FkLh4VD4TsHfmvuYifLb1%2Fimg.png)
    -   Attribute selector(특성 선택자)
        -   주어진 특성을 가진 모든 요소를 선택한다.
        -   a\[title\] { color: black }