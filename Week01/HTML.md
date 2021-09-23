# HTML이란?

**HyperText Markup Language** 의 약자로서 웹페이지를 만들기 위한 언어로 웹브라우저 위에서 동작하는 언어다.

-   하나의 언어(Language)로 취급
-   온라인 상에서 문서를 주고받을 때 연결하는 역할, 이미지를 표현, 웹 사이트, 웹 페이지, 웹 문서라는 표현을 사용

## 기본 형태

`<!DOCTYPE html>` //문서 타입을 html이라고 명시  
`<html>` //여기서부터 "html 코드이다" 라고 명시  
`<head>`  
문서를 정의하는 데이터가 위치  
`</head>`  
`<body>`  
문서에 표시되는 컨텐츠가 위치  
`</body>`  
`</html>`

-   **Meta 정보** : 눈에는 보이지 않지만 추가적인 정보를 뜻함
-   head에 `charset`, `metadata`등 정보들을 어떻게 표현할지 담는 태그들이 들어간다.

## 태그(Tag)란?

-   정보를 정의하는 형식
-   그 의미에 맞춰서 사용해야 한다
-   링크, 이미지, 목록, 제목 등 많은 태그들이 있다
-   태그는 그 의미에 맞춰서 사용해야한다. 즉, 태그는 각각의 의미를 가지고 있기 때문에 `Sementic`하다 라고 표현한다
-   Style을 바꾸는 것은 `HTML`보다는 `CSS`에서 표현해주는 것이 좋다
-   구글에 **html tag list** 로 검색을 해보면 수 많은 태그들의 정보가 있다
-   이 곳을 참조하자 [태그 리스트](https://www.w3schools.com/tags/)
    -   링크 `<a href=""></a>`
    -   이미지 `<img></img>`
    -   목록 `<ul><li></li><ul>`
    -   제목 `<h1~6></h1~6>`

예제1

1.  `vscode`에 html:5를 입력하면 아래와 같이 가장 기본 형태의 구조가 작성 된다.
2.  `<h1> </h1>` headline의 크기를 의미한다.
3.  `<div> </div>` 문서의 구역을 나누겠다라는 의미이다.
4.  `<ul> </ul>`unordered list : 순서가 없는 리스트를 의미한다
5.  `<li> </li>`list item : 리스트 아이템을 의미한다.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div>
        <h1>반갑습니다.</h1>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
</body>
</html>
```

# HTML 구조화 설계

[HTML structure design (구글 이미지 탭)](https://www.google.co.kr/search?q=html+structure+design&newwindow=1&safe=off&tbm=isch&source=lnms&sa=X&ved=0ahUKEwjjo63utYfcAhWRFIgKHfRDBIEQ_AUICigB&biw=682&bih=768&dpr=2)


![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcE8QOk%2FbtqFaMJ4xfi%2FUlP04bYsyo6qOMu1YjIn60%2Fimg.png)

-   **ID** 와 **Class**
    -   ID(Identifier)
        -   고유한 속성을 지님(같은 ID가 있더라도 오류는 나지 않지만 고유한 속성을 가지도록 사용하자)
    -   Class
        -   중복적으로 사용 가능
        -   비슷한 스타일을 표현하기 위함