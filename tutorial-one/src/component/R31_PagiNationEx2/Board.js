import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PagiNation from './PagiNation';

const Board = () => {
    const [item, setItem] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemPerPage] = useState(5);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')

        .then(res => {
            setItem(res.data);
        })
        .catch(err => {
            alert('에러 발생');
        })
    }, []);

    const lastItem = currentPage * itemPerPage;
    const firstItem = lastItem - itemPerPage;
    const itemList = item.slice(firstItem, lastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return(
        <div className='container'>
            <h1>보드</h1>
            <ul className='list-group mb-4'>
                {itemList.map(item => (
                    <li key={item.id} className='list-group-item'>
                        {item.title}
                    </li>
                ))}
            </ul>
            {<PagiNation
            itemPerPage={itemPerPage}
            totalItems={item.length}
            paginate={paginate}
            currentPage={currentPage}
            />}
        </div>
    )
}
export default Board;