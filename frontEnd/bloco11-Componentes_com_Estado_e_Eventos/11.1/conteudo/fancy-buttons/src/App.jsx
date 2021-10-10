import React from 'react';
import VideConteudo from './VideoConteudo';

// funções declaradas do lado de fora

/*
function btnFancy1() {
  console.log('Clicou no botão Fancy1');
}

function btnFancy2() {
  console.log('Clicou no botão Fancy2');
}

function btnFancy3() {
  console.log('Clicou no botão Fancy3');
}

class App extends React.Component {
  render(){
    return(
      <div>
        <button onClick={btnFancy1}>botão Fancy 1</button>
        <button onClick={btnFancy2}>botão Fancy 2</button>
        <button onClick={btnFancy3}>botão Fancy 3</button>
      </div>
    )
  }
}
*/

// funções declaradas do lado de dentro

class App extends React.Component {

  constructor(){
    super()

    this.btnFancy3 = this.btnFancy3.bind(this);

    this.state = {
      cliquesFancy1: 0,
      cliquesFancy2: 0,
      cliquesFancy3: 0
    }
    // console.log('componente sendo construido')
  }

  
  btnFancy1 = () => {
    // console.log('this dentro do Fancy 1: ', this);
    this.setState((estadoAnterior) => ({
      cliquesFancy1: estadoAnterior.cliquesFancy1 + 1 
    }))

    // A cor atual do botão deve ser impressa num console.log() de dentro da função do evento (evento é o estato) que lida com o clique. Faça isso acontecer!
    console.log(this.numeroPar(this.state.cliquesFancy1));
  }
  
  btnFancy2 = () => {
    // console.log('this dentro do Fancy 2: ', this);
    this.setState((estadoAnterior) => ({
      cliquesFancy2: estadoAnterior.cliquesFancy2 + 1
    }))
    console.log(this.numeroPar(this.state.cliquesFancy2));
  }
  
  btnFancy3() {
    // console.log('this dentro do Fancy 3: ', this);
    this.setState((estadoAnterior) => ({
      cliquesFancy3: estadoAnterior.cliquesFancy3 + 1
    }))
    console.log(this.numeroPar(this.state.cliquesFancy3));
  }

  numeroPar = (num) => {
    if (num % 2 === 0) {
      return 'green'
    }
  }

  render(){
    return(
      <div>
        <button onClick = {this.btnFancy1} 
          style = {{backgroundColor: this.numeroPar(this.state.cliquesFancy1)}}
        >
          cliques botão Fancy 1: {this.state.cliquesFancy1}
        </button>

        <button onClick = {this.btnFancy2}
          style = {{backgroundColor: this.numeroPar(this.state.cliquesFancy2)}}
        >
          cliques botão Fancy 2: {this.state.cliquesFancy2}
        </button>

        <button onClick = {this.btnFancy3}
          style = {{backgroundColor: this.numeroPar(this.state.cliquesFancy3)}}
        >
          cliques botão Fancy 3: {this.state.cliquesFancy3}
        </button>

        <br/><br/>
        <VideConteudo />
      </div>
    )
  }
}

export default App;