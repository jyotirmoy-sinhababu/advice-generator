import axios from 'axios';
import React, { useState, useEffect } from 'react';

import './adviceStyle.css';

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
    </div>
  );
};

export default AdviceCard;
