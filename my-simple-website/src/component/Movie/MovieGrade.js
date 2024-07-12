import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MovieGrade.css';

const MovieGrade = () => {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year')

        .then(res => {
            //위의 url은 []가 아니라 {}로 시작하므로 {} 데이터를 감싸줄 임의의 변수명을 사용.
            //res는 []의 역할을 하며, 그 안의 "data"의 데이터를 가져옴
            //주소값에 key 이름으로 작성돈 data에서 movie라는 키 값 안에 적힌 title과 이미지를 가져올 것
            // [{data{movie}}]를 가져올 것
            setMovies(res.data.data.movies) // {}들에서 data를 가져 옴

            //영화 데이터 모두 가져오면 로딩중을 false로 변경
            setLoading(false);
        })
        .catch(e => {
            alert("에러 발생 : " + e);
        })
    }, []);

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
            <div>로딩중입니다.</div>;
        )
    }

    둘이 같음
    -> react에서도 innerHTML을 사용할 수 있음
    */
    return(
        <div className='movie-container'>
            <h1>평점 높은 영화 목록</h1>
            <div className='movie-content'>
                {movies.map(movie => (
                    <div key={movie.id} className='movie'>
                        <img src={movie.medium_cover_image}/>
                        <h2>{movie.title}</h2>
                        <p>평점 : {movie.rating}</p>
                        <p>개봉년도 : {movie.year}년</p>
                        <p>러닝타임 : {movie.runtime}분</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default MovieGrade;