import React from "react";
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pokeIndex: 0
    }
  }
  nextPokemon = () => {
    if (this.state.pokeIndex === this.props.pokemonS.length - 1) {
      this.setState(state => ({
        pokeIndex: state.pokeIndex = 0
      }));
    } else {
      this.setState(state => ({
        pokeIndex: state.pokeIndex + 1  
      }))
    }
  }
  render() {
    const {pokemonS} = this.props // é a mesma coisa disso: this.props.pokemonS

    return(
      <div className = 'pokedex'>
        {/* {pokemonS.map(element => <Pokemon key = {element.id} pokemon = {element}/>)} */}

        <Pokemon pokemon = {pokemonS[this.state.pokeIndex]} /> {/*pokemonS[0] */}
        <button onClick = {this.nextPokemon}>Próximo</button>
      </div>
      
    )
  }
}

export default Pokedex;