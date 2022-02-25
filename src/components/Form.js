import React from 'react';
import './Form.css';
class Form extends React.Component {
  render() {
    return (
      <form className="visitCard--form">
        <label htmlFor="nome">
          Nome
          <input
            id="nome"
            type="text"
            name="nome"
          />
        </label>
        <label htmlFor="email">
          E-mail
          <input
            id="email"
            type="email"
            name="email"
          />
        </label>
        <label htmlFor="skill">
          Expertise
          <input
            id="skill"
            type="text"
            name="skill"
          />
        </label>
        <button type="submit">
          Finalizar
        </button>
      </form>
    );
  }
}

export default Form;
