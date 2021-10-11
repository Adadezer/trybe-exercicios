import React from "react";
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
  render() {
    const {pokemonS} = this.props
    return(
      <div className = 'pokedex'>
        {pokemonS.map(element => <Pokemon key = {element.id} pokemon = {element}/>)}
      </div>
      
    )
  }
}

export default Pokedex;