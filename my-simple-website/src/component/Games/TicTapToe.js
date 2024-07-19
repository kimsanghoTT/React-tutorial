import React, { useState } from "react";
import { Link } from 'react-router-dom';
import '../../CSS/TipTacToeStepOne.css';
/*
import React, { useEffect, useState } from "react";
useEffect(() => {
    
    TicTapToe.js가 실행되면 특정 기능 시작
}, [])
*/
const shuffleArray = (array) =>{

    //랜덤으로 나온 값 정렬
    //Math.random() - 0.5 : 랜덤 배열 만들 때 자주 사용 -0.5 ~ 0.5 사이 생성
    // -0.5를 붙이지 않으면 0.0~ 0.99999.. 사이 값 반환
    // 0.5 범위 지정용
    return array.sort(() => Math.random() - 0.5);
}

const TicTapToe = () => {
    //numbers : 1~9 숫자가 섞인 배열
    //Array(9) : 9칸 배열 생성
    // key() : 숫자를 가지고 옴 -> map(n => n + 1)
    // map(n => n + 1) : 0 => 0 + 1 식으로 1~9 생성
    // 생성된 수를 shuffleArray를 통해 셔플
    const [numbers, setNumber] = useState(shuffleArray([...Array(9).keys()].map(n => n + 1)));
    
    //사용자가 클릭해야하는 다음 숫자
    //사용자가 클릭해야하는 첫 숫자가 1이어야 함
    const [nextNumber, setNextNumber] = useState(1);
    const [message, setMessage] = useState('');
    const [isCorrect, setIsCorrect] = useState(false);

    const clickNumber = (number) => {
        if(number === nextNumber){
            if(nextNumber === 9){
                setMessage('모든 숫자를 올바르게 클릭했어요');
                setNextNumber(nextNumber +1);
            }
            else{
                setNextNumber(nextNumber + 1);
            }
        }
        else{
            setMessage('순서가 틀렸어요');
        }
    }
    
    const restartBtn = () => {
        setNumber(shuffleArray([...Array(9).keys()].map(n => n + 1)));
        setNextNumber(1);
        setMessage('');
        setIsCorrect(false);
    }

    return(
        <div className="tictaptoe-container">
            <h1>틱탭토</h1>
            <div className="tictaptoe-grid">
                {numbers.map((number) =>(
                    <button className="tictaptoe-button"
                    key={number} onClick={() => clickNumber(number)}>
                        {number}
                    </button>
                ))}
            </div>
            <p>{message}</p>
            {/* 
            숫자를 모두 맞출 경우에만 다음 단계로 이동버튼 보여주기
            -> nextNumber가 10 이상일 떄 다음 단계 버튼이 나오게 설정
            */}
            {nextNumber > 9 && (<Link to="/TicTapToe2"><button className="restart-button">다음단계로 이동</button></Link>)}
            &nbsp;    
            <button className="restart-button" onClick={restartBtn}>재시작</button>        
                
        </div>
    )
}
export default TicTapToe;