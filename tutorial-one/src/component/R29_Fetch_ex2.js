import React, { useEffect, useState } from "react";

const PhotoList = () => {

    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')

        .then(res => {
            return res.json();
        })

        .then(data => {
            //setPhotos(data); api 주소에 작성된 모든 데이터 가져오기

            //데이터의 일부분만 가져오기 -> slice 이용
            //slice(시작위치, 끝위치);
            setPhotos(data.slice(0, 2));
        })

        .catch(e => {
            alert("에러 발생" + e);
        })
    }, []);
    return(

        <>
        <h1>사진 리스트</h1>
        <ul>
            {photos.map(photo => (
                <li key={photo.albumId}>
                    <strong>title : </strong>{photo.title}<br/>
                    <img src={photo.thumbnailUrl}/>
                </li>
            ))}
        </ul>
        </>
    )
}
export default PhotoList;
//이걸 맨 첫 줄에 쓰면 에러 발생