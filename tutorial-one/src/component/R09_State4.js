import React, {useState} from "react";

const 예제4번 = (data) =>{

    const [age, setAge] = useState(Number(data.init));

    return(
        <div className="count-container">

            <button onClick={()=>{setAge(age - Number(data.years))}}>
                -{data.years}년
            </button>
            <button onClick={()=>{setAge(age + Number(data.years))}}>
                +{data.years}년
            </button>
            <h3>현재 나이 : {age}</h3>
            
        </div>
    )
}
export default 예제4번;