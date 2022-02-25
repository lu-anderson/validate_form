import React from 'react';
import './Card.css';
class Card extends React.Component {

  render() {
    const { propNome, propEmail, propSkill, propSubmittedForm } = this.props;

    return (
      <section className={ `visitCard--card ${propSubmittedForm ? 'successStatus' : ''}`}>
          <img src='https://cdn-icons-png.flaticon.com/512/1946/1946429.png' alt='profile' className='visitCard--img '/>
          <div className='visitCard--data'>
            <h2>{propNome}</h2>
            <h3>{propEmail}</h3>
            {propSkill && (<h3>Expertise <span className='visitCard--badge'>{propSkill}</span></h3>)}


          </div>
          <span>🔴</span>
      </section>
    );
  }
}

export default Card;
