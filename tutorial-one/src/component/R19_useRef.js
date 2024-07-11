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
            <pre>
                React : 주기적으로 자동 새로고침 -> 실시간 반영
                js파일이나 컴포넌트가 새로고침 될 때마다 특정 기능이나 값이 초기화되지 않고
                값이 유지될 수 있도록 할 때 사용
                로그인 한 값이 새로고침을 해도 로그아웃이 안되게 하거나
                로그인 유효시간이 다 되기 전까지 로그인을 유지할 때 사용

                - 입력필드의 포커스 설정 (입력창을 클릭하지 않아도 커서 입력필드 활성화(바로 값 입력 가능하도록))
                - 스크롤 위치 관리
            </pre>
            <p>React가 새로고침할 때마다 숫자값을 증가</p>
            <p>{countRef.current}</p>
        </>
    )
}
export default Ref;