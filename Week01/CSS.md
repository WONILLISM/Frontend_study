# CSS란?
Cascading Style Sheets, CSS는 마크업 언어가 실제 표시되는 방법을 기술하는 스타일 언어로 HTML과 XHTML에 주로 쓰이며, XML 에서도 사용할 수 있다.

HTML이 웹사이트의 뼈대를 담당한다면 CSS는 옷과 같이 꾸미는 역할을 담당한다고 할 수 있다. 

CSS는 규칙 기반 언어이다.

규칙은 selector(선택자)와 함께 열린다. 스타일을 지정할 HTML element(요소)를 선택한다.

### CSS를 HTML에서 사용하는 방법

-   inline : HTML 태그 안에서 사용하는 방법
-   internal : <head> 태그 안에서 사용하는 방법
-   external : CSS파일을 만들고 HTML 문서에 연결하여 사용하는 방법

#### inline

계층적인 성격을 띄는 HTML에 Style이 같이있다고해서 좋은 방법은 아니다.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1 id="title" style="color:red">WOPARK</h1>
    <script src="index.js"></script>
</body>
</html>
```

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FboC5uw%2FbtrffOxQvXu%2FGH9WmfD25yXBc4waQiBYKK%2Fimg.png)

#### internal

HTML문서마다 스타일을 매번 지정해주어야 한다. 주로 한 문서에만 해당되는 스타일을 지정할 때 사용한다.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>
        h1 {
            color:blue;
        }
    </style>
</head>
<body>
    <h1 id="title">WOPARK</h1>
    <script src="index.js"></script>
</body>
</html>
```

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbnQzRd%2Fbtrfbm3WU3V%2FuSJKdDwS4Tu2M5b24Cbxsk%2Fimg.png)

#### external

페이지 전체적인 스타일을 일관성 있게 유지하면서 변경시에도 일괄적으로 변경 가능하다.

외부 스타일 시트 파일이 지나치게 복잡해지면 곤란하므로 CSS파일을 관리하는 노하우가 필요하다.

html

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1 id="title">WOPARK</h1>
    <script src="index.js"></script>
</body>
</html>
```

css

```
h1 {
    color : yellow;
}
```

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F9oCvq%2FbtrfbYhevuw%2FKBznjcXiVpDE9qI3QecHNk%2Fimg.png)