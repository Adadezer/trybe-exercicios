import React, { Component } from 'react'

class Formulario extends Component {
  constructor() {
    super();

    this.state = {
      tecnologia: 'react',
      idade: 18,
      conhecimento: false,
      textarea: '',
    }
  }

  handleChange = ({target}) => {
    const {id} = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [id]: value, // eu q escolhi fazer o handle genérico com o id, nos exemplos foi feito com o nome, o importante é o valor passado na chave do this.setState ser igual a chave no this.state
    });
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
            <select value = {this.state.tecnologia} onChange = {this.handleChange} id = 'tecnologia'> {/* o value da aqui da tag não interfere no value na função, esse  da tag é só pra setar um valor pré definido quando atualizar a pag*/}
              <option value = 'react'> React </option>
              <option value = 'javaScript'> Java Script </option>
              <option value = 'htmlCss'> HTML / CSS </option>
            </select>
          </label>

          <br /><br />

          <fieldset>
            <legend>informe seus dados:</legend>

            <label htmlFor = 'idade'>Idade: </label>
            <input type = 'number' id = 'idade'
              value = {this.state.idade} onChange = {this.handleChange}
            />

            <br /><br />

            <label htmlFor = 'conhecimento'> possui conhecimento prévio? </label>
            <input type = 'checkbox' id = 'conhecimento' value = {this.state.conhecimento} onChange = {this.handleChange}/> 
            
            <br /><br />

            <label htmlFor = 'textarea'> descreva resumidamente seus conhecimentos </label> 
            <br />
            <textarea cols = '45' rows = '10' id = 'textarea'
              value = {this.state.textarea} onChange = {this.handleChange}
            >
            </textarea>

            <br /><br />

            <legend>mande-nos uma foto sua :)</legend>
            <input type="file" id="arquivo" />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Formulario