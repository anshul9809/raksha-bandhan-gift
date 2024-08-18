import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Question = () => {
  const navigate = useNavigate();

  const handleYes = () => {
    navigate('/gift-delay');
  };

  return (
    <div className="container">
      {/* Embedded GIF */}
      <div className='gifs'>
        <img
          src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWFvcXd3emFpa3RoYmo2dmUwc2lnemc3Z2FjdmE4Z3pncWVnbWZuMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/diAhf8bYer76E/200w.webp"
          frameBorder="0"
          className="giphy-embed"
        />
      </div>
      {/* Content */}
      <h1>Han Bhai Gift Chahiye? 🤗</h1>
      <p>Vaise Acha Gift h ye</p>
      
      {/* Buttons */}
      <div className="btn">
        <button onClick={handleYes}>Yes</button>
        <Link to="/think-again">No</Link>
      </div>
    </div>
  );
};

export default Question;
