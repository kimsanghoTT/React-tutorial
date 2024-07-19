import React, { useEffect, useState } from "react";
import '../../CSS/TipTacToeStepOne.css';

const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
}
/* TicTapToe2 시작 위치 */
const TicTapToe2 = () => {
    const [numbers, setNumbers] = useState(shuffleArray([...Array(20).keys()].map(n => n + 1)));
    const [nextNumber, setNextNumber] = useState(1);
    const [message, setMessage] = useState('');
    const [timer, setTimer] = useState(20); //처음 초기 시간 설정
    let countdown;
    /*
    useEffect(() => {
        //소비자가 검색하고 싶은 검색어가 들어올 때마다 일치하는 내용 검색하기
        //실시간 검색 기능
        // ex) '가'로 시작하는 단어 보여주기
    }, [search]);
    */

    //useEffect( function 기능명() => {어떤 기능이 동작해야하나요?}, [어떤값이변경될때마다 function기능이 움직여야하나요?]);
    //useEffect(() => {}, []);
    //useEffect(() => {}, [numbers]); -> numbers 숫자가 변경될 때마다 function 기능 발생
    useEffect(() => {

        // useEffect Hook은 효과가 사용자의 눈에 보이지 않기 때문에 f12 개발자 모드 console에서 확인해야함
        // 사용자 눈에 보이지 않게 자동 시작기능을 설정할 수 있음
        // f12에서 useEffect 확인하기
        console.log("useEffect 시작");
        
        if(timer > 0){
            //남은 시간이 0보다 크면 숫자를 줄임
            countdown = setTimeout(() => {
                setTimer(timer - 1);
            }, 2000);
        }
        else if(timer == 0){
            //남은 시간이 0이면 게임 종료 알림
            alert("시간 초과에요");
        }
    }, [timer]);

    const clickNumber = (number) => {
        if(number === nextNumber){
            if(nextNumber === 20){
                setMessage("순서를 정확하게 클릭했어요");
                setNextNumber(1);
                clearTimeout(countdown);
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
        setTimer(20);
    }

    return(
        <div className="tictaptoe-container">
            <h1>틱택토2</h1>
            <div className="timer">남은시간 : {timer}초</div>
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