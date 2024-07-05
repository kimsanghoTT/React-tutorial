import React, {useState} from "react";

function 예제2번(){

    function 값변경(){
        if(abc === 'Z') efg('X')
            else efg('Z')
    }
    const[abc, efg] = useState('Z')
    return(
        <>
            <h1>{abc}</h1>
            <button onClick={값변경}>값변경하기</button>
        </>
    )
}
export default 예제2번;