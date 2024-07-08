import React, { useState } from "react";
import { Link } from "react-router-dom";

const GameTwoStep = () => {
    const [guess, setGuess] = useState('');
    const [message, setMessage] = useState('');
    const [number, setNumber] = useState(Math.floor(Math.random() * 30) + 1);
    const [trying, setTrying] = useState(0);
    const [correct, setCorrect] = useState(false);

    const handleChange = (e) => {
        setGuess(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const userGuess = parseInt(guess, 10);
        setTrying(trying + 1);
        if(userGuess === number){
            setMessage('정답');
            setCorrect(true);
        }
        else if(userGuess > number){
            setMessage('숫자가 큼');
        }
        else if(userGuess < number){
            setMessage('숫자가 작음');
        }
        setGuess('');
    }

    const handleRestart = () => {
        const newNumber = Math.floor(Math.random()* 30) + 1;
        setNumber(newNumber);
        setMessage('');
        setGuess('');
        setTrying(0);
        setCorrect(false);
    }

    return(
        <div>
            <h1>숫자 스무고개2</h1>
            <form onSubmit={handleSubmit}>
                <input type="number" value={guess} onChange={handleChange}/>
                <button>추측하기</button> 
            </form>
            <p>{message}</p>
            {correct ? (<Link to="/game"><button>처음으로 이동</button></Link>) : 
            (<button onClick={handleRestart}>재시작</button>)}  
        </div>
    )
}
export default GameTwoStep;