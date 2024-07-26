import axios from 'axios';
import UserTable from './component/UserTable';
import './App.css';
import { useEffect, useState } from 'react';
import UserForm from './component/UserForm';
import EditUserForm from './component/EditUserForm';

function App() {
  const [users, setUsers] = useState([]); //유저 목록 담을 빈 배열 생성

  //수정한 유저정보를 임시로 담을 변수 생성
  const [userToEdit, setUserToEdit] = useState(null);
  //useEffect(() => {기능}, [특정변수명]) 
  //=> 특정 변수명이 없으면 페이지 시작 때 1회만 실행되고 실행되지 않음
  //특정 변수명이 있다면 변화가 있을 때마다 기능이 실행됨
  //버튼이나 특정 값을 클릭하지 않아도 자동 실행됨
  useEffect(() => {
    findAllUser(); //홈페이지에 들어오거나 유저목록(users)에 변경이 일어나면 모든 유저 목록을 불러옴
  },[/*users*/]) // -> 유저목록(users)이 변경될 때마다 자동으로 모두 불러오기 기능을 다시 실행
             // -> []가 비어있으면 1번만 실행


  //axios로 모든 유저 보기           
  /*
  const findAllUser = () => {
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

  //유저 삭제하기
  const deleteUser = async (id) => {
    /*
    "", '' : 글자 취급 : http://localhost:3000/users?id=${id} 로 하는 셈
    `` : 글자 안의 특정 값을 변수명으로 취급해야할 때 : http://localhost:3000/users?id=1(숫자) 로 하는 셈
        ``안에서 변수명으로 처리해야하는 값은 ${}으로 사용
          -> ${융통성있게 변경되어야하는 변수명}
    */
    await axios.delete(`/users?id=${id}`);
    //await axios.delete(`/users`, {params: {id}});

    setUsers(users.filter(user => user.id !== id));
    /*
    users : 현재 저장된 유저 목록
    users.id != id : 유저의 id가 삭제하고자하는 id가 일치하지 않으면
    setUser(새로운 유저목록)에 포함시킴

    -> user.id와 삭제하려는 id가 일치하면 필터에 걸러지고(삭제) setUser(새로운 유저목록)을 완성
    * filter : 걸러내기 기능
    */
    /* 
    자바 컨트롤러에서 
    * @DeleteMapping("/{id}")라고 썼을 경우
        매개변수에 (@PathVariable int id) 작성
        리액트 axios에서 id=${id}이다 작성
        await axios.delete(`/users?id=${id}`);
        -> 주소값에 id 대신 삭제할 번호가 들어갈 수 있도록 설정

    * @DeleteMapping()에 특정 id값을 설정하지 않았을 경우
        매개변수에 (@RequestParam("id") int id)
          - ("id") = (value="id") = 프론트엔드에서 가져온 id값
        params: {id}
        await axios.delete(`/users`, {params: {id}});
    */
  }

  //유저 정보 수정
  const updateUser = async (user) => {
    await axios.put('/users', user); // PutMapping/users로 주소값이 설정된 수정하는 주소 연결
    setUsers(users.map(u => (u.id === user.id ? user : u)));
    //수정한 유저의 id 값이 일치하는 지 확인 후 일치하지 않으면 기존에 있던 유저 정보로 
    //수정을 취소하고 전달
  }

  //유저 정보 수정 취소
  const cancelEdit = () => {
    setUserToEdit(null); //유저 정보 수정 취소 할 때 null 빈 값으로 변경하는 트릭
  }

  //유저 수정 완료 시 유저 목록에 수정된 유저를 전달
  const editUser = (user) => {
    setUserToEdit(user);
  }

  return (
    <div className="App">
      <h1>유저 관리하기</h1>
      <UserForm addUser={addUser}/>
      <UserTable users={users} deleteUser={deleteUser} editUser={editUser}/>
      {userToEdit && (
        <EditUserForm userToEdit={userToEdit} updateUser={updateUser} cancelEdit={cancelEdit}/>
      )} 
    </div>
  );
}

export default App;
