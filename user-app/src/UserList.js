import './App.css';
import {useState} from 'react';
/*

const 기능 = () => {
  return 리턴값  // 다만 return이 필수인겉 아님
}

const 기능 = () => (
  // return 없음
)

ex)

const 인사기능 = () => {
  const 인사메세지 = "안녕하세요";
  return 인사메세지;
}

const 인사기능 = () => (
  alert("좋은 아침입니다.");
)


<input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
<button onClick={() => 삭제버튼(index)}>삭제</button>

- e = 변화하는 값이나 변화가 있음을 감지

- button의 경우 클릭의 용도만 있고 특정 값이 임의로 설정되는 일이 없기 떄문에 버튼에서는 e같은 변수명을 생략

- input의 경우 사용자가 어떤 값을 작성할지 모르기 때문에 사용자가 입력한 값을 이벤트로 받아들이고
  이벤트가 감지되면 value값으로 취급함

*/
function UserList() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');

  const 추가버튼 = () => {
    setUsers([...users, name]);
    setName('');
  }

  const 삭제버튼 = (index) => {
    //users : 유저 목록  user : 유저명   i : users에 있는 유저가 저장된 번호
    setUsers(users.filter((user,i) => i !== index)); // 유저 목록 교체
    /*
    setUsers(users.filter((user,   index) => index !== index));
            유저목록      유저명  유저번호 => 배열에 저장된번호 !== 삭제하려고 누른 번호
    ->배열에 저장된 번호와 삭제하려고 누른 번호가 같지 않은 사람만 배열에 등록

    setUsers(users.filter((user,   index) => index === index));
    -> 삭제버튼을 누른 번호 의외의 모든 번호를 삭제
    */  
  }
  return (
    <div className="App">
      <h1>유저 리스트</h1>
      <h3>유저 추가하기</h3>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      <button onClick={추가버튼}>추가</button>
    
    
      <h3>유저 리스트 보기</h3>
      <pre><h4>인덱스   -   유저명</h4></pre>
      {users.map((user, index) => (
        <li key={index}>
        {index} - {user}
        <button onClick={() => 삭제버튼(index)}>삭제</button>
        </li> 
        
      ))}
      
    </div>
  );
}

export default UserList;
