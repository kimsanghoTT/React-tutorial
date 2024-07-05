import React, {useState} from "react";

/* 
React는 초반에 function이라는 함수로 묶어서 사용했지만 기능에 있어 부족한 부분이 발생
    -> 부족한 부분을 class화하여 사용해 코드를 작성
    -> 그런데 class로 작성하다보니 render 처럼 불필요한 코드를 더 작성하게 되었고
    -> 다시 function으로 돌아옴

    -> function의 부족한 부분을 채우기 위해 Hook이라는 기능을 만듦

    - Hook = react에서 어떠한 동작이나 상태를 표현하거나 변경할 때 사용하는 기능들
    - Hook 종류
        1. useState
        2. useEffect
        3. useContext
        4. useReducer
        5. useMemo
        6. useCallback
        7. useRef. seRef
        8. useCustom Hook -> 개발자가 만드는 Hook 종류

    use로 시작하는 Hook을 사용하려면

    하나의 훅 작성
    import React, {useState} from 'react';

    두 개 이상의 훅 작성
    import React, {useState,useEffect,useContext, ..} from 'react';

State : 컴포넌트(객체)의 상태
useState() 함수
    - 컴포넌트(객체)의 상태(state)값이 변하게 될 경우 
    해당 객체를 새로고침(=렌더링(=재표현))하여 실행하는 함수

*/
/*
React에서 가장 처음 나온 방식
    - function 예제1 () {
    
React의 전통적 방식
    - class 예제1 extends Component{

ES6(SCMScript 6 = JavaScript6 문법. 현재 가장 최신버전)
    - const State예제1 = () => {

3가지 모두 동일의미
*/
const State예제1 = () =>{

    const [test, setTest] = useState('A');
    /*
    test = 가장 처음에 가지고 있는 변수값. 처음에 값이 없으면 값이 없는 상태로 있음
    setTest = test 값을 변경하기 위한 값
    useState('A') = test가 처음에 가지고 있을 값
    const [초기값, 변경될값] = useState('처음에 들어갈 값');

    const 안에 작성하는 변수명에 필수로 set이라는 이름이 들어가지 않아도 되지만
    const [초기값변수, set초기값변수] 라는 이름으로 작성해주는 것이 좋음
    */

    //버튼을 누를 경우 동작할 함수
    const 값변경하기 = () =>{
        if(test === 'A') setTest('B')
        else setTest('A');
        //React는 {} 생략 가능
    }

    return(
        /*
        return 안에는 !Doctype부터 html, head, body같은 태그 사용 x
         <></>나 <div></div>로 태그를 감싸줌

        -> public의 index.html의 <div id="root"> 안에 코드들이 모두 들어가기 때문
        */
        <>
        <h1>{test}</h1> 

        <button onClick={값변경하기}>변경클릭버튼</button>
        {/* 
        button을 클릭해서 값이 변경하는 것을 확인.
        ReactJs는 onclick을 쓸 때 onClick식으로 카멜케이스 방식으로 표현
        html, javascript = onclick
        React Javascript = onClick
        
        */}
        </>
    )
}

export default State예제1;