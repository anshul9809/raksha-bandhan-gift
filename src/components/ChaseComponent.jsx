import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ChaseComponent = () => {
  const navigate = useNavigate();

  const handleYes = () => {
    navigate('/gift-delay');
  };

  useEffect(() => {
    const moveRandomEl = (elm) => {
      elm.style.position = 'absolute';
      elm.style.top = Math.floor(Math.random() * 90 + 5) + '%';
      elm.style.left = Math.floor(Math.random() * 90 + 5) + '%';
    };

    const moveRandom = document.querySelector('#move-random');

    moveRandom.addEventListener('mouseenter', function (e) {
      moveRandomEl(e.target);
    });
  }, []);

  return (
    <div className="container">
      <div className="gifs">

      <img
          src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXUxYjh5YmtocjBkdjZ2MzM2Z3I3MGM0dzBsMTUweXphc3B3MW5qYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/w5FSoU86sXRFm/giphy.webp" 
          frameBorder="0"
          className="giphy-embed"
        />
      </div>
      <h1>Manja na! Kitna bhav khaegi 😭</h1>
      <p>Ab mana krke dikha tu</p>
      <div className="btn">
        <button onClick={handleYes}>Yes</button>
        <a href="#" id="move-random">No</a>
      </div>
    </div>
  );
};

export default ChaseComponent;
