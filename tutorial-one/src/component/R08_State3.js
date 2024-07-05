import React, {useState} from "react";

const 예제3번 = (props)=>{
    //props로 전달받을 값 중 init값을 const 초기 값으로 설정하기

    //setCount()를 이용해 count값을 변경하는 코드 작성
    // 예제3번 객체에서 변경이 되는 부분만 다시 표현을 진행
    const [count, setCount] = useState(Number(props.init));
    //JS안의 Number라는 객체를 사용해 받아오는 값을 숫자로 한 번 더 처리
    //-> String 문자열로 올 수도 있기 때문
    //useState(숫자로변경(App.js에서가져온값.초기값(init)에 담긴 값))
    //count = init = 50


    return(
        <div className='count-container'>
            <button onClick={() => setCount(count - Number(props.step))}>
                -{props.step}
            </button>
            <h3>{count}</h3>

            <button onClick={() => setCount(count + Number(props.step))}>
                +{props.step}
            </button>
        </div>
    )
}
export default 예제3번;