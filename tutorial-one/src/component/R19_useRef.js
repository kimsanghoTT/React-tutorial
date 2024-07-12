import React, {useRef, useEffect} from 'react';

const Ref = () => {

    const countRef = useRef(0);
    useEffect(() => {
        countRef.current++; //새로고침이 될 때마다 countRef값 증가
        console.log('react 새로고침 됨');
    }, []);
    return(
        <>
            <h1>useRef</h1>
 
            <p>React가 새로고침할 때마다 숫자값을 증가</p>
            <p>{countRef.current}</p>
        </>
    )
}
export default Ref;