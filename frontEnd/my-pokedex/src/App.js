import './App.css';
import data from './data';
import Pokedex from './Pokedex';

function App() {
  return (
    <div className = 'App'>
      <Pokedex pokemonS = { data }/>
    </div>
  );
}

export default App;
