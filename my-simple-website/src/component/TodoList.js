import { useState } from "react";
import '../CSS/TodoList.css';

function TodoList() {
  const [todos, setTodos] = useState([]); //빈 배열로 설정
  const [input, setInput] = useState('');

  //addTodo 기능이 붙은 버튼을 누를 때
  const addTodo = () => {
      setTodos([...todos, { text: input, completed: false }]);
      //todos : 기본으로 아무런 리스트가 없는 빈 배열
      //setTodos로 기본으로 아무런 리스트가 없는 목록에 새로운 목록 하나씩 추가하는 것을 진행
      //...todos : 기존에 있던 리스트 복사
      // -> value 값이 input으로 들어온 value 값을 text라는 키에 저장
      // completed : 일을 끝낸 상태를 나타내는 변수명
      // -> 새로 추가된 일은 완료한 상태가 아니므로 false
      setInput('');
  };

  //할 일을 완료하면 완료 처리를 해주는 버튼
  //한 번 더 클릭해서 미완료 처리로 변경할 수 있음
  const toggleTodo = (index) => {
    const newTodos =[...todos]; //행동을 진행하기 전에 [...todos] 복사본을 만들어서 진행
    newTodos[index].completed = !newTodos[index].completed;
    // 새로운 목록[]에 자동으로 목록마다 주어지는 숫자(index)에 있는 (completed) 값을 가져와서
    // 사용자가 선택한 index 위치의 completed(완료/미완료) 값을 
    // 완료면 미완료, 미완료면 완료로 변경

    // newTodos[index].completed = !newTodos[index].completed;
    // 새로운목록[목록번호].완료/미완료 = 완료->미완료, 미완료->완료로 상태 변경
    // !를 이용해서 boolean(t/f)값을 (f/t) 값으로 변경

    setTodos(newTodos);//상태가 변경된 목록을 다시 저장
  };

  return (
    <div className="TodoList">
      <h1>Todo List</h1>
      <div>
        <input
          className="todoInput" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="새로운 할 일을 추가하세요."
        />
        <button className="todoButton" onClick={addTodo}>할 일 추가하기</button>
      </div>
      {/*할 일이 추가되면 추가된 목록을 map을 통해 보여주기*/}
      {/* 
      각 목록은 
      <li key={목록리스트번호순}>{목록번호와 value=input에 작성한 text}</li> 형식으로 보여줌
      li 태그를 클릭할 때마다 완료/미완료를 눈으로 볼 수 있게 style을 이용해 표기
      */}
      <ul>
        {todos.map((todo,index) => (
          <li
            className="todoList" 
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

//나중에 useEffect를 써서 새로고침을 해도 목록이 남아있도록 업데이트할 예정