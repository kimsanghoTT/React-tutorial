import React, {useState} from "react";

//외부에서 만든 Context 객체를 import해서 가져와 사용
import UserContext from "./UserContext";
import Child from "./Child";


//부모 컴포넌트
const Parent = () => {
    //상태변수 userList, setUserList
    //userList 초기값 빈 배열 공간으로 설정
    const [userList, setUserList] = useState([]);
    //userList : 빈 목록
    //setUserList : 추가될 유저 리스트

    return(
        <UserContext.Provider value={{userList, setUserList}}>
            <Child/>
            <div>
                {/* child에서 추가한 user 정보 보여주는 공간 */}
                {/* userList 초기에 저장된 유저목록을 보여줌
                    추가되는 유저리스트는 map에 담겨 보여짐
                    map = key, value (유저의 inputName, inputAge에 담긴 값 전달)
                    저장이 된 값에 index(번호)를 매겨 순서대로 기록

                    0번 째
                        inputName = "홍길동" = "name" 이라는 이름으로 홍길동 이름이 저장
                        inputAge = 12 = "age"라는 이름으로 12라는 숫자가 저장
                    1번 째
                        inputName = "고길동" = "name" 이라는 이름으로 고길동 이름이 저장
                        inputAge = 15 = "age"라는 이름으로 15라는 숫자가 저장
                */}
                {userList.map((user, index) => {
                    return(
                        <ul key={index}>
                            <li>index : {index}번 째 유저</li>
                            <li>name : {user.name}</li>
                            <li>age : {user.age}</li>
                        </ul>
                    )
                })
                }
            </div>
        </UserContext.Provider>
/* 
배열.map((요소, index) =>{
    return(
        얻어온 값 확인하기
    )
})
배열의 각 값을 순서대로 하나씩 얻어와 return에 전달
return에서는 하나씩 얻어온 값들을 모두 모아서 새로운 배열을 반환

index는 자동으로 0부터 번호매김이 시작되는 값이기 때문에 다른 코드와 관련이 없음 -> 단순 번호매김
*/
    )
}
export default Parent;

