import { Route, Routes } from 'react-router-dom';
import NavBar from './component/NavBar';
import Header from './component/Header';
import Main from './component/Main';
import './App.css';
import TodoList from './component/TodoList';

function App() {
  return (
    <div>
      <Header/>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/todoList" element={<TodoList/>}/>
      </Routes>
    </div>
  );
}
export default App;