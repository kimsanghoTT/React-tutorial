import { Route, Routes } from 'react-router-dom';
import './App.css';
import Game from './component/Game';
import Home from './component/Home';
import NavBar from './component/NavBar';
import Header from './component/Header';
import GameTwoStep from './component/GameTwoStep';
import TodoList from './component/TodoList';

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
      </Routes>
    </div>
  );
}

export default App;
