import axios from 'axios';
import UserTable from './component/UserTable';
import './App.css';
import { useEffect, useState } from 'react';
import UserForm from './component/UserForm';

function App() {
  const [users, setUsers] = useState([]); //유저 목록 담을 빈 배열 생성

  //useEffect(() => {기능}, [특정변수명]) 
  //=> 특정 변수명이 없으면 페이지 시작 때 1회만 실행되고 실행되지 않음
  //특정 변수명이 있다면 변화가 있을 때마다 기능이 실행됨
  //버튼이나 특정 값을 클릭하지 않아도 자동 실행됨
  useEffect(() => {
    findAllUser(); //홈페이지 들어오면 모든 유저 목록 보여줌
  },[]) // -> []가 비어있기 때문에 1번만 실행

  /*
  const findAllUser = () => {
    //axios로 모든 유저 보기
    axios.get("/users") //controller의 GetMapping과 일치하도록
    .then(res => {//자바에서 DB에 있는 정보를 가져와 사용자에게 요청에 대한 응답을 보내줌
      setUsers(res.data); //응답결과 데이터로 users를 변경
    })
    .catch(err =>{ //응답을 가져오는 데 문제가 생겼을 경우
      alert("응답 가져오기 실패"); //주로 console.log를 많이 사용
    })
  }
  */
 /*
  //1. axios 성공, 실패에 대한 결과를 처리하는 버전
  const findAllUser = () => {
    axios.get("/users") 
    .then(res => {
      setUsers(res.data); 
    })
    .catch(err =>{ 
      alert("응답 가져오기 실패"); 
    })
  }
  */

  //2.axios 성공에 대한 결과만 보여주는 버전 async, await
  /*
  async : 기능 실행
  await : 값을 가져올 때까지 대기
  */
 /*
  const findAllUser2 = async () =>{
    const res = await axios.get("/user"); //controller에 있는 users주소에서 데이터를 가져옴

    //성공 시
    setUsers(res.data); //가져오는 데 성공하면 유저목록을 만들어주는 것
  }
  */
  //async await 사용
  const findAllUser = async () => {
    const res = await axios.get('/users');
    setUsers(res.data);
  };

  //유저 추가하기 = addUser에서 가져온 user 한 명 넣어주기
  const addUser = async (user) => {
    const res = await axios.post('/users', user);

    //[...users], res.data =>기존에 작성한 유저 목록에 유저 데이터 하나를 추가
    setUsers([...users], res.data);
  }

  return (
    <div className="App">
      <h1>유저 관리하기</h1>
      <UserForm addUser={addUser}/>
      <UserTable users={users}/>   
    </div>
  );
}

export default App;
