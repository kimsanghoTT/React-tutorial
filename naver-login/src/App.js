import './App.css';
import NaverAPI from './component/NaverAPI';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NaverSignUp from './component/NaverSignUp';
import Header from './component/Layout/Header';
import { useEffect, useState } from 'react';
import AuthContext from './component/Layout/AuthContext';
import Login from './component/Login';

function App() {
  //로그인 정보를 받고 전달
  const [loginMember, setLoginMember] = useState(null);

  //로그인한 정보가 있다면 localStorage에 저장
  useEffect(() => {
    if(loginMember){
      localStorage.setItem("loginMember", JSON.stringify(loginMember));
    }
    //로그인한 멤버가 변경될 때마다 새로 저장
  }, [loginMember]);

  useEffect(() => {
    const savedMember =localStorage.getItem("loginMember");

    //만약 loginMember 변수에 저장된 회원 정보가 있다면 setLoginMember에 넣어주기
    if(savedMember){
      setLoginMember(JSON.parse(savedMember)); // 데이터 손실 방지를 위해 JSON 형식으로 변환
    }
  },[]);
  return (
    <AuthContext.Provider value={{loginMember, setLoginMember}}>
      <Router>
        <Header/>
          <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/api/naver' element={<NaverAPI/>}/>
            <Route path='/signup/naver' element= { <NaverSignUp/>}/>
          </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;