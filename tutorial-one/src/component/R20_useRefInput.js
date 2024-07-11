import React, {useRef, useEffect} from 'react';

const RefInputFocus = () => {
    const inputRef = useRef(null);

    //useEffect에서 ,[] 값이 비어있으면 js파일을 시작하자마자 안에 작성한 기능을 작동시킴
    // -> R20 파일을 시작하자마자 바로 input창을 활성화 시키는 설정
    useEffect(() => {
        if(inputRef.current){
            inputRef.current.focus();
        }
    }, []);

    const btnClick = () => {
        if(inputRef.current){
            //current : inputRef가 설정된 태그값 확인 // current는 기본값이 null

            inputRef.current.focus();
            //inputRef라는 ref값을 가진
            //current = input 태그를 바라봄
            //focus(): input이 null이라면 input창을 확인
        }
    };
    return (
        <div>
            <input ref={inputRef} type="text"/>
            <button onClick={btnClick}>input 안에 값이 비었으면 input으로 커서 위치 이동</button>
        </div>
    )
}
export default RefInputFocus;