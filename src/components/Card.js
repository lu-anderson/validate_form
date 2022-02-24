import React from 'react';

class Card extends React.Component { 

  render() {
    const { propNome, propEmail, propSkill, propSubmittedForm } = this.props;

    return (
      <section className={ `card ${propSubmittedForm ? 'successStatus' : ''}`}>
        <div>
          <img src='https://cdn-icons-png.flaticon.com/512/1946/1946429.png' alt='profile'/>
          <h2>{propNome}</h2>        
          <h3>{propEmail}</h3>
        </div>
        <h1>Expertise: {propSkill}</h1>
      </section>
    );
  }
}

export default Card;
