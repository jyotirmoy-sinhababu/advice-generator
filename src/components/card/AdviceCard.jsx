import axios from 'axios';
import React, { useState, useEffect } from 'react';

import './adviceStyle.css';

import { BsFillDice5Fill } from 'react-icons/bs';

const AdviceCard = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    axios.get('https://api.adviceslip.com/advice').then((res) => {
      console.log(res.data.slip);
      setData(res.data.slip);
    });
  }, []);

  return (
    <div className='advice-card-cnt'>
      <p className='advice-header'>ADVICE #{data.id}</p>
      <p className='advice-para'>"{data.advice}" </p>
      <button className='advice-btn'>
        <BsFillDice5Fill />
      </button>
    </div>
  );
};

export default AdviceCard;
