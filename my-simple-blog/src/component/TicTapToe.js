import React, {useEffect, useState } from 'react';
import './TipTacToe.css';

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const TicTapToe= () => {
  const [numbers, setNumbers] = useState(shuffleArray([...Array(9).keys()].map(n => n + 1)));
  const [nextNumber, setNextNumber] = useState(1)
  const [message, setMessage] = useState('');

  const handleNumberClick = (clickedNumber) => {
    if (clickedNumber === nextNumber) {
      if (nextNumber === 9) { 
        setMessage('정답입니다.');
      } else {
        setNextNumber(nextNumber + 1);
      }
    } else {
     setMessage('순서가 잘못됐어요');
    }
  };

  const handleRestart = () => {
    setNumbers(shuffleArray([...Array(9).keys()].map(n => n + 1)));
    setNextNumber(1);
    setMessage('');
  };

  return (
    <div className="tic-tap-container">
      <h1>TicTap</h1>
      <div className="grid">
        {numbers.map((number) => (
          <button key={number} onClick={() => handleNumberClick(number)} className="number-button">
            {number}
          </button>
        ))}
      </div>
      <p className="message">{message}</p>
      <button onClick={handleRestart} className="restart-button">게임 재시작</button>
    </div>
  );
};

export default TicTapToe;
