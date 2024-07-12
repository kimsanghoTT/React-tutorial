import React, {useState} from 'react';

const Loading = () => {

    const [loading, setLoading] = useState(true);

    if(loading) return <div>로딩중입니다.</div>;

    //또는 

    if(loading) {
        return (
            <div>로딩중입니다.</div> //이미지 삽입해도 됨
        )
    }

    //주의할 점 : 데이터를 모두 가져오면 setLoading을 false값으로 변경해줘야 함
    //false로 변경해주지 않으면 계속 로딩 화면만 뜸

    return(
        <>
        <h1>로딩 표기</h1>
    <pre>
    //로딩중이라면 로딩 div 보여줌
    if(loading) return <div>로딩중입니다.</div>;

    /*
    영화 데이터에서 이미지가 있기 때문에 데이터 전송이 느림
    사용자에게 화면이 보여지기 전에 로딩중이라는 표시를 보여줌으로써
    사용자는 조금 더 기다릴 수 있는 시간을 갖게 됨
    처음엔 로딩을 true설정해서 임시 화면을 띄워놓고 데이터를 모두 가져오면 false로 변경
    기존 리턴에 작성한 html을 보여줌

    if(loading) return <div>로딩중입니다.</div>;

    if(loading) {
        return (
            <div>로딩중입니다.</div>
        )
    }

    둘이 같음
    -> react에서도 innerHTML을 사용할 수 있음
    </pre>
        </>
    )
}
export default Loading;