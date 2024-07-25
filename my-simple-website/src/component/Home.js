import React from "react";
import { Link } from "react-router-dom";
import '../CSS/Home.css';

const Home = () =>{
    return(
        <div className="home-container">
            <header className="home-header">
                <h1>소개 및 포트폴리오</h1>
                <p>지원 스킬과 포트폴리오를 확인할 수 있습니다.</p>
            </header>

            {/* 소개 섹션 part1, 2 */}

            {/* 사진 첨부x about 
            <section className="home-about-one">
            <h2>소개</h2>
                <p>이름 : 김상호</p>
                <p>나이 : 29</p>
                <p>학력 : 4년제 대졸</p>
                <p>이메일 : qwert8494@naver.com</p>
                <p>깃허브 주소 : <a href="https://github.com/kimsanghoTT">https://github.com/kimsanghoTT</a></p>
            </section>
            */}
            {/* 1 row를 2 col로 나눠 좌사진 우소개 about */}
            <section className="home-about-two">
            <h2>소개</h2>
                <div className="about-row">
                    <div className="about-image">
                        <img src="/image/김상호_0115.jpg" alt="프로필 사진"/>
                    </div>
                    <div className="about-text">
                        <p>이름 : 김상호</p>
                        <p>나이 : 29</p>
                        <p>학력 : 인하대학교(졸업)</p>
                        <p>이메일 : qwert8494@naver.com</p>
                        <p>깃허브 주소 : <a href="https://github.com/kimsanghoTT">https://github.com/kimsanghoTT</a></p>
                    </div>
                </div>
            </section>

            {/* 보유 기술 섹션 */}

            <section className="home-skills">
                <h2>기술</h2>
                <ul>
                    <li>HTML / CSS / JavaScript</li>
                    <li>React</li>
                    <li>Java</li>
                    <li>Spring Boot</li>
                    <li>SQL : Oracle, MySQL</li>
                </ul>
            </section>

            {/* 프로젝트 소개 - 1섹션 1프로젝트 */}

            <section className="home-projects">
                <h2>프로젝트</h2>
                <div className="project-item">
                    <h3>Semi Project</h3>
                    <p>프로젝트 설명</p>
                    <p><Link to="Aquarium">아쿠아리움</Link></p>
                </div>

            </section>
        </div>
    )
}
export default Home;