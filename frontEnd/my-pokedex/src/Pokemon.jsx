import React from "react";

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;
    
    return(
      <div className = 'card'>
        <div className = 'infomacoes'>
          <p>Nome: {name}</p>
          <p>Tipo: {type}</p>
          <p>Peso: {averageWeight.value} {averageWeight.measurementUnit}</p>
        </div>
        
        <div className = 'imagem'>
          <img src = {image} alt="imagem Pokemon"/>
        </div>
      </div>
    )
}
}

export default Pokemon;