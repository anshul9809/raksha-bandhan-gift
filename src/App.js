import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Question from './components/Question';
import ThinkAgain from './components/ThinkAgain';
import LastChance from './components/LastChance';
import ChaseComponent from './components/ChaseComponent';
import GiftDelayComponent from './components/GiftDelayComponent';
import Gift from './components/Gift';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Question />} />
        <Route path="/think-again" element={<ThinkAgain />} />
        <Route path="/last-chance" element={<LastChance />} />
        <Route path="/chase" element={<ChaseComponent />} />
        <Route path="/gift-delay" element={<GiftDelayComponent />} />
        <Route path="/gift" element={<Gift />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <div className="footer">
        Crafted with <a>&#10084;</a> by Anshul
      </div>
    </Router>
  );
};

export default App;
