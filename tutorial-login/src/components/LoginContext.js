import {createContext} from "react";

// 로그인을 한 다음에 로그인한 정보를 모든 창에 띄워주기
// App.js에서 div태그 대신에 LoginContext 태그로 return을 감싸주면
// LoginContext 태그 안의 모든 태그에서는 로그인/로그아웃한 정보가 공유됨
const LoginContext = createContext();
export default LoginContext;