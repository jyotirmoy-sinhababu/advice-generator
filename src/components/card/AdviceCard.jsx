import axios from 'axios';
import React, { useState, useEffect } from 'react';

const AdviceCard = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    axios.get('https://api.adviceslip.com/advice').then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);

  return <div></div>;
};

export default AdviceCard;
