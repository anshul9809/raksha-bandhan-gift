import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ThinkAgain = () => {
  const navigate = useNavigate();

  const handleYes = () => {
    navigate('/gift-delay');
  };

  return (
    <div className="container">
      <div className='gifs'>
        <img
          src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaW8xYnVsdnNlZTRzZHppMmg4dHdwNmdoNXlzem1rbjkzaXU4NjhzeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Ie4CIIvQS0bk3zwZlM/giphy.webp"
          frameBorder="0"
          className="giphy-embed"
        />
      </div>
      <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
      <h1>Dobara Soch le ache se! 🙄</h1>
      <p>Mana Bhi Kar Dunga mein.</p>
      <div className="btn">
        <button onClick={handleYes}>Yes</button>
        <Link to="/last-chance">No</Link>
      </div>
    </div>
  );
};

export default ThinkAgain;
