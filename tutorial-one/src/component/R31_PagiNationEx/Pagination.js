import React from 'react';
import './Pagination.css';

const Pagination = ({itemPerPage, totalItems, paginate, currentPage}) => {

    const pageNumbers = [];
    const totalPages = Math.ceil(totalItems / itemPerPage); 

    for(let i = 1; i <= totalPages; i++){

        console.log("i값 : " + i);
        pageNumbers.push(i);
    }

    //페이지 번호 새로고침 함수 -> 페이지 번호를 10개씩 나눠 보여줌
    const renderPageNumber = () => {
        if(totalPages <= 10){
            return pageNumbers;
        }
        //시작 페이지 번호
        //currentPage - 5 : 현재 페이지를 기준으로 앞에 있는 5개의 페이지를 표시
        // 시작페이지 번호가 음수가 나올 수 있으므로 max 사용
        // -> Math.max(1, 현재페이지3) 이면 (3-5) = -2 -> 시작 페이지는 무조건 1이 됨 
        // -> Math.max(1, 현재페이지8)이면 (8-5) = 3 -> 시작 페이지는 3이 됨 
        // -> Math.max(절대최소값, 비교할 숫자);
        const startPage = Math.max(1, currentPage -5);

        //끝 페이지 번호
        //currentPage + 4 : 끝 페이지 번호는 전체 페이지 수를 초과할 수 없으므로
        //전체 페이지 수인 totalPage 이상으로 값을 못 가져오도록 막음
        // -> Math.min(15, 현재페이지 12) 이면 (12+4) =16 ->  마지막 페이지는 15 
        // -> Math.min(15, 현재페이지 3)이면 (3+4) =7 -> 마지막 페이지는 7 
        const endPage = Math.min(totalPages, currentPage +4);

        //현재 페이지를 중심으로 10개의 페이지 번호 전달
        //startPage = 1 이지만 배열의 인덱스는 0,
        //인덱스 값을 맞추기 위해 -1을 해줌
        return pageNumbers.slice(startPage -1, endPage);
    }

    return(
        <nav>
            {/* 10페이지 까지만 보여주고 << >> 이용해서 이전, 이후 기능 만들기 */}
            <ul className='pagination'>       
                {currentPage > 1 && (<li><a onClick={() => paginate(currentPage -1)} href='!#' className='page-link'>&laquo;</a></li>)}
                    {/*모든 페이지 번호*/}
                {renderPageNumber().map(number => (
                    <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                        <a onClick={() => paginate(number)} href="!#" className='page-link'>
                            {number}
                        </a>
                    </li>
                    ))}
                {currentPage < totalPages && (<li><a onClick={() => paginate(currentPage +1)} href='!#' className='page-link'>&raquo;</a></li>)}
            </ul>
        </nav>
    )
}
export default Pagination;