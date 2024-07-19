import React from "react";
import '../../CSS/TypingTest.css';

const Result = ({text, showResult}) => {

    // 입력한 값과 결과확인이 일치하는지 확인
    const isCorrect = (text === showResult);

    return(
        <div className="result">
            <h2>결과</h2>
            {isCorrect ? (<p>정확히 작성했어요</p>) : (<p>틀렸어요. 다시 시도하세요</p>)}
        </div>
    )
}
export default Result;