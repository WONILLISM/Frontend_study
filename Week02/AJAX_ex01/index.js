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