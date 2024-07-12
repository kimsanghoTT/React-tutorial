import React, { useEffect, useState } from "react";

const FetchEx = () => {

    const [users, setUsers] = useState([]);
    //const [error, setError] = useState(null);

    //데이터 가져오기
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        
        .then(res =>{ //데이터를 가지고 왔는지 확인
            return res.json(); //데이터를 가져왔으면 json 정보 넘겨주기
        })
        
        .then(data =>{
            setUsers(data);
        })

        .catch(e => {
            alert("에러가 발생했습니다." + e);
            //setError(e);
        })
    }, []);
    return(
        <>
        <h1>User List 보기</h1>
        <ul>
            {users.map(user => (      
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
        </>
    )
}
export default FetchEx;