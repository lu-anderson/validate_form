import React from 'react';
import './Form.css';
class Form extends React.Component {
  render() {
    const {
      propNome,
      propEmail,
      propBtnDisable,
      propHandleChange,
      propSkill,
      propHandleSubmit,
    } = this.props;

    return (
      <form className="visitCard--form" onSubmit={propHandleSubmit}>
        <label htmlFor="nome">
          Nome
          <input
            id="nome"
            type="text"
            onChange={propHandleChange}
            name="nome"
            value={propNome}
          />
        </label>
        <label htmlFor="email">
          E-mail
          <input
            id="email"
            type="email"
            onChange={propHandleChange}
            name="email"
            value={propEmail}
          />
        </label>
        <label htmlFor="skill">
          Expertise
          <input
            id="skill"
            type="text"
            onChange={propHandleChange}
            name="skill"
            value={propSkill}
          />
        </label>
        <button type="submit" disabled={propBtnDisable}>

          Finalizar
        </button>

      </form>
    );
  }
}

export default Form;
