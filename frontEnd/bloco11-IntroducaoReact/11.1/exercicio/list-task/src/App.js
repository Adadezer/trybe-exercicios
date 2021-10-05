import React from 'react';
import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const compromissos = ['tomar café', 'estudar', 'almoçar', 'trybe', 'jantar', 'descansar'];

function Lis(){
  return(
    <ol> 
      { compromissos.map(compromisso => Task(compromisso)) }
    </ol>
  );
}

function App() {
  return (
    <Lis />
  );
}

export default App;
