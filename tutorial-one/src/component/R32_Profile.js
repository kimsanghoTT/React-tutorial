import React, {useState} from 'react';
import './R32_Profile.css';

const Profile = () => {
    const [selectedImg, setSelectedImg] = useState(null);

    const changeImg = (event) => {
        //파일은 복수라는 가정 하에 선택하기 떄문에
        //이미지 하나를 가져오려면 인덱스가 0인 사진을 가져오면 됨
        const file = event.target.files[0]; // 이미지 다중 선택 가능할 때 순서대로 가져오기

        if(file){
            const reader = new FileReader(); //파일 읽기 모드 준비 FileReader 객체 생성
            reader.onloadend = () => { // 파일읽기가 완료됐을 때 실행할 함수

                //set선택한이미지 = 읽어온 파일 데이터를 선택한 이미지에 연결
                //reader.result = 파일의 내용(컴퓨터 언어로 된 이미지코드를 주소값으로 변환(URL))
                setSelectedImg(reader.result);
            }
            //readAsDataURL = 데이터 URL을 글자 취급해서 읽기 시작
            //주소는 String 문자열로 표현됨
            reader.readAsDataURL(file);
        }
    }

    return (
        <div className='profile-container'>
        <h1>프로필 사진 바꾸기</h1>
        <label htmlFor="imgSelect" className="imgSelectBtn">사진 선택하기</label>
        <input id="imgSelect" type="file" accept='image/*' onChange={changeImg}/>
        {/* accept='image/*' : 이미지 확장자만 허용 */}

        {/* 선택한 이미지가 존재한다면 미리보기 제공 */}
        {selectedImg && (
            <div>
                <h2>미리보기</h2>
                <img src={selectedImg}/>
            </div>
        )}
        </div>
    )
}
export default Profile;