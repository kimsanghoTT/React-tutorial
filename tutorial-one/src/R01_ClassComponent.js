/*
JS파일과 JAVA 파일을 외부에서 사용할 때는 무조건 대문자로 시작

* r01_ClassComponent로 작성하면 외부에서 사용 불가
  R01_ClassComponent로 작성하면 외부에서 사용 가능
*/
import React, { Component } from "react";
/*
-> node_modules 폴더에서 react라는 폴더에 있는 파일을 가져와서
R01_ClassComponent.js 페이지에서 사용하겠다는 뜻
react 폴더를 가져와서 사용하는데 사용할 이름을 React로 지정

node_modules : Node.js에서 프로젝트가 사용할 패키지나 라이브러리가 저장된 폴더
*/

//old version
class 컴포넌트 extends Component{
    //class 컴포넌트 extends -> 예전 방식

    render(){
        console.log("javascript를 작성하는 공간");
/*
render : return되는 html형식의 코드(jsx, js + xml)를 화면에 출력하는 함수
화면이 변경되어야 할 시점에 자동으로 호출됨
Component를 상속받는 하위 클래스에 반드시 있어야하는 함수
*/
        return(
            <>
            <pre>
            리액트에서는 return으로 시작한 다음
            코드를 처음부터 끝까지 감싸줄 태그가 필요함

            이때 코드를 감싸주기 위해 주로 <div></div>나 <></>를 사용

            ** <div></div>와 <></> 차이점

            div : html 표준 태그. 주로 레이아웃 스타일링을 위한 컨테이너로 사용

            <></> : html 표준에 없는 사용자 정의 태그. 특정 기능이나 화면을 감싸는 데 사용


            </pre>
                <h2>클래스형 컴포넌트</h2>
            </>
        );
    }
}

export default 컴포넌트;
//컴포넌트라는 코드를 외부로 내보내겠다는 의미
//다른 javascript에서 내보내고자 하는 코드를 import해서 사용 가능
//만든 class에 export default를 지정해야만 외부에서 사용 가능