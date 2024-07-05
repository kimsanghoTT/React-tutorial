import React, { useState } from 'react';

const Game = () => {
    //guess : 맞출 숫자 입력
    const [guess, setGuess] = useState('');

    //message : 맞는지 아닌지 전달하는 메시지
    const [message, setMessage] = useState('');

    //랜덤으로 1~10사이의 숫자 만들기
    const [number, setNumber] = useState(Math.floor(Math.random() * 10) + 1);

    //숫자 맞추려고 시도한 횟수
    const [attempts, setAttempts] = useState(0);

    //사용자가 숫자를 맞추려고 시도할 떄마다 숫자를 새로 세팅해서 저장
    const handleChange = (e) => {
        setGuess(e.target.value);
        //onChange={(e) => {setGuess(e.target.value)}} 를 줄이기 위함
    }    

    const handleSubmit = (e) => {
        e.preventDefault(); 
        //인터넷이 가지고 있는 기본 동작을 일단 정지
        //-> submit 페이지를 데이터를 서버로 전송하거나 페이지가 새로고침되는걸 막음
       
        const userGuess = parseInt(guess, 10);
        //문자열일 수 있기 떄문에 문자열을 정수로 다시 한 번 변환
        //const userGuess = parseInt(숫자값, 진수); => 10진수
        //userGuess = 사용자가 입력한 값을 숫자로 사용

        setAttempts(attempts + 1); 
        // 맞추려고 작성한 숫자를 제출할 떄마다 제출 시도횟수 1씩 증가

        //정답시
        if(userGuess === number){
            setMessage('축하합니다. 정답입니다');
        }
        else if(userGuess > number){
            setMessage('숫자가 너무 큽니다');
        }
        else if(userGuess < number){
            setMessage('숫자가 너무 작습니다');
        }
        setGuess('');
    }

    const handleRestart = (e) => {

    }

    return (
        <div>
            <h1>숫자스무고개</h1>
            <form onSubmit={handleSubmit}>
                <input type="number" value={guess} onChange={handleChange} placeholder='1~10 사이의 숫자 입력' />
                <button>추측하기</button>
            </form>
            {/*숫자가 맞는지 틀린지 확인하는 메시지*/}
            <p>{message}</p>
            <button onClick={handleRestart}>재시작</button>
        </div>
    )
}
export default Game;