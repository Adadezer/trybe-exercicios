import React from 'react';
import './App.css';
import PersonalData from './dadosPessoais';

const personalData = {
  nome: '',
  email: '',
  cpf: '',
  endereco: '',
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = personalData
  }

  handleChange = ({target}) => {
    const {id} = target
    let {value} = target

    if (id === 'nome') {
      value = value.toUpperCase();
    }

    if (id === 'endereco') {
      value = value.normalize('NFD').replace(/[^0-9a-zA-Z\s]/g, ''); 
      //https://metring.com.br/javascript-substituir-caracteres-especiais
    }

    this.setState({
      [id]: value
    })
}
  render() {
    return (
      <div>
        <PersonalData valorPreDef = {this.state} handleChange = {this.handleChange}/>
      </div>
    );
  }
}

export default App;
