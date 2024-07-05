/*
bootstrap을 이용한 npm install 사용하기

npm을 이용해서 실행, 설치, 설정을 변경할 수 있음
(** npm = nodeJs 설치나 실행 환경설정을 위한 약자)
https://www.npmjs.com/

npm으로 무언가를 설치할 때 :
npm i 설치할파일명
npm install 설치할 파일명

무언가를 삭제할 때 :
npm uninstall 삭제할파일명

부트스트랩 설치, 삭제 :
npm i bootstrap
npm uninstall bootstrap

**npm i bootstrap 뒤에 @버전을 작성하지 않으면 가장 최신 버전으로 설치

특정 버전 설치 :
npm i bootstrap@5.2.1

**npm으로 인한 설치는 npm start로 시작하고 있는 패키지 실행 여부와 관계없이 설치가 가능

import 'bootstrap/dist/css/bootstrap.css';
부트스트랩을 가져와서 사용할 때는 index.js에 import를 작성.
부트스트랩 뿐만 아니라 전체적으로 사용할 css는 index.js나 App.js에 작성
*/
import React from "react";

const 부트스트랩예제1 = () =>{
    return(
        <div className="container">{/*반응형 레이아웃 컨테이너 만들기*/}
            <div className="row">{/*가로 행 생성*/}
                <div className="col-md-auto">{/*중간화면 크기에서 세로의 너비를 자동으로 설정*/}
                    <h1>React와 Bootstrap 사용 시작</h1>
                    <button className="btn btn-primary">부트스트랩 버튼</button>
                </div>
            </div>
        </div>
    )
}
export default 부트스트랩예제1;