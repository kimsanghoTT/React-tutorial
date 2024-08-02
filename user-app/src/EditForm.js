import { useState } from "react";

const EditForm = ({user, updateUser}) => {

    const[formData, setFormData] = useState(user);
    //수정하기 전에 수정하고자 하는 유저 정보 담을 공간 작성
/*

<User
    key={"user" + index} 
    user={item} userList={userList} setUserList={setUserList} modifyUser={setEditUser}
/>

유저 리스트를 item으로 유저 정보를 한 명씩 전달 받음.
전달받은 유저정보를 user 변수명에 item에 담긴 유저 한 명의 정보를 저장
저장된 user 변수명을 가져와서 EditForm에 아래와 같이 작성

formData = { name: "유저1", age: 24, gender: "남자", phone: "010-2732-2241" }

const [formData, setFormData] = useState(user);
user에 담긴 정보가 formData라는 변수에 저장
*/

const changeValue = (e) => { //이벤트가 발생하면 이벤트가 발생한 곳에 name(속성)과 value(속성)를 가져옴
    const {name, value} = e.target;
    setFormData({...formData, [name] : value});
}

const submitUpdatedData = (e) => {
    e.preventDefault();
    updateUser(formData);
}
console.log(formData);
    return(
        <div>
            <form>{/* 폼 = submit button = onSubmit */}
                <h2>회원 정보 수정</h2>
                <label>
                    이름 : <input type="text" name="name" value={formData.name} onChange={changeValue}/>
                    나이 : <input type="number" name="age" value={formData.age} onChange={changeValue}/>
                    성별 :  <input type="text" name="gender" value={formData.gender} onChange={changeValue}/>
                    전화번호 : <input type="text" name="phone" value={formData.phone} onChange={changeValue}/>
                </label>
                <button type="button" onClick={submitUpdatedData}>저장하기</button>
            </form>
        </div>
    )
}
export default EditForm;