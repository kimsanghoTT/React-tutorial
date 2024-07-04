import React, {useState} from "react";

/*1번 자식은 ID를 가진 객체*/
const ID값 = (props) =>{
    //handler = 코딩에서 handle은 값을 조종한다는 뜻을 가짐
    const {handler} = props;

    return(
        <div className="wrapper">
            {/* htmlFor = for 속성 */}
            <label htmlFor="inputId">ID</label>
            {/* onChange = 값이 바뀌었을 때 부모로부터 전달받은 함수 핸들러 수행 */}
            <input type="text" id="inputId" onChange={handler}/>
        </div>
    )
}

const PW값 = ({handler}) =>{
    /*
    const ID값 = (props) =>{
        const {handler} = props;

    와

    const PW값 = ({handler}) =>{

    는 같은 의미
    
    */
    return(
    <div className="wrapper">
        <label htmlFor="inputPw">PW</label>
        <input type="password" id="inputPw" onChange={handler}/>
    </div>
    )
}

const 부모예제 = () => {
    //상태변수선언(State, useState)
    const [id, setId] = useState(''); //맨 처음 빈 값으로 넣어줌
    const [pw, setPw] = useState('');
    //이벤트 : 동작, 행위
    //이벤트 리스너 : 동작 감지
    //이벤트 핸들러 : 이벤트가 감지됐을 때 수행할 기능

    //이벤트 핸들러(id값조종) 기능 설정
    const id값조종 =(e) =>{
        setId(e.target.value) 
        //<ID값 handler={id값조종}/>에서 값이 변경되는 타겟(input)의 값을 가져옴
    }
    const pw값조종 = (e) =>{
        setPw(e.target.value)
    }

    return(
        //props를 이용해 이벤트 핸들러용 함수를 자식 객체(컴포넌트)에 전달
        <>
            <ID값 handler={id값조종}/>
            <PW값 handler={pw값조종}/>
        {/* Id, Pw가 입력되지 않으면 버튼 비활성화*/}

        <button disabled={id.length === 0 || pw.length === 0}>
            Login</button>
        {/* disabled는 버튼 이외 input, textarea에서 사용 가능 = 글쓰기 방지 가능 */}
        
        </>

    )
}
export default 부모예제;