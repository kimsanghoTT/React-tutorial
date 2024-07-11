//node_module 폴더가 없으면 자동으로 import가 안됨
import React from 'react';

function UseEffectEx(){
    return(
        <>{/* 전체 감싸는 태그 필수 */}
            <h1>useEffect</h1>
            <pre>
            useEffect는 컴포넌트(function, const 시작)가 렌더링을 할 때마다
            특정 작업을 실행할 수 있도록하는 Hook

            * react에서 컴포넌트를 렌더링 하다 = react에서 js파일을 실행하다

            </pre>
            useEffect 사용 방법

                import {useEffect} form 'react';
                useEffect(function, deps)
                              ↓       ↓
                useEffect(() => {},   []); //function의 이름이나 특정 기능이 없을 때 익명함수로 표현
                - function : ~~.js를 들어왔을 때 수행하고자 하는 작업
                - deps : - 배열형태. 검사하고자 하는 특정 값, 빈 배열 작성
                         - deps에 특정 값을 넣게 되면 컴포넌트가 실행된 때나 지정 값이 업데이트될 때
                           useEffect에 적힌 function을 실행.
                         - 필수로 작성해야하는 것이 아님
                         - deps를 작성하지 않고 function만 작성해서 사용하면 ~~.js를 다시 시작할 때마다
                           useEffect에 작성된 function함수가 호출
        </>

    )
}
export default UseEffectEx;