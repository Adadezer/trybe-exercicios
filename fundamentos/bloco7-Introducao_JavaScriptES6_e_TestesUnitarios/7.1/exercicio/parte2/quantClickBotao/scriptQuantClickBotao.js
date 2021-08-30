/* Crie uma página que contenha:

    . Um botão ao qual será associado um event listener ;
    . Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
    . Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.
*/


// TRADICIONAL

/* let clickCount = 0;
    
function clickBotao() {
    const paragrafo = document.getElementById('paragrafo');
    paragrafo.innerHTML = clickCount += 1;
}

const botao = document.getElementById("botao");
botao.addEventListener("click", clickBotao); */


// FORMA RESUMIDA

let clickCount = 0;

/* //ARROW FUNCTION

document.getElementById('botao').addEventListener('click', () => document.getElementById('paragrafo').innerHTML = `O botão foi clicado ${clickCount += 1} vezes`); */

// COM OPERADOR TERNARIO
const paragrafo = document.getElementById('paragrafo');
const botao = document.getElementById('botao');

botao.addEventListener('click', () => clickCount < 1 ?  paragrafo.innerHTML = `O botão foi clicado ${clickCount += 1} vez` : paragrafo.innerHTML = `O botão foi clicado ${clickCount += 1} vezes`);

// aqui é < 1 pq o contador faz a verificação antes de mostrar a msg, e na hora que mostra,atualiza o numero.