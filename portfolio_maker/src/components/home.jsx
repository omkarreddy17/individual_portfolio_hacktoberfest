import React from 'react';
import './style.css';
const Home = () => {
  return (
    <div className="cards-list">
      <div className="card 1">
        <div className="card_image">
          <img src="https://i.redd.it/b3esnz5ra34y.jpg" alt="Card 1" />
        </div>
        <div className="card_title title-white">
          <p>Omkar</p>
        </div>
      </div>

      <div className="card 3">
        <div className="card_image">
          <img src="https://media.giphy.com/media/10SvWCbt1ytWCc/giphy.gif" alt="Card 3" />
        </div>
        <div className="card_title">
          <p>Arbazkhan Pathan</p>
        </div>
      </div>

      {/* <div className="card 4">
        <div className="card_image">
          <img src="https://media.giphy.com/media/LwIyvaNcnzsD6/giphy.gif" alt="Card 4" />
        </div>
        <div className="card_title title-black">
          <p>Card Title</p>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
