import React, { useState } from "react";
import './TodoList.css';

function TodoList(){
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const addTodo = () =>{
        setTodos([...todos, { text: input, completed: false }]);
        setInput('');
    };

    const toggleTodo = (index) =>{
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };
    return(
        <div className="TodoList">
            <h1>My Todo List</h1>
            <div>
                <input className="todoInput" 
                value={input} 
                onChange={(e) => setInput(e.target.value)}/>
                <button className="todoButton" onClick={addTodo}>할 일 추가</button>
            </div>
            <ul>
                {todos.map((todo, index) =>(
                    <li className="todoList"
                    key={index}
                    style={{
                        textDecoration: todo.completed ? 'line-through' : 'none', 
                        cursor: 'pointer'
                    }}
                    onClick={() => toggleTodo(index)}
                    >
                        {todo.text}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default TodoList;