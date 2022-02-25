import React from 'react';
import './App.css';
import Card from './components/Card';
import Form from './components/Form';
import logo from './logo-trybe.png';

class App extends React.Component {
  render(){
    return (
      <main>
          <img src={logo} alt="Trybe Logo" width="150"/>
          <h1>Cartão de visita</h1>
          <Form />
          <Card />
      </main>
    );
  }
}

export default App;
