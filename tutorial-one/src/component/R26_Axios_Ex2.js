import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function Axios_Ex2(){
    const [data, setData] = useState(null);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")

        .then(res => {
            setData(res.data);
        })
        .catch(error => {
            alert("데이터 불러오기 실패");
        })
    }, []);

    return(
        <>
        <h1>json 내용 가져오기</h1>
        <ul>
            {data && data.map(comment =>(
                <li key={comment.postId}>
                    <strong>PostID : </strong>{comment.postId}<br/>
                    <strong>ID : </strong>{comment.id}<br/>
                    <strong>Name : </strong>{comment.name}<br/>
                    <strong>Email : </strong>{comment.email}<br/>
                    <strong>Body : </strong>{comment.body}<br/>
                </li>
            ))}
        </ul>
        {data && <textarea rows={20} cols={80} value={JSON.stringify(data, null, 2)} readOnly={true} />}
        </>
    )
}