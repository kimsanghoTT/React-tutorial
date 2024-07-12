import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Pagination from './Pagination';

const Board = () => {
    //데이터 정보 가져오는 변수명
    const [data, setData] = useState([]);

    //현재 페이지
    const [currentPage, setCurrentPage] = useState(1);

    // 한 페이지에 게시글 10개 보여줌
    const [itemPerPage] = useState(10); 

    //현재 페이지에서 첫 번째 항목과 마지막 항목을 체크
    const lastContent = currentPage * itemPerPage;
    const firstContent = lastContent - itemPerPage;
    const contentList = data.slice(firstContent, lastContent);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')

        .then((res) => {
            setData(res.data);
        })
        .catch((err) => {
            alert("에러 : " + err);
        });

    }, []);

    //이동할 페이지를 클릭할 때 동작할 핸들러
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return(
        <div className='container'>
            <h1>react 페이지네이션 예제</h1>
            <ul className='list-group mb-4'>
                {contentList.map(content => (
                    <li key={content.id} className='list-group-item'>
                        {content.title}
                    </li>
                ))}
            </ul>
            {/* 페이지네이션은 아래 페이지네이션 태그에서 동작 */}
            <Pagination
            itemPerPage={itemPerPage}
            totalItems={data.length}
            paginate={paginate}
            currentPage={currentPage}/>
        </div>
    )
}
export default Board;