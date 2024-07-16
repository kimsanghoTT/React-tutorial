import React, {useState} from 'react';
import LoginContext from './components/LoginContext';
import Signup from './components/SignUp';
import Login from './components/Login';
import './App.css';
import TodoList from './components/TodoList';

// App.js는 제일 상위 컴포넌트(객체)
function App() {

  //회원 가입 창 보이기 / 숨기기
  const [signUpView, setSignUpView] = useState(false);

  //로그인한 회원 정보 저장
  const [loginMember, setLoginMember] = useState(null);
  return (
    // value = {} -> 하나의 값만 작성
    // value = {{}} -> 2개 이상의 값을 작성
    // loginMember = 처음 로그인 안된 초기값을 가지고 있음
    // setLoginMember = 로그인 후 로그인한 정보를 가지고 있음
    <LoginContext.Provider value={{loginMember, setLoginMember}}>
      <button onClick={() => {setSignUpView(!signUpView)}}>
        {signUpView ? '회원 가입 닫기' : '회원 가입 열기'}
      </button>
      {/* 회원 가입 화면 */}
      <div className='"signup-wrapper'>
        {/* signUpView가 true 일 경우에만 실행되는 공간 = 눈에 보여짐 */}

        {/* 조건식 && (true일 경우 실행) */}
        {signUpView === true && (<Signup/>)}
      </div>

      <h1>Todo List</h1>
      {/* 로그인을 해야 TodoList 보이도록 */}
      <Login/>
      <hr/>
      {/* 로그인이 됐을 때 로그인 한 회원의 todoList 출력 */}
      {loginMember !== null && (<TodoList/>)}
    
    </LoginContext.Provider>
  );
}

export default App;
