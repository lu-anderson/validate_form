import React from 'react';

class Form extends React.Component { 

  render() {
    const { propNome, propEmail, propBtnDisable, propHandleChange, propSkill, propHandleSubmit } = this.props;

    return (
        <form className='form' onSubmit={propHandleSubmit}>
          <label htmlFor='nome'>
            Nome:
            <input
              type="text"
              onChange={ propHandleChange }
              name="nome"
              value={ propNome }
            />
          </label>
          <label htmlFor='email'>
            Email:
            <input
              type="email"
              onChange={ propHandleChange }
              name="email"
              value={ propEmail }
            />
          </label>
          <label htmlFor='skill'>
            Expertise: 
            <input
              type="text"
              onChange={ propHandleChange }
              name="skill"
              value={ propSkill }
            />
          </label>
          <button type="submit" disabled={ propBtnDisable }>
            Finalizar
          </button>
        </form>
    );
  }
}

export default Form;
