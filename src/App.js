import React from 'react';
import './App.css';
import Card from './components/Card';

import Form from './components/Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      email: '',
      skill: '',
      btnDisable: true,
      submittedForm: false
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => this.validate());
  };

  validate = () => {
    const MIN_LENGTH_VALUE = 5;
    const { nome, email, skill } = this.state;
    const minLength = nome.length >= MIN_LENGTH_VALUE;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailValidator = regexEmail.test(email);

    // valid if is empty
    const fields = [nome, email, skill]
    const emptyFields = fields.every((field) => field !== '');

    const isValid = minLength && emptyFields && mailValidator;
    if (isValid) {
      this.setState({ btnDisable: false });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      submittedForm: true
    });
  }

  render(){
    const { nome, email, btnDisable, skill, submittedForm } = this.state;
    return (
      <main className="App">
          <h1>Cartão de visita</h1>
          <Form 
            propNome={nome} 
            propEmail={email}
            propBtnDisable={btnDisable}
            propSkill={skill}
            propHandleChange={this.handleChange}
            propHandleSubmit={this.handleSubmit}
          />
          <Card 
            propNome={nome} 
            propEmail={email}
            propBtnDisable={btnDisable}
            propSkill={skill}
            propHandleChange={this.handleChange}
            propSubmittedForm={submittedForm}
          />
      </main>
    );
  }
}

export default App;
