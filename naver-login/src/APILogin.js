import React, {useEffect, useState} from "react";

const APILogin = () => {

    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        const 유저정보 = () => {
            fetch('http://localhost:9011/userInfo') //http메서드
            .then(responseResult => {//then : fetch가 자바 컨트롤러에서 값을 가져왔을 때 실행할 구문
                return responseResult.json();
            })
            .then(data => { // 위 then에서 실행한 구문을 바탕으로 데이터를 userInfo에 넣어주기
                setUserInfo(data);
            })
            .catch(err => { // 위의 then들에 문제가 생겼을 때 문제를 catch할 구문
                console.error("error user INFO : " , err);
            })
        }
        유저정보();
    },[]);
    return(
        <>
        {/* userInfo 정보가 있으면 로그인 완료, 없으면 로그인 하기 화면 보여주기 */}
        {userInfo ? ('존재하면 보여줄 코드') : ('존재하지 않으면 보여줄 코드')}
        {userInfo ? (    

        /* userInfo가 있을 때 */
        <div>
            <h1>로그인 완료</h1>
            <div>{JSON.stringify(userInfo, null, 2)}</div>
        </div>

        ) : (

        /* userInfo가 없을 때 */
        <a href="http://localhost:9011/api/naverLogin">
            <img height="50" src="http://static.nid.naver.com/oauth/small_g_in.PNG" alt="네이버로그인"/>
        </a>
        
        )}
        </>
    )
}
export default APILogin;
/*
* {JSON.stringify(userInfo, null, 2)}
    - {백엔드에서 가져온 값 문자열처리(네이버에서 가져온 값, 특정값을 변환, 두 칸 들여쓰기)}
    - JSON.stringify : 자바 백엔드에서 가져온 값을 문자열로 변환 
        -> 자바에서 가져오는 데이터가 숫자인지 문자인지 알 수 없는 상태이기 때문. 
        -> 안전하게 문자열로 가져오기

    - (userInfo, null, 2) : 가져온 값 중에서 특정 값을 변경하거나 필터링할 것인가?
        -> 변경하지 않는다 = null
        2 : 2칸 들여쓴다

    ** (userInfo, 특정값 변환, 2) 예제

    const userInfo = {
        id: "123456",
        name: "홍길동",
        phone:"010-9876-5432"
    }
    *** DB에 유저가 작성한 핸드폰 번호 중 - 를 제거하고 01098765432로 저장하길 원할 때

    const 번호변경 = (key, value) => {
        //만약 key 이름이 phone이라면
        if(key === 'phone){
            return value.replace("-",""); // '-'를 "" 사용해서 없애기 적용
        }
    }
        ↓↓↓

    {JSON.stringify(userInfo, 번호변경, 2)}

        ↓↓↓

    const userInfo = {
        id: "123456",
        name: "홍길동",
        phone:"01098765432"
    }

    *** 번호를 변경하지 않고 기존의 유저정보를 그대로 사용하고자 할 때
    {JSON.stringify(userInfo, null, 2)}
    null = 변경사항 없음
*/