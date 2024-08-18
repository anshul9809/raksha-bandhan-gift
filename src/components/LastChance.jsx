import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LastChance = () => {
  const navigate = useNavigate();

  const handleYes = () => {
    navigate('/gift-delay');
  };

  return (
    <div className="container">
      <div className='gifs'>
        <img
          src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3M5bGFjeDdzdGw5YjRqbzV4aXQwOGVnMWVna3Y1a3JsbjloODgwZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/EKDSLoPz0yLVC/giphy.webp"
          frameBorder="0"
          className="giphy-embed"
        />
      </div>
      <h1>M rehpat laga dunga bhadiya 😣</h1>
      <p>Kaise kaise log h btao</p>
      <div className="btn">
        <button onClick={handleYes}>Yes</button>
        <Link to="/chase">No</Link>
      </div>
    </div>
  );
};

export default LastChance;
