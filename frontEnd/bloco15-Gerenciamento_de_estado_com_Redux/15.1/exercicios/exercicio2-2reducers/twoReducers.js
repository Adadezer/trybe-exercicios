// const Redux = require('redux');
/* Exercício 2
Vamos combinar dois reducers existentes e retornar algumas informações para a nossa aplicação. */

const ESTADO_INICIAL_1 = {
  nome: 'Rodrigo',
  sobrenome: 'Santos da Silva',
  endereco: 'Rua Soldado Mathias, 765',
  cidade: 'Belo Horizonte',
};

const ESTADO_INICIAL_2 = {
  nome: 'Bruna',
  sobrenome: 'Santana Oliveira',
  endereco: 'Rua Holanda, 332',
  cidade: 'São Paulo',
};

const meuPrimeiroReducer = (state = ESTADO_INICIAL_1, action) => {
  switch (action.type) {
    /* 3 - Crie actions que alterem o nome e o sobrenome dos estados iniciais, e adapte seu respectivo reducer. */
    case 'ALTERAR_PRIMEIRO_NOME_E_SOBRENOME':
      return {
        ...state, // precisa do ...state pois ele sobrescreve o estado anterior, aqui ele pega d novo oq ja tem, e modifica oq precisa 
        nome: action.nome,
        sobrenome: action.sobrenome,
      }
    default:
      return state;
  }
};

const meuSegundoReducer = (state = ESTADO_INICIAL_2, action) => {
  switch (action.type) {
    /* 3 - Crie actions que alterem o nome e o sobrenome dos estados iniciais, e adapte seu respectivo reducer. */
    case 'ALTERAR_SEGUNDO_NOME_E_SOBRENOME':
      return {
        ...state,
        nome: action.nome,
        sobrenome: action.sobrenome,
      }
    default:
      return state;
  }
};

const reducerCombinado = Redux.combineReducers({
  meuPrimeiroReducer,
  meuSegundoReducer
});

const store = Redux.createStore(reducerCombinado);