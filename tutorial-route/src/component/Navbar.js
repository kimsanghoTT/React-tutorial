import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return(
        <nav>
            <ul>
                {/*
                SpringBoot + html에서는 <a href="/">Home</a>로 작성
                React에서는 <Link to="/">Home</Link>로 작성 
                a가 Link와 같고 href가 to와 같음
                */}
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}
export default Navbar;