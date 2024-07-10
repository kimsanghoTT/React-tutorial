import React, { useState } from "react";
import './TipTacToeStepOne.css';

const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
}

const TicTapToe2 = () => {
    const [numbers, setNumbers] = useState(shuffleArray([...Array(20).keys()].map(n => n + 1)));
    const [nextNumber, setNextNumber] = useState(1);
    const [message, setMessage] = useState('');

    const clickNumber = (number) => {
        if(number === nextNumber){
            if(nextNumber === 20){
                setMessage("순서를 정확하게 클릭했어요");
                setNextNumber(1);
            }
            else{
                setNextNumber(nextNumber + 1);
            }
        }
        else{
            setMessage("순서가 잘못됐어요");
        }
    }

    const restartBtn = () => {
        setNumbers(shuffleArray([...Array(20).keys()].map(n => n + 1)));
        setNextNumber(1);
        setMessage('');
    }

    return(
        <div className="tictaptoe-container">
            <h1>틱택토2</h1>
            <div className="tictaptoe-two-grid">
                {numbers.map((number) => (
                    <button className="tictaptoe-button"
                        key={number} onClick={() => clickNumber(number)}>
                        {number}
                    </button>
                ))}
            </div>
            <p>{message}</p>
            {/* 숫자를 모두 맞출 경우 처음으로 초기화 */}
            <button className="restart-button" onClick={restartBtn}>재시작</button>
        </div>
    )
}
export default TicTapToe2;