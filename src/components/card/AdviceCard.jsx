import axios from 'axios';
import React, { useState, useEffect } from 'react';

import './adviceStyle.css';

import { BsFillDice5Fill } from 'react-icons/bs';

const AdviceCard = () => {
  const [data, setData] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios.get('https://api.adviceslip.com/advice').then((res) => {
      setData(res.data.slip);
    });
  }, [count]);

  const countControl = () => {
    setCount(count + 1);
  };

  return (
    <div className='advice-card-cnt'>
      <p className='advice-header'>ADVICE #{data.id}</p>
      <p className='advice-para'>"{data.advice}" </p>
      <button onClick={countControl} className='advice-btn'>
        <BsFillDice5Fill />
      </button>
    </div>
  );
};

export default AdviceCard;
