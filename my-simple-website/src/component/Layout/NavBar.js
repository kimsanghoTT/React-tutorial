import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="Game">숫자 맞추기 게임</Link></li>
                {/* 2단계 게임 링크를 nav에는 작성하지 않음 
                    -> 1단계를 통과해야 2단게 링크를 보여줄 것이기 때문
                */}
                <li><Link to="todoList">할 일 목록</Link></li>
                <li><Link to="/TicTapToe">TicTapToe게임</Link></li>
                <li><Link to="/TypingContest">타자치기</Link></li>
                <li><Link to="/MovieGrade">영화 평점</Link></li>
            </ul>
        </nav>
    )
}
export default NavBar;