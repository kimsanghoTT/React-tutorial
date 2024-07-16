import React, {useState} from "react";

/* console에서 에러가 뜨면 백엔드와 연결이 안됐을 가능성이 높음 */
const Signup = () => {

    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [pwCheck, setPwCheck] = useState('');
    const [name, setName] = useState('');
    const [result, setResult] = useState('');

    //아이디 중복검사
    const [idValidation, setIdValidation] = useState(false);
    //false = 사용 불가, true = 사용 가능

    //중복검사 이벤트 핸들러
    const idDup = (eventId) => {
        //eventId = 현재 입력하는 이벤트가 발생한 id
        setId(eventId);

        //4글자 미만이면 중복검사 x
        //입력 받은 아이디의 공백을 제거하고 길이가 4보다 작다면
        //trim() : 양 옆의 공백 제거
        if(eventId.trim().length < 4){
            setIdValidation(false);
            return;
        }

        //DB에 중복되는 아이디가 있는지 비동기로 아이디 중복검사 수행
        //axios나 fetch 사용
        fetch("/idCheck?id=" + eventId) //SpringBoot Controller와 연결할 Mapping url
        .then(response => response.text())
        .then(result => {

            //중복이 아닐 때 true 맞다면 false
            //(Number(result) === 0) -> SpringBoot에서 중복이 아니면 0, 중복이면 1 이상의 값 전달
            //꼭 숫자값이 아니라 글자여도 상관없음
            if(Number(result) === 0){
                setIdValidation(true);
            }
            else{
                setIdValidation(false);
            }
        })
    }

    const signUpBtn = () => {
        //아이디 유효하지 않으면 가입 x
        if(!idValidation){
            alert("유효한 아이디가 아닙니다.");
            return;
        }

        if(pw !== pwCheck){
            alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
            return;
        }
        //비밀번호, 비밀번호 확인이 일치하는지 확인

        //회원가입 비동기 요청
        const inputValues = {}; //초기에 들어온 값이 없으니 빈 공간으로 설정
        inputValues.id = id; //id 값이 들어오면 inputValues에 id 값을 작성
        inputValues.pw = pw; //pw 값이 들어오면 inputValues에 pw 값을 작성
        inputValues.name =name;
        //input에 id값으로 ksh를 작성하고 pw로 ksh1234를 작성시
        //inputValues = {ksh, ksh1234}; 가 됨

        fetch("/signup", {
            method:"POST", //스프링부트 컨트롤러에 @PostMapping("/signup")에 전달

            //headers : 메일로 치면 메일 주소,제목 처럼 초기에 어떤 것을 보내는지 설정
            headers: {"Content-Type" : "application/json"}, //<form> 태그에 해당 내용들이 기본값으로 들어가 있음
            //Content-Type : 데이터 전달 시 이미지인지, 파일인지 등 정보를 전달
            //application/json : 
            //  - application : 코딩하는 폴더 자체. 폴더 1개 = 어플리캐이션 1개
            //  - json : 사용자나 개발자가 작성한 값들을 key-value의 형태로 1개 이상 주고 받을 수 있는 형태
            
            //body : 내용 본문 작성
            body : JSON.stringify(inputValues) //사용자가 작성한 모든 값들을 보내기
        })
        .then(res => res.text())
        .then(result => {
            if(Number(result) > 0){ //결과가 1 이상이면 회원가입 완료처리
                setResult('회원 가입 성공');

                //input 값들 모두 초기화
                setId('');
                setPw('');
                setPwCheck('');
                setName('');

            }
            else{
                setResult('회원 가입 실패');
            }
        })
    }

    return(
        <div className="signup-container">
            {/* label의 htmlFor와 input의 id를 생략하고 싶다면 input을 라벨 안에 작성해주면 됨 */}
            <label>
                ID : 
                <input type="text" onChange={e => idDup(e.target.value)}
                value={id}
                className={idValidation ? '' : 'id-err'}
                />
            </label>
            
            <label>
                PW : 
                <input type="password" onChange={e => setPw(e.target.value)}
                value={pw}
                />
            </label>
            <label>
                PW CHECK : 
                <input type="password" onChange={e => setPwCheck(e.target.value)}
                value={pwCheck}
                />
            </label>
            <label>
                NAME : 
                <input type="text" onChange={e => setName(e.target.value)}
                value={name}
                />
            </label>
            
            <button onClick={signUpBtn}>가입하기</button>
            <hr/>

            {/* 회원가입 결과 출력 */}
            <h3>{result}</h3>
        </div>
    )
}
export default Signup;