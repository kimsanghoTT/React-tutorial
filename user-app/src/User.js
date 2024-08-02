import React from 'react';

const User = ({user, userList, setUserList, modifyUser}) => {
/*

1번 : const User = ({ user, userList, setUserList, 수정버튼 }) => {

2번 : const User = (props) => {
    const user = props.user;
    const userList = props.userList;
    const setUserList = props.setUserList;
    const 수정버튼 = props.setEditUser;

1번과 2번은 같은 의미
  
*/
    const deleteUser = () => {
        const newUserList = userList.filter((item) => item !== user);
                                        // item === user : 선택한 것 이외 모두 삭제

/*
    const newUserList1 = userList.filter((item) => {return item === user; });
    const newUserList2 = userList.filter((item) =>  item === user );

    위에건 구문법
*/
        setUserList(newUserList);
    };


    return (
        <tr>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.gender}</td>
            <td>{user.phone}</td>
            <td>
                <button onClick={deleteUser}>삭제하기</button>
            </td>
            <td>
                <button onClick={() => modifyUser(user)}>수정하기</button>
            </td>
        </tr>
    );
};
export default User;