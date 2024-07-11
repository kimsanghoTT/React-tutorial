import React, {useState, } from 'react';
import axios from 'axios';
// npm i axios
export const Axios_Ex1 = () => {
    const [data, setData] = useState(null);
    const loadBtn = () => {
        //axios.get("https://스프링부트:8080/상세보기/1")랑 같은 식
        axios.get("https://jsonplaceholder.typicode.com/todos/")

        // 정상적으로 가져왔다면, then 을 사용하여 data 값 변경하기
        .then(res => {
            setData(res.data);
        })
        // 가져오는데 실패했다면, 에러 출력하기
        .catch(error => {
            alert("데이터를 가져오는데 실패했습니다.");
        })
    }
    return (
        <>
            <h1>버튼을 클릭하면, JSON 안에 작성된 내용 가져오기</h1>
            <button onClick={loadBtn}>불러오기</button>
            <br/>
             
            {data && <textarea rows={20} cols={80} value={JSON.stringify(data, null, 2)} readOnly={true} />}
            
        </>
    )
}
/*
    {data && <textarea value={JSON.stringify(data, null, 2)} readOnly={true} />}
    data && : 데이터가 존재한다면
    <textarea /> 안에 JSON 으로 가져온 값 추가
    JSON.stringify: JSON 으로 가져온 값을 문자열로 변환(String 으로 받아들이겠다.)
    data: JSON 으로 가져온 데이터
    null: 모두 선택(String 으로 어디서부터 어디까지 변환할 것인지를, null(모든 속성) 을 선택한 것)
    2: 2칸씩 들여쓰기 하겠다.(괄호가 바뀔 때마다, 2칸씩 들여쓰기 하겠다.)
*/