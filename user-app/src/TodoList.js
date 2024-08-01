import { useState } from 'react';
import './App.css';

function TodoList() {
  const [todos, setTodos] = useState([]); 
  const [task, setTask] = useState('');

  const 추가버튼 = () => {
    setTodos([...todos, task]);
    setTask('');
  }

  const enterKey = (e) => {
    if(e.key === 'Enter'){
        e.preventDefault();
        추가버튼();
    }
  }

  const 삭제버튼 = (index) => {           
    setTodos(todos.filter((todo, i) => i !== index));
  }

  return (
    <div className="App">
      <h1>할일 리스트</h1>
      <h3>할일 추가하기</h3>
      <input type='text' 
              value={task}   
              onChange={(e) => setTask(e.target.value)} 
              onKeyDown={enterKey}  
      />
      <button onClick={추가버튼}>추가하기</button>
      <h3>할일 리스트 목록보기</h3>
      {todos.map( (todo, index) =>  (
       
        <li key={index}>
            {todo}
          <button  onClick={() => 삭제버튼(index)} >삭제하기</button>
        </li>
      ) )}
    </div>
  );
}

export default TodoList;