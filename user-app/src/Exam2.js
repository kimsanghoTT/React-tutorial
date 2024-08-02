import { useState } from "react";
import User from "./User";
import EditForm from "./EditForm";
import './Exam2.css';

function Exam2() {

    //DB에 값이 없거나 초기값 목록들을 작성하는 방법
    const [userList, setUserList] = useState([
        { name: "유저1", age: 24, gender: "남자", phone: "010-2732-2241" },
        { name: "유저2", age: 27, gender: "여자", phone: "010-2674-0093" },
        { name: "유저3", age: 30, gender: "남자", phone: "010-3784-2834" },
    ]);
    const [editUser, setEditUser] = useState(null);

    /*

    1. 삼항 연산자를 사용해서 유저 정보 수정하기
    const updateUser = (유저수정하기) => {
        setUserList(userList.map(
            user => {user === editUser ? updateUser : user}
        ));
    }

    2. 삼항 연산자를 쓰지 않고 유저 정보 수정하기
    const updateUser = (유저수정하기) => {
        setUserList(userList.map(
            user => updateUser
        )); 
    }

    */
    const updateUser = (유저수정하기) => {
        setUserList(userList.map(
            user =>  ( user === editUser ?  유저수정하기  :  user)
        )); //유저 수정하기 버튼을 누르면 유저 수정을 진행
        setEditUser(null);
      }
    return (
        <div className="App">
            <h1>회원 정보 출력</h1>
            <hr></hr>
            <table className="member_tbl">
                <thead>
                    <tr>
                        <th>이름</th>
                        <th>나이</th>
                        <th>성별</th>
                        <th>전화번호</th>
                        <th>삭제</th>
                        <th>수정</th>
                    </tr>
                </thead>
                <tbody>
                    {userList.map((item, index) => (
                        (
                            <User
                                key={"user" + index}
                                user={item}
                                userList={userList}
                                setUserList={setUserList}
                                modifyUser={setEditUser}
                            />
                        )
                    ))}
                </tbody>
            </table>
            {/*만약 수정버튼의 동작이 감지되면 수정하는 js 파일 보여주기 */}
            {editUser && (
                <EditForm user={editUser} updateUser={updateUser}/>
            )}
        </div>
    );
}


export default Exam2;