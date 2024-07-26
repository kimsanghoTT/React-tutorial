import React, { useEffect, useState } from "react";

const EditUserForm = ({userToEdit, updateUser, cancelEdit}) => {
    //기존 이름, 이메일과 변경할 이름, 이메일을 담을 변수명 설정
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        if(userToEdit){
            setName(userToEdit.name);
            setEmail(userToEdit.email);
        }
    }, [userToEdit]);

    return(
        <div>
            {/* 수정을 진행한다면 폼을 보여주고 수정하지 않는다면 폼을 보여주지 않음 */}
            {userToEdit ? (
                <form>
                    <h2>유저 정보 수정하기</h2>
                    <label>
                        이름 : <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                    </label>                
                    <label>
                        이메일 : <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </label>
                    <button onClick={() => updateUser(userToEdit)}>저장하기</button>
                    <button onClick={() => cancelEdit()}>취소하기</button>
                </form>
            ) : null}
        </div>
    )
}
export default EditUserForm