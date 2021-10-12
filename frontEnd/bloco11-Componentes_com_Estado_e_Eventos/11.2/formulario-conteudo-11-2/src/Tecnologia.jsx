import React from "react";

class Tecnologia extends React.Component {
	render() {

    const { handleChange, valorPreDef } = this.props

    let horario = '';
    switch (valorPreDef) {
      case 'react':
        horario = 'Sua palestra será as 9h'
        break;
      case 'javaScript':
        horario = 'Sua palestra será as 10:30h'
        break;
      default:
        horario = 'Sua palestra será as 13h'
        break;
    }

		return(
      <label htmlFor = 'tecnologia'>Tecnologia:
        <select value = {valorPreDef} onChange = {handleChange} id = 'tecnologia'> {/* o value da aqui da tag é pra setar um valor pré definido quando atualizar a pag*/}
          <option value = 'react'> React </option>
          <option value = 'javaScript'> Java Script </option>
          <option value = 'htmlCss'> HTML / CSS </option>
        </select>
        <span style = {{marginLeft: 20}}>{horario}</span>
      </label>
    )
	}
}

export default Tecnologia