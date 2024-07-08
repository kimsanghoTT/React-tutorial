/*
React Router : 링크를 연결해서 이동하기 위해 사용되는 라이브러리

기존 html에서 주소값을 이동할 때 사용한 방법 :
    <a href="html파일이름.html">이동하기</a>
    a 태그로 href를 이용할 경우 html 파일명을 작성해주는 것이기 때문에 React에서는
    단순히 a 태그와 href만 사용할 수 없음
    -> React는 html 파일이 index.html 한 파일 밖에 없기 때문.
    -> 따라서 React는 Javascript로 이동해서 html 파일을 보여주므로 
        react-router-dom을 사용

* Router : 연결 경로를 자동으로 전환해서 연결해주는 기계
    - 연결 경로를 자동으로 전환해서 주는 기준
        : 고객(사용자)이 어떤 특정 화면이나 기능을 보고자해 웹 사이트에 요청할 경우 
        그 요청한 흐름대로 자연스럽게 보여주는 기능

설치 방법(택1)
    1. npm install react-router-dom
    2. npm i react-router-dom

router를 사용하기 위한 4가지 설정
    BrowserRouter : HTML에서 URL 전체 관리자 역할(History API 사용)
    Routes : 링크 모음을 나타내는 표현 태그
    Route : 어떤 링크가 어떤 js를 표현하는지 표기해주는 태그
    Link : 사용자가 누르고 이동할 수 있는 링크 생성. <a href>와 같은 역할

사용 방법
    <BrowserRouter> -> html에서 이러한 링크가 있다는 기록을 남김
        <Routes> -> 링크 표현 모음
            <Route path="이동할 링크" element={<javascript파일명/>}/>

            Home.js를 보길 원한다면
            <Route path="/" element={<Home/>}/> & Home.js를 import
        </Routes>
    </BrowserRouter>

주의 사항
    BrowserRouter는 index.js나 App.js에서 주로 사용
    만약 App.js를 index.js 바로 아래에서 사용하지 않는다면 
    index.js 바로 아래에서 표현되는 js 파일에서 표기
*/