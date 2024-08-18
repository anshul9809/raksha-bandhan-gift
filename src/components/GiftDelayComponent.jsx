import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GiftDelayComponent = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/gift');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="container">
      <h1>Okay, I will show you your gift... 🎁</h1>
    </div>
  );
};

export default GiftDelayComponent;
