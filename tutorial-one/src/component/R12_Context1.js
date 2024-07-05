import React, {createContext, useContext} from "react";

/*
Context
    Context를 사용하면 단계마다 하나씩 props를 넘겨주지 않아도 
    컴포넌트(객체)에 데이터를 제공할 수 있음

    createContext
        - 기본 값을 가질 수 있으며, 기본 값은 해당 컨텍스트를 사용하는 컴포넌트가 
        상위 컴포넌트에서 제공하는 값을 찾을 수 없을 때 사용

    useContext
        - 컨텍스트의 현재 값을 가져오는 데 사용
        - 컨텍스트에서 어떠한 값을 받아 현재 값으로 보여줌

    Provider
        - 컨텍스트를 사용하는 컴포넌트들에게 동일한 값을 모두 제공하는 컴포넌트
        - value라는 prop을 받아서 하위 컴포넌트들이 접근할 수 있도록 함
*/

//Context를 저장하는 변수명은 무조건 대문자로 시작
const TestContext = createContext();
//<TestContext.Provider value='부모가전달한값'>
//TestContext로 value 안에 작성한 값을 createContext 안에 저장
//createContext 안에 저장된 '부모가전달한값'이 Provider로 
//밑에 있는 const, function, class 등 모든 컴포넌트에 전달

//자식의 자식 컴포넌트
const 후손 = () =>{
    const 부모value값 = useContext(TestContext);
    return(
        <>
            <h3>후손 자리</h3>
            <p>{부모value값}</p>
        </>
    )
}

//자식 컴포넌트(객체)
const 자식 = () =>{
    const 부모value값 = useContext(TestContext);
    return(
        <>
            <h2>자식의 공간</h2>
            <p>{부모value값}</p>

            <p>--------------------------------------------------</p>
            <후손/>
        </>
    )
}

//부모 컴포넌트(객체)
const 부모 = () => {
    return(
        //Context 객체를 이용해 하위 컴포넌트에 value 값 전달
        //TestContext.Provider value='값' -> 값을 저장하고 Provider로 뿌림(제공)
        <TestContext.Provider value='부모가전달한값'>
        
            <자식/>
        </TestContext.Provider>
    )
}
export default 부모;