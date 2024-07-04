import React, {useState} from "react";

const 댓글내용 = (props) => {
    const {handler} = props;

    return(
        <div className="wrapper">
            <label htmlFor="content">댓글 작성</label>
            <input type="text" id="inputComment" onChange={handler}/>
        </div>
    )
}

const 작성자 = ({handler}) => {
    return(
        <div className="wrapper">
            <label htmlFor="writer">작성자</label>
            <input type="text" id="inputWriter" onChange={handler}/>
        </div>
    )
}

const 댓글창 = () => {
    const [comment, setComment] = useState('');
    const [writer, setWriter] = useState('');

    const Comment넣기 = (e) =>{
        setComment(e.target.value)
    }

    const Writer넣기 = (e) =>{
        setWriter(e.target.value)
    }

    return(
        <>
            <작성자 handler={Writer넣기}/>
            <댓글내용 handler={Comment넣기}/>
            <button disabled={comment.length === 0 || writer.length === 0}>
                등록
            </button>
        </>
    )
}
export default 댓글창;