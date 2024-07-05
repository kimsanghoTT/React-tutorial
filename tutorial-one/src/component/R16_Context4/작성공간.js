import React, {useState, useContext} from "react";
import 유저정보모두저장 from './유저정보모두저장';

//input 타입을 만들고 저장하는 버튼을 생성
const 작성하는공간 = () => {
    const {userList, setUserList} = useContext(유저정보모두저장);

    const [inputName, setInputName] = useState('');
    const [inputPhone, setInputPhone] = useState('');

    const 유저추가 = () => {
        const user = {"userName" : inputName, "userPhone" : inputPhone};
        const newUserList = [...userList, user]
        setUserList(newUserList);

        //멤버가 저장이 되면 input에 작성된 내용 모두 지우기
        setInputName('');
        setInputPhone('');
    }

    return(
        <div>
            <label htmlFor="inputName">이름 : </label>
            <input type="text" value={inputName} id="inputName" onChange={(e) =>{setInputName(e.target.value)}}/>
            <label htmlFor="inputPhone">번호 : </label>
            <input type="text" value={inputPhone} id="inputPhone" onChange={(e) =>{setInputPhone(e.target.value)}}/>
            <button onClick={유저추가}>제출하기</button>
        </div>
    )
}
export default 작성하는공간;