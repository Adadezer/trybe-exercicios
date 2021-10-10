import React, { Component } from 'react'

class Formulario extends Component {
  constructor() {
    super();

    this.state = {
      tecnologia: 'react',
      idade: 0,
      conhecimento: false,
      textarea: '',
    }
  }

  handleChange = ({target}) => {
    const {id, value} = target;
    this.setState({
      [id]: value // eu q escolhi fazer com id, nos exemplos foi feito com nome, o importante é o valor passado na chave setState ser igual a chave state
    })
  }
  /*
  handleTecnologia = (event) => {
    this.setState({
      tecnologia: event.target.value
    })
  }

  handleIdade = (event) => {
    this.setState({
      idade: event.target.value
    })
  }

  handleTextArea = ({ target }) =>{
    console.log(target.value)
    this.setState({
      textarea: target.value
    })
  }
  */
  render() {
    return (
      <div>
        <h3>Inscreva-se na palestra</h3>
        <form className = 'formPalestra'>

          <label htmlFor = 'tecnologia'>Tecnologia:
          <select value = {this.state.tecnologia} onChange = {this.handleChange} id = 'tecnologia'>
            <option value = 'react'> React </option>
            <option value = 'javaScript'> Java Script </option>
            <option value = 'htmlCss'> HTML / CSS </option>
          </select>
          </label>

          <br /><br />

          <label htmlFor = 'idade'>Idade:</label>
          <input type = 'number' id = 'idade'
            value = {this.state.idade} onChange = {this.handleChange}
          />

          <br /><br />

          <label htmlFor = 'conhecimento'> possui conhecimento prévio? </label>
          <input type = 'checkbox' id = 'conhecimento'/> 
          
          <br /><br />

          <label htmlFor = 'textarea'> descreva resumidamente seus conhecimentos</label> <br />
          <textarea cols = '45' rows = '10' id = 'textarea'
            value = {this.state.textarea} onChange = {this.handleChange}
          >
          </textarea>
          
        </form>
      </div>
    );
  }
}

export default Formulario