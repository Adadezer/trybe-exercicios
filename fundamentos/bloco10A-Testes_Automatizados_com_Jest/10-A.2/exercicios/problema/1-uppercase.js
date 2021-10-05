/* 1 - Escreva um teste que verifique a chamada do callback de uma função uppercase , que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos. */

const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

module.exports = uppercase;

/* Roberval Filho - Turma 12
Jose Carlos, a função uppercase espera de segundo parâmetro uma função. Você precisa escrever essa função.
Ou você escreve ela em outra linha e coloca ela de callback da primeira na hora do console, ou você escreve ele na hora do console via arrow functions.
Da forma que você escreveu aí você passou ‘callback’ como o segundo parâmetro, e callback não é nada */