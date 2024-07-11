import React, {useRef, useEffect} from 'react';

/*
export를 함수 선언과 동시에 쓰기

const로 컴포넌트 시작하는 경우
    export const 컴포넌트명 = () => {}

function으로 컴포넌트 시작하는 경우
    export default function 컴포넌트명(){}
*/
export  const RefEx = () => {

    const pwRef = useRef(null);

    useEffect(() => {
        if(pwRef.current){
            pwRef.current.focus();
        }
    },[]);

    return(
        <div>
            <h1>아이디, 비밀번호 입력</h1>
            <form>
                <label>아이디 : </label>
                <input type="text" placeholder='아이디'/>
                <label>비밀번호 : </label>
                <input type="password" ref={pwRef} placeholder='비밀번호'/>
            </form>
        </div>
    )
}
