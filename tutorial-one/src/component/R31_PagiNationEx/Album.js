import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Pagination from '../R31_PagiNationEx/Pagination';
import './Pagination.css';

const AlbumList = () => {

    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemPerPage = 5;

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(res => {
            setData(res.data);
        })
        .catch(err => {
            alert("오류 발생 : " + err)
        });
    }, []);

    const lastItem = currentPage * itemPerPage;
    const firstItem = lastItem - itemPerPage;
    const itemList = data.slice(firstItem, lastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return(
        <div className='container'>
            <h1>앨범 리스트</h1>
            <ul className='list-group mb-4'>
                {itemList.map(item => (
                    <li key={item.albumId} className='list-group-item'>
                        <img src={item.thumbnailUrl}/>
                        <br/>
                        <strong>title : {item.title}</strong>
                    </li>
                ))}
            </ul>
            <Pagination
            itemPerPage={itemPerPage}
            totalItems={data.length}
            paginate={paginate}
            currentPage={currentPage}/>
        </div>
    )
}
export default AlbumList;