import React from "react";

const Ajax_Fetch = () => {

    return(
        <>
        <h1>Ajax와 Fetch</h1>
        <pre>
            Ajax는 서버와 통신해서 웹 페이지를 새로고침 하지 않고
            데이터를 가져오거나 보낼 수 있게 해주는 기술
            jquery로  이용되는 js에서 많이 사용

            React에서는 Ajax 대신 Fetch API 또는 Axios와 같은 라이브러리를 사용

            Fetch API : 리액트에 내장된 API를 가져와서 사용
                - API(Application Programming Interface) : 기술 연결 주소
                    - 어떠한 내용을 주소값으로 가져와 사용하거나 데이터를 보여줄 때 사용
                    ex) 마이페이지 api = 마이페이지 주소값
                    ex) 로그인 백엔드 api = 로그인 데이터를 가져올 수 있는 백엔드 주소
                    ex) API가 잘못 되었다 = 백엔드에서 데이터를 가져오는 주소가 잘못됐거나 코드의 문제

            axios 라이브러리 : npm i axios를 사용해 외부에서 만들어진 기능을 가져와서 사용
                - npmJs로 되어있는 홈페이지에서 가져올 수 있음
                <a href="https://www.npmjs.com/">npm으로 이동</a>   
        </pre>
        <h3>사용 예제 코드</h3>
        <pre>
        <code>
            fetch ('api주소') //java의 try와 비슷. 불러올 주소가 적힌 try

            // 데이터를 가져왔으면 json으로 파일 전달
            .then(res => {
                return res.json(); //json으로 파일 전달
            })
            //만약에 데이터가 들어왔다면
            .then(데이터 => { //try 안에 적힌 if문. (데이터를 가져오는데 성공한다면) <- 조건
                실행할 코드 작성; //조건에 맞는 데이터가 들어왔을 때 실행할 코드
            })

            //데이터를 가져오는데 실패했다면
            //에러 출력할 변수로 'e'를 사용
            .catch(e => { //java의 catch 또는 else문. 에러가 발생했을 때 보여줄 에러 출력
                실행할 코드 작성;
            })
        </code>
        </pre>
        </>
    )
}
export default Ajax_Fetch;