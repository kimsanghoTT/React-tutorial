const Parent = (props) =>{

    const {num, name, age, gender, phone} = props;

    return(
        <div className="person_info">
            <h3>예제3번</h3>
            번호 : {num} 번/
            이름 : {name} /
            나이 : {age} /
            성별 : {gender} /
            번호 : {phone}
        </div>
    )
}
export default Parent;