import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Navbar from "./component/Navbar";
import Contact from "./component/Contact";

function App() {
  return (
    <div>
      <Navbar/> {/*링크 모음집이 시작되기 전에 내비게이션 바에 이동경로가 보이게 설정*/}
      <Routes>{/* 링크 모음집 */}

        {/* 
        java에서 GetMapping("/") -> react에서 path="/"
        java에서 return "html파일명" -> react 에서 element={<js파일명/>}
        다만 index.js는 이미 React에서 사용하고 있는 이름이기 때문에
        Index.js 나 index로 시작하는 이름은 피하는게 좋음
        */}
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
