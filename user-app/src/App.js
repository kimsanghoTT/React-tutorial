import React from 'react';
import TodoList from './TodoList';
import UserList from './UserList';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

    return(
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<UserList/>}/>
                    <Route path="/todolist" element={<TodoList/>}/>
                </Routes>
            </Router>
        </div>

    )
}
export default App;