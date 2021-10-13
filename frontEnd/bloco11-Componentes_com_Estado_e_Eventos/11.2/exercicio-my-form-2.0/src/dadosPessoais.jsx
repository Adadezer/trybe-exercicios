import React from "react";

class PersonalData extends React.Component {
  render() {
    const {valorPreDef, handleChange} = this.props

    return(
      <div className = 'personalData'>
        <fieldset>
          <legend>Dados Pessoais</legend>

          <label htmlFor="nome">Nome: </label>
          <input type="text" id="nome" maxLength = '40' required  
            value = {valorPreDef.nome} onChange = {handleChange}
          />

          <label htmlFor="email"> E-mail: </label>
          <input type="text" id="email" maxLength = '50' required
            value = {valorPreDef.email} onChange = {handleChange}
          />

        <label htmlFor="cpf"> CPF </label>
        <input type="text" id="cpf" maxLength = '11' required
          value = {valorPreDef.cpf} onChange = {handleChange}
        />
        
        <label htmlFor="cpf"> Endereço </label>
        <input type="text" id="endereco" maxLength = '200' required
          value = {valorPreDef.endereco} onChange = {handleChange}
        />

        </fieldset>
        
      </div>
    );
  }
}

export default PersonalData;