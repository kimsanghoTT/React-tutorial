import React from 'react';
import './Pagination.css';
/*
itemPerPage : 한 페이지에 보여줄 항목 수
totalItem : 전체 항목 개수
paginate : 페이지 번호를 업데이트하는 함수
currentPage : 현재 보고있는 페이지 번호

*/
const Pagination = ({itemPerPage, totalItems, paginate, currentPage}) => {

    const pageNumbers = [];

    //전체 항목 수와 페이지당 항목 수를 바탕으로 전체 페이지 수를 계산

    //pageNumbers에 페이지 번호 저장
    for(let i = 1; i <= Math.ceil(totalItems / itemPerPage); i++){
        /*
        ex)
        20개의 글이 존재, 한 페이지당 3개 글씩 보여주려면
            -> 20 / 3 = 6.6666.. -> ceil로 올림 해서 7페이지로 만듦
        */
        console.log("i값 : " + i);
        pageNumbers.push(i); //push : 값을 추가. pageNumbers에 만들어진 번호들을 추가
    }

    return(
        <nav>
            <ul className='pagination'>                    {/*
                    {`page-item ${currentPage === number ? 'active' : ''}`}
                    : 만약 현재 페이지와 map에서 가리키는 번호가 일치한다면
                    className = "page-item active"

                    현재 페이지번호와 map에서 가리키는 번호가 다르다면(현재 페이지 이외 다른 페이지 번호들)
                    className = "page-item"
                    */}
                {pageNumbers.map(number => (
                    <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                        <a onClick={() => paginate(number)} href="!#" className='page-link'>
                            {/* 
                            href="!#" : 클릭 이벤트가 발생했을 때 페이지 새로고침 방지 
                            
                            <a onClick={(e) =>{e.preventDefault(); paginate(number);}} href="/">
                            같음
                            */}
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
export default Pagination;