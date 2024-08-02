import React from 'react';
import TodoList from './TodoList';
import UserList from './UserList';
import Exam2 from './Exam2';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

    return(
        <div>
            <Router>
                <Routes>{/* 
                    <Route path="/" element={<UserList/>}/>
                    <Route path="/todolist" element={<TodoList/>}/>*/}
                    <Route path="/" element={<Exam2/>}/>
                </Routes>
            </Router>
        </div>

    )
}
export default App;