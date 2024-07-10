import { Route, Routes } from 'react-router-dom';
import NavBar from './component/NavBar';
import Header from './component/Header';
import Main from './component/Main';
import './App.css';
import TodoList from './component/TodoList';
import TicTapToe from './component/TicTapToe';
import Dodgegoblin from './component/Dodgegoblin';

function App() {
  return (
    <div>
      <Header/>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/todoList" element={<TodoList/>}/>
        <Route path="/TicTapToe" element={<TicTapToe/>}/>
        <Route path="/Dodgegoblin" element={<Dodgegoblin/>}/>
      </Routes>
    </div>
  );
}
export default App;