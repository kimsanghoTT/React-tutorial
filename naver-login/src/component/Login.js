import { useState } from 'react';
import '../css/Login.css';
import axios from 'axios';

const Login = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    
    const 로그인기능 = () => {
            fetch('http://localhost:9011/login', {
                method : 'POST',
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify({id, password})
            })
            .then(res => {
                if(res.ok){
                    return res.text();
                }  
            })
            .then(result => {
                setMessage(result); //자바에서 로그인 실패/성공 메시지 그대로 사용
            })
            .catch(err => {
                alert("에러 발생 : ", err);
            })
    }

    const 로그인기능2 = () => {
        axios.post('http://localhost:9011/login', null, {
            params: {
                id: id,
                password: password
            }
        })
        .then(res => {
            if (res.status === 200) { // HTTP 상태 코드가 200일 경우
                setMessage("로그인 성공");
            }
        })
        .catch(err => {
            setMessage("로그인 중 문제가 발생");
            console.error("로그인 에러:", err);
        });
    }

    return (
        <div className='login-container'>
            <h3>로그인</h3>
            <div>
                <label> 아이디 :
                    <input placeholder="아이디" value={id} onChange={(e) => setId(e.target.value)}/>
                </label>
                <label> 비밀번호 :
                    <input type="password" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <button onClick={로그인기능2}>로그인하기</button>
                {message && <p>{message}</p>}
                <div className='find-sign-buttons'>
                    <button>아이디찾기</button>
                    <button>비밀번호찾기</button>
                    <button>회원가입</button>
                </div>
            </div>
            <label>
                sns로 로그인하기 :
                <img src="/naver_image/btnG_iconRound.png" className='naver-logo-image'/>
            </label>
            {/*
            <button className='naver-login-button'>
                <img src="/naver_image/btnG_iconRound.png" />
                네이버로 회원가입
            </button>
            */}
        </div>
    )
}
export default Login;