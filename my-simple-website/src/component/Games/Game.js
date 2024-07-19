import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Game = () => {
    //guess : 맞출 숫자 입력
    const [guess, setGuess] = useState('');

    //message : 맞는지 아닌지 전달하는 메시지
    const [message, setMessage] = useState('');

    //랜덤으로 1~10사이의 숫자 만들기
    const [number, setNumber] = useState(Math.floor(Math.random() * 10) + 1);

    //숫자 맞추려고 시도한 횟수
    const [attempts, setAttempts] = useState(0);

    //사용자가 정답을 확인하면 다음단계로 이동하는 버튼이 보이게 생성
    const [isCorrect, setIsCorrect] = useState(false); //정답 확인 전이므로 false


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
            setIsCorrect(true);
        }
        else if(userGuess > number){
            setMessage('숫자가 너무 큽니다');
        }
        else if(userGuess < number){
            setMessage('숫자가 너무 작습니다');
        }
        setGuess('');
    }

    const handleRestart = () => {
        //다시 시작하기 버튼을 누르면 랜덤 숫자를 다시 생성
        const newNumber = Math.floor(Math.random()*10)+1;
        //모든 값 초기화
        setNumber(newNumber); //맞춰야할 숫자 새로 넣기
        setAttempts(0); //시도횟수 0으로 초기화
        setMessage(''); //메시지 초기화
        setGuess(''); // input 안에 작성한 숫자 지우기
        setIsCorrect(false); //정답 확인 전 상태로 되돌리기
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
            {/* 
            자바스크립트에서 가장 많이 쓰는 if문은 삼항연산자
            -> 실행할 내용이 많으면 ()로 묶어서 처리
            */}
            {isCorrect ? (<Link to="/game-two-step"><button>다음단계로 이동</button></Link>) : (<button onClick={handleRestart}>재시작</button>)}
            
        </div>
    )
}
export default Game;