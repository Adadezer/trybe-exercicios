import React from "react"

class VideConteudo extends React.Component {
  constructor() {
    super()

    this.state = {
        numeroDeCliques: 0
    }

    this.handleClick = this.handleClick.bind(this) // permite eu ver o this dentro da função handleClick
    // console.log('componente sendo construido')
  }

  handleClick() {
    // console.log('this no handleClick: ', this)
    this.setState((estadoAnterior) => ({
        numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }));
  }

  render() {
    // console.log('this no render: ', this)
    return <button onClick={this.handleClick}>Cliques no botão: {this.state.numeroDeCliques}</button>
  }
}

export default VideConteudo;