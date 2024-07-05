import React, {createContext ,useContext, useState} from "react";

const TestContext = createContext();

//후손 컴포넌트
const Sibling = () =>{
    // TestContext에서 제공된 값을 여기서 사용
    //  const [number, setNumber] = useContext(TestContext);
        const {number, setNumber} = useContext(TestContext);
    
        return(
            <>
                <h3>후손 컴포넌트에서 값 변경</h3>
                <input type="number" value={number} onChange={e => {setNumber(e.target.value)}}/>
            </>
        )
    }

//자식 컴포넌트
const Child = () =>{
// TestContext에서 제공된 값을 여기서 사용
//  const [number, setNumber] = useContext(TestContext);
    const {number, setNumber} = useContext(TestContext);

    return(
        <>
            <h3>자식 컴포넌트에서 값 변경</h3>
            <input type="number" value={number} onChange={e => {setNumber(e.target.value)}}/>
            <Sibling/>
        </>
    )
}

//부모 컴포넌트
const Parent = () =>{

    //숫자 상태 변수 선언
    const [number, setNumber] = useState(0); //number 변수에 초기값 0 설정

    /* 
    Context는 1개의 값만 제공할 수 있음
    -> 2개 이상의 값을 제공하려면 {}, []로 묶어서 제공

    <TestContext.Provider value={{number, setNumber}}>
    number와 setNumber를 {number, setNumber}로 작성 시 다음과 같이 변환, 전달함
        {"number" : number, "setNumber" : setNumber}
        {"number" : 0, "setNumber" : 변환될 값}
    */
    return(
        <TestContext.Provider value={{number, setNumber}}>
            <h1>
                부모 값 :
                {/*부모 컴포넌트의 현재값 출력*/}
                <span className="red">{number}</span>
            </h1>
            <Child/>
        </TestContext.Provider>
    )
}
export default Parent;