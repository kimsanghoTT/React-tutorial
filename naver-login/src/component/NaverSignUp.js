import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import AuthContext from "./Layout/AuthContext";
/*
useLocation : URL의 정보를 포함한 객체
              경로, 해시, 문자열값 등 가지고 온 객체

*/
function NaverSignUp() {
  const [userInfo, setUserInfo] = useState(null);
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [userPw, setUserPw] = useState(null);
  const {loginMember} = useContext(AuthContext);

  //어떠한 클릭이 없어도 UserInfo 페이지 들어오면 자동으로 실행되는 효과
  useEffect(() => {
    // URLSearchParams : URL ? 뒤에 붙은 키-벨류 값을 가져옴
    //String redirectUrl = "http://localhost:3000/userinfo?access_token=" + accessToken;
    // userinfo? 뒤에 붙는  access_token에 있는 데이터를 포함
    const a = new URLSearchParams(location.search);
    const accessToken = a.get("access_token");
    console.log("토큰 확인 : " + accessToken);
    // URLSearchParams 가져온 수많은 값 중에서 키이름이 access_token 인 값만 가져오겠다.

    // get 을 이용해서 userinfo 정보 가져오기
    //String redirectUrl = "http://localhost:3000/userinfo?access_token=" + accessToken;
    // 자바에서는 userinfo?access_token=" 뒤에 + 를 붙여 변수를 사용했지만
    // 자바스크립트에서는 ``를 사용해서   const accessToken = a.get('access_token');
    // 가져옴
    

    //만약에 accessToken 값이 존재하면 axios 발동
    if(accessToken) {

        axios.get(`/userinfo?access_token=${accessToken}`)
        //.then((res) => {    .then((res) => {    (res) 를 막아버리면  => 이후로는 res는 선언되지 않은
        // 지역변수명이 되기 때문에 res를 찾을 수 없는 것
        .then(response => {
          setUserInfo(response.data);
          setLoading(false);
        })
        .catch((err) => {
          alert("정보를 가져오지 못했습니다.");
        });
    }
  }, [location.search]); // location.search 로 검색된 키-값중  access_token = abc123
  // access_token 값을 가져오면 useEffect를 사용하겠다.

  if(loading) {
    return <div>데이터 정보 가져오는 중...</div>
  }

  const submitToSignUp = () => {
    if(!userPw){
      alert("비밀번호 입력");
      return;
    }
    
    axios.post("http://localhost:9011/naverAPI/register", { // controller의 매핑주소 작성
      id : userInfo.response.id,
      email : userInfo.response.email,
      nickname : userInfo.response.nickname,
      name : userInfo.response.name,
      gender : userInfo.response.gender,
      profileImage: userInfo.response.profile_image,
      password : userPw
    })
    .then(res => {
      console.log(res.data);
      alert("회원가입 완료");
    })
    .catch(err => {
      console.log("에러 확인 ", err);
      alert("회원가입 실패");
    })
    setUserPw('');
  }

  /*
  const ChangingPw = (e) => {
    setUserPw(e.target.value);
  }
  */

  return (
    <>
      <h1>유저정보</h1>
      {userInfo ? (
        <div>
          <input type="text" value={userInfo.response.id} disabled />
          <input type="email" value={userInfo.response.email} disabled/>
          <input type="text" value={userInfo.response.nickname} disabled/>
          <input type="text" value={userInfo.response.name} disabled/>
          <input type="text" value={userInfo.response.gender} disabled/>
          <img src={userInfo.response.profile_image} alt="프로필이미지"/>
          {/* 네이버에서 가져온 id 값을 input에 넣어주고 수정하지 못하게 막음처리 */}
        </div>
      ) : (
        <p>유저를 찾을 수 없습니다.</p>
      )}

      <div>
        <h2>회원가입에 필요한 아이디 및 비밀번호 작성하기</h2>
        <input type="password" value={userPw} onChange={(e) => setUserPw(e.target.value)}  />

        <button onClick={submitToSignUp}>회원가입하기</button>
      </div>
    </>
  );
}

export default NaverSignUp;