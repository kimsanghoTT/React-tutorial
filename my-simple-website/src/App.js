import { Route, Routes } from 'react-router-dom';
import './App.css';
import Game from './component/Games/Game';
import Home from './component/Home';
import NavBar from './component/Layout/NavBar'
import Header from './component/Layout/Header';
import GameTwoStep from './component/Games/GameTwoStep';
import TodoList from './component/TodoList';
import TicTapToe from './component/Games/TicTapToe';
import TicTapToe2 from './component/Games/TicTapToe2';
import TypingContest from './component/Games/TypingTest';
import MovieGrade from './component/Movie/MovieGrade';
import Footer from './component/Layout/Footer';
import Aquarium from './component/Projects/Aquarium';

/* Module not found : Error => App.js에서 해당 파일 위치 찾을 수 없음을 알리는 에러 */
// ./ : 현재 폴더에서 가져온 파일과 동일한 폴더 위치에서 탐색
// ../ : 현재 폴더에서 가져온 파일의 상위 폴더에서 탐색
function App() {
  return (
    <div>
      <Header/>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/game" element={<Game/>}/>
        <Route path="/game-two-step" element={<GameTwoStep/>}/>
        <Route path="/todoList" element={<TodoList/>}/>
        <Route path="/TicTapToe" element={<TicTapToe/>}/>
        <Route path="/TicTapToe2" element={<TicTapToe2/>}/>
        <Route path="/TypingContest" element={<TypingContest/>}/>
        <Route path="MovieGrade" element={<MovieGrade/>}/>
        <Route path='Aquarium' element={<Aquarium/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
