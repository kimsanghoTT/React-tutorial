import { useContext } from "react";
import AuthContext from "./AuthContext";
import { Link } from "react-router-dom";

const Header = () => {
    const {loginMember, setLoginMember} = useContext(AuthContext);
    //const [loginMember, setLoginMember] = useContext(AuthContext);
    //[] -> 변수를 새로 설정, {} -> 외부에서 작성된 변수를 가져와서 사용할 때 설정
    //localStorage : 고객 컴퓨터 웹사이트에 데이터를 영구히 저장. 저장된 데이터는 컴퓨터를 껐다 켜도 유지
    // 사용자가 타이머를 맞춰서 삭제하거나 로그아웃, 캐시삭제를 하지 않는 한 유지됨. 
    //ex)로그인 유지 기능

    const handleLogout = () => {

        setLoginMember(null);
        localStorage.removeItem('loginMember');

    }

    return(
        <header>
            <h1>헤더 부분</h1>
            <nav>
                {loginMember ?     
                (
                <div>                 {/* (loginMember.java에 저장된 변수명을 작성) */}
                    <span>환영합니다. {loginMember.name}님</span>
                    <button onClick={handleLogout}>로그아웃</button>
                </div>
                ) : 
                (
                <div>
                    <Link to="/login">로그인</Link>
                    <Link to="/api/naver">회원가입</Link>
                </div>
                )}
            </nav>
        </header>
    )
}
export default Header;