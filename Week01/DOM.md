**BOM이란?**

Browser Object Model의 약자로 브라우저와 관련된 객체들의 집합으로서 BOM을 이용하여 Browser와 관련된 기능들을 구성한다. 이 BOM을 이용해서 Browser와 관련된 기능들을 구성한다.

BOM의 최상위 객체는 window 객체이다.

**DOM이란?**

Document Object Model의 약자로 window 객체의 하위 객체중 하나이다.

넓은 의미로 웹 브라우저가 HTML페이지를 인식하는 방법을 의미하고, 조금 좁은 의미로는 document 객체와 관련된 객체의 집합을 의미한다.

HTML에 있는 내용들을 javascript가 알아들을 수 있는 내용으로 바꾸고, 바꾸는 과정에서 HTML이 트리 구조로 되어있으므로 그 구조의 성격이 자연스럽게 반영된다.

결국, DOM을 조작하는 것은 HTML의 스타일을 마음대로 조작하는 것인데 조작을 하려면 어떤 것을 조작할 것인지 찾고 그것을 수정하기 위한 속성이나 메소드 같은 것을 제공하는 것이 DOM이다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcgMkze%2Fbtq52iCtspa%2FvOhYw93PU7ooKWeYiTbXP1%2Fimg.jpg)

### DOM 사용하기

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
    <h1 id="title">WOPARK</h1>
    <script src="index.js"></script>
</body>
</html>
```

js

```js
const title = document.getElementById("title");

title.innerHTML = "wopark";
```

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbf6f9r%2Fbtre4G8OxhF%2FI3uazRVziaUXXk3h7Rodr1%2Fimg.png)

html에서 대문자로 선언한 WOPARK을 js로 DOM을 통해 접근하여 wopark으로 바꾸었다.

console.dir(title)을 이용하여 title의 하위객체들을 살펴보자.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcsXXwL%2Fbtre34bbT9h%2F43uNnKHAyKkKkhQSSvkxu1%2Fimg.png)

console.dir()을 이용하면 객체의 속성을 계층구조로 출력한다.