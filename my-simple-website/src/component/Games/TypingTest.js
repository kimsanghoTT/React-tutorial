import React, {useEffect, useState} from 'react';
import Result from './Result';
import '../../CSS/TypingTest.css';

//타자대회 컴포넌트 바깥으로 옮겨 별개로 사용
const typingRequest = [
    '도토리는 맛있다.',       //1단계
    '도토리는 정말 맛있다.',   //2단게
    '사실 도토리는 맛없다.',
    '오솔레미오',
    'Welcome to the black parade.'
];

//클라이언트가 입력한 값이 일치하는지 확인 후 Result.js에 적힌 결과를 보여줌
const TypingContest = () => {
    const [text, setText] = useState(''); //첫 입력창 = 빈 공간
    const [showResult, setShowResult] = useState(false); // 결과 기본값 설정
    const [timer, setTimer] = useState(10);
    const [nowRequestNo, nextRequestNo] = useState(0);

    let countdown;

    useEffect(() => {
        if(timer > 0){
            countdown = setTimeout(() =>{
                setTimer(timer - 1);
            }, 1000)     
        }
        if(timer == 0){
            alert("시간 땡");
        }
    }, [timer]);

    //타이핑 문제는 각각 번호(인덱스)가 있음을 이용
    //타이밍 문제 -> 현재 텍스트로 변경해서 각각의 타이핑 문제를 비교할 것
    const nowText = typingRequest[nowRequestNo];

    const changeValue = (e) => {
        setText(e.target.value);

        if(e.target.value === nowText){ //타이핑 문제 => 현재 텍스트
            setShowResult(true);
        }
    }

    const movetoNextRequest = () => {
        setText(''); //다음 문제로 이동 시 기존에 작성한 정답 지우기
        setShowResult(false);
        clearTimeout(countdown);
        setTimer(10);
        //문제 하나 맞추면 다음 문제로 넘어가기
        if(nowRequestNo < typingRequest.length -1 ){
            //index가 0부터 시작하기 때문에 -1
            nextRequestNo(nowRequestNo + 1);
        }
        else{ //2문제 모두 맞췄을 시 동작
            alert("모두 맞췄어요");
            Restart();
        }
    }

    const Restart = () => {
        setText('');
        setShowResult(false);
    }

    return(
        <div className='typing-test'>
            <h1>타자치기 대회</h1>
            <p>{nowText}</p>
            <p>{timer}</p>
            <div className='typing-container'>
                {/* 
                value = 초기 빈 공간, 
                onChange = 작성한 값 변경, 
                disabled = 정답일 때 입력한 값 수정 못하게 막음 
                */}
                <textarea value={text} onChange={changeValue} disabled={showResult}/>

                {/* 
                변경되지 않는 사진을 넣을 때 -> public
                사진의 특정 값을 주기적으로 변경할 때 -> src
                 */}
                <img src="/hancom.jpg" className='character-image'/>
            </div>
            {/* Result.js 에 inputText ={text}와 correctText={typingRequest} 결과 전달 */}
            {showResult && <Result inputText={text} correctText={nowText}/>}
            {showResult && <button onClick={Restart}>다시 시작</button>}
            {showResult && <button onClick={movetoNextRequest}>다음 문제로 이동</button>}
        </div>
    )
}
export default TypingContest;