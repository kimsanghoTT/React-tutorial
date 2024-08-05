import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//BrowserRouter를 Router로 줄여서 쓰기 위해 as 사용

import MemberList from './MemberList';
import UserList from './UserList';
import TodoList from './TodoList';


function App () {

    return(
    <div>
        <Router>
            <Routes>
                <Route path="/" element={<UserList/>}/>
                <Route path="/todo" element={<TodoList/>}/>
                <Route path="/memberList" element={<MemberList/>}/>
            </Routes>
        </Router>
    </div>
    )
}
export default App;

/*
function App () {}
    - index 다음에 특정 js가 최상위에서 시작할 때 function
    - 제일 먼저 기능이 되지는 않음
        -> function 이전에 다른 코드가 와도 그 코드 실행 이후에 function이 실행이 됨
        -> 즉 App 함수 정의보다 특정 함수(App) 호출이 먼저 있어도 문제 없음
        
        ex)
        console.log(App()); // 'Hello'가 출력됩니다.
        function App() {
            return 'Hello';
        }

const App = () => {}
    - 이외에는 모두 const 사용
    - 자신이 작성한 js 내에서는 가장 최상위임
        -> const 이전에 작성한 코드는 작동을 안함.
        -> const로 가장 중점이 되는 코드를 선언해준 다음에 다른 기능을 작성해야함
        -> 즉 App 함수 정의보다 특정 함수 호출(App)이 먼저 있으면 그 특정 함수가 기능을 안함
        
        ex)
        console.log(App()); // TypeError: App is not a function
        const App = () => {
            return 'Hello';
        };
*/