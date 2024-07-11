import React, {useRef,useEffect} from 'react';

function SignUpForm(){

    /* 
    const [emailRef, setEmailRef] = 초기값;
        [초기값변수, 변경해서 초기값에 넣어줄 변수] = 초기값;
    const emailRef = useRef(null);
        초기값설정변수 = 새로고침하거나 추후 값이 변경되어도 값을 고정(어떤 초기값을 넣을 것인가);
    */

    // 초기값 = null, React가 새로고침 되어도 변경된 값을 유지할 수 있도록 useRef
    const emailRef = useRef(null); 

    /* 
    emailRef는 useRef(null)를 생성하자마자
    emailRef{
        current : null
    }
    이 자동 생성됨

    const pwRef = useRef(1);이면
    pwRef{
        current : 1
    }
    */



    //useEffect의 []를 비워 최초 1회만 실행하는 기능 설정
    useEffect(() =>{
        //SignUpForm이 실행되면 바로 수행할 기능
        if(emailRef.current){
            emailRef.current.focus(); //처음 입력창이 null인 값에 자동으로 이동 
        }
    },[]);

    return(
        <div>
            <h1>회원가입</h1>
            <form>
                <label>이메일</label>
                <input type="email" ref={emailRef} placeholder='이메일 입력'/>
                <label>비밀번호</label>
                <input type="password" placeholder='비밀번호 입력'/>
            </form>
        </div>
    )
    //useRef로 설정한 태그값에서 current는 기본으로 null값을 가짐
}
export default SignUpForm;