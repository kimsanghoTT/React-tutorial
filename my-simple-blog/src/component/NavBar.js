import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <nav>
            <ul>
                <li><Link to="/">Main</Link></li>
                <li><Link to="/todoList">TodoList</Link></li>
                <li><Link to="/TicTapToe">TicTapToe</Link></li>
                <li><Link to="/Dodgegoblin">Dodgegoblin</Link></li>
            </ul>
        </nav>
    )
}
export default NavBar;