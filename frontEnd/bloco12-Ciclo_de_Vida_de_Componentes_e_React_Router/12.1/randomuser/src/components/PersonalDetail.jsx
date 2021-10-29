import React from "react";

class PersonalDetail extends React.Component {
  constructor() {
    super()

    // No construtor, criamos os nossos estados de Loding e Person, que vai receber a requisição para a api.

    // Começamos com o Loading como true, pois queremos que ele exiba a nossa mensagem de "carregando" enquanto não renderizamos a primeira tela. Já o Person, setamos como um estado vázio, pois ele ira receber a nossa API.
    this.state = {
      loading: true,
      person: [],
    }
  }

  // Como estudamos, o componentDidMount vai disparar ações após o componenete ser inserido no DOM, por isso dizemos que é o ideal para realizar requisições, e atribuimos ao nosso estado Person o 'data.results' que trás os nossos dados da API. 
  // Além disso, atribuimos como false o Loading, uma vez que quando a página é renderizada, não teremos mais a mensagem de "carregando".

  componentDidMount() {
    fetch('https://api.randomuser.me/')
      .then((response) => response.json())
      .then((data) => {
        // Note que, nesse ponto o nosso data retorna um Objeto e, se acessarmos o data.results, teremos nosso array de objetos com as informações das pessoas que são geradas aleatoriamente pela requisição.
        // console.log(data);
        // console.log(data.results);
        this.setState({
          person: data.results,
          loading:false,
        })
      })
  }

  // o shoudComponentUptade irá verificar se a pessoa renderizada pela API tem mais de 50 anos
  // e com isso, irá autorizar se o componente atualiza ou não. 
  // Caso não atualize, uma mensagem de "carregando..." será exibida na tela. 
  // Caso ocorra essa situação, dê um console.log no nextState e verifique a idade da pessoa que é trazida pela API.

  shouldComponentUpdate(_nextProps, nextState) {
    const age = 50;
    // console.log(nextState)
    if (nextState.person[0].dob.age > age) {
      return false;
    } return true;
  }

  render() {
    return (
        
      );
  }
}

export default PersonalDetail