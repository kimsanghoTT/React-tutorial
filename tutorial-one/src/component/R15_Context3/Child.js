import React, {useState, useContext} from "react";

//외부에서 만든 Context 객체를 import해서 가져와 사용
import UserContext from "./UserContext";

const Child = () => {
    //Context로 제공받은 값 가져오기
    //Context로 전달받은 객체 : {"userList" : userList, "setUserList" : setUserList}
    //전달 받은 값의 key 값을 변수명과 일치하게 작성해서 알아서 들어올 수 있도록 함
    const {userList, setUserList} = useContext(UserContext);
    

    //자식에서 컴포넌트 상태 변수 선언
    const [inputName, setInputName] = useState('');
    const [inputAge, setInputAge] = useState(0);

    const 사용자추가하기 = () => {
        //상태변수값을 이용해서 user 객체생성
        //const user = {"부모에전달할변수명" : 부모에전달할값};
        const user = {"name" : inputName, "age" : inputAge};      

        // userList 복사 = ...userList(기존유저리스트) + 유저데이터 추가
        // ...변수명 = 변수명에 담긴 모든 값을 복사
        //기존의 내용을 복제하고 복제한 리스트에 새로운 유저를 추가, 덮어쓰기
        const newUser = [...userList, user]; 
        
        //새로운 유저가 추가된 리스트로 변경
        setUserList(newUser);
    }
    return(
        <div>
            <label htmlFor="inputId">이름</label>
            <input type="text" id="inputId" onChange={(e) => {setInputName(e.target.value)}} value={inputName}/>
            <label htmlFor="inputAge">나이</label>
            <input type="number" id="inputAge" onChange={(e) => {setInputAge(e.target.value)} } value={inputAge}/>
            
            {/* 
            e(움직임감지).target(움직임이일어난곳).value(값을가져옴)

            value={inputName} = 초기값 = useState('')
            -> 움직임이 발생하면 value에 작성된 초기값이 감지된 값으로 변경이 됨
            */}
            <button onClick={사용자추가하기}>추가버튼</button>
        </div>
    )
   
}
export default Child;