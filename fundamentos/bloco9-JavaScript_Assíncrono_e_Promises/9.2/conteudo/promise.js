const promise = new Promise((resolve, reject) => {

});
///////////////////////////////////////////////////////////////////////////////////////

/* Da mesma forma que uma função tem o return para retornar uma resposta de sua execução, a Promise tem o resolve e o reject , que fazem exatamente isso: retornam uma resposta de sua execução. O resolve retorna uma resposta positiva, ou seja, você irá utilizá-lo quando quiser transmitir que tudo ocorreu bem. Já o reject retorna uma resposta negativa, ou seja, você irá utilizá-lo quando ocorrer algo errado.

Existe apenas uma pequena diferença entre o resolve/reject e o return : enquanto o return interrompe a execução da função quando é chamado, o resolve/reject não o fazem, por isso é importante utilizar um return antes de um deles quando não se quer que a execução continue (esse pattern se chama 'early-return', mas não se preocupe com nomes agora). Vamos colocar em prática o que vimos aqui!

Para simular uma situação de sucesso e erro, vamos utilizar o Math.random() para sortear um valor de 0 a 10. Se o valor for entre 0 e 5 (com 5 incluso), será um fracasso, caso o valor seja entre 6 e 10, será um sucesso. Nosso programa ficaria assim: */

const promise = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 11);
  
    if (number <= 5) {
      return reject(console.log(`Que fracasso =( Nosso número foi ${number}`));
    }
    resolve(console.log(`Que sucesso =) nosso número foi ${number}`));
});
////////////////////////////////////////////////////////////////////////////////////////

/* Gestores de fluxo
Existem 2 principais ferramentas que podemos usar para gerir o fluxo assíncrono com promises: o .then() e o .catch() . Vamos começar falando sobre o .then() . Para isso , vamos refatorar nossa promise: */

const promise = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 11);
  
    if (number <= 5) {
      return reject(console.log(`Que fracasso =( Nosso número foi ${number}`));
    }
    resolve(number);
})
.then(number => `Que sucesso =) nosso número foi ${number}`)
.then(msg => console.log(msg));

/* Aqui demonstramos 2 coisas importantes sobre a sintaxe do .then() :
Passamos como argumento uma função. Essa função também recebe 1 argumento que é o retorno do resolve da nossa promise.

O .then() é usado "em cadeia", um conceito chamado de chaining . Assim, podemos colocar vários .then() em cadeia, e o argumento da função interna de um será o retorno do anterior. A parte mais importante é que o .then() espera a promise (ou o .then() anterior) ser concluída para começar a sua execução. Assim, nosso fluxo está controlado!

Vamos ver o que acontece no código acima. A promise é executada e, após sua execução, caso o número seja algo entre 5 e 10, o resolve retorna o número que é passado para o primeiro .then() como number . Por sua vez, ele retorna a frase Que sucesso =) nosso número foi ${number} que é passado como argumento para o segundo .then() , que o usa para "logar" no console. */

/////////////////////////////////////////////////////////////////////////////////////////////

/* Ok, mas o erro continua acontecendo. O que podemos fazer em relação a isso? Agora entra o .catch() ! Vamos adicioná-lo ao código: */

const promise = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random()* 11);
  
    if (number <= 5) {
      return reject(number);
    }
    resolve(number);
})
.then(number => `Que sucesso =) nosso número foi ${number}`)
.then(msg => console.log(msg))
.catch(number => console.log(`Que fracasso =( Nosso número foi ${number}`));

/* Se executarmos o código acima, vamos ver que o erro anterior desapareceu, pois agora ele foi tratado! Assim como o .then() recebe o retorno de resolve , o .catch() recebe o retorno do reject , que é passado para ele como argumento de sua função interna. Assim, quando a promise retorna um reject , pula todos os .then() e executa o primeiro .catch() que encontrar. E tem mais! O .catch() também "pega" qualquer erro que acontecer dentro de qualquer .then() anterior a ele. Por esse motivo é geralmente usado no final.
E assim, nossa primeira promise está pronta! 

link course: https://app.betrybe.com/course/fundamentals/javascript-assincrono-e-promises/javascript-promises/874d3ca3-db7c-4b82-8795-6bc9a664d458/conteudos/2db67ddc-24e2-41b1-b998-273dbe472f0a/promises/ce1d5951-af53-4b5a-b81d-3c3bc5d227b8?use_case=side_bar */

