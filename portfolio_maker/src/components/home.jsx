import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
const Home = () => {
  return (
    <div>
    <div className="cards-list">
      <div className="card 1">
        <div className="card_image">
          <img src="https://avatars.githubusercontent.com/u/97976395?v=4" alt="Card 1" />
        </div>
        <div className="card_title title-white">
          <p>Omkar</p>
        </div>
      </div>

      <div className="card 3">
        <Link to="/arbaz"> {/* Wrap the card content with Link */}
          <div className="card_image">
            <img src="https://avatars.githubusercontent.com/u/74857530?v=4" alt="Card 3" />
          </div>
          <div className="card_title">
            <p>Arbazkhan Pathan</p>
          </div>
        </Link>
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
    </div>
  );
};

export default Home;
