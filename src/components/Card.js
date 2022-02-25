import React from 'react';
import './Card.css';
class Card extends React.Component {

  render() {
    return (
      <section className={ `visitCard--card`}>
          <img src='https://cdn-icons-png.flaticon.com/512/1946/1946429.png' alt='profile' className='visitCard--img '/>
          <div className='visitCard--data'>
            <h2>Nome</h2>
            <h3>Email</h3>
            <h3>Expertise</h3>
          </div>
          <span>🔴</span>
      </section>
    );
  }
}

export default Card;
