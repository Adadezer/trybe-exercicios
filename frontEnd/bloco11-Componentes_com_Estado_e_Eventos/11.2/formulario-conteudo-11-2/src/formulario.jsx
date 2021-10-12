import React, { Component } from 'react'
import Tecnologia from './Tecnologia';
import TextArea from './textArea';

class Formulario extends Component {
  constructor() {
    super();

    this.state = {
      tecnologia: 'htmlCss',
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

          <Tecnologia valorPreDef = {this.state.tecnologia} handleChange = {this.handleChange} /> {/* passo via props a função handleChange (chamei essa props de handleChange), tbm passei vi props o value q será usado pra setar um valor pre definido */}

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

            <TextArea valorPreDef = {this.state.textarea} handleChange = {this.handleChange}/>

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