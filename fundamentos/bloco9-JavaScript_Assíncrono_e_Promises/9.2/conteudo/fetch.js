const fetch = require('node-fetch');

function verifiedFetch(url) {
  return new Promise((resolve, reject) => {
    if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
      fetch(url)
        .then((r) => r.json())
        .then((r) => resolve(r.value));
    } else {
      reject(new Error('endpoint não existe'));
    }
  });
}

/* Vamos dar uma olhada rápida no código acima. 
Primeiro criamos a função verifiedFetch e passamos o url do nosso endpoint. Depois retornamos uma promise , transformando nossa função em uma função assíncrona. Agora, dentro da promise fazemos uma verificação. Se o endpoint for o certo, usamos o fetch para fazer uma chamada ao endpoint, transformamos a resposta em um json utilizando o método .json() , e para finalizar usamos o resolve para retornar a nossa resposta. 
Caso o url não seja o certo, levantamos um error. Perceba aqui que usamos o construtor new Error para levantar um error. Usar esse construtor dentro do reject é uma boa prática importante e vamos usá-lo a partir de agora. */

function sendJokeToFriend(name) {
  const message = verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then((joke) => `Oi ${name}, ouve essa: ${joke}`)
    // .then((joke) => console.log(`Oi ${name}, ouve essa: ${joke}`))
    .catch((err) => err);
  console.log(message);
}

sendJokeToFriend("Anna");

/* Agora execute a função sendJokeToFriend e veja se você acertou. Como vemos, recebemos o seguinte log: Promise { <pending> } . Vamos ver o que acontece aqui. Como vimos, verifiedFetch é uma promise, logo, é assíncrono. Quando o javascript executa a função, ele manda ela para "área especial" e passa para próxima função que é o console. Como a promise ainda não voltou com o conteúdo de message , vemos que a promise ainda está no estado pending . Para visualizar ainda melhor, retire o fetch e execute um resolve que retorna qualquer valor, assim a promise terminará sua execução imediatamente. Antes de executar, pense: Agora que a promise resolve imediatamente, quando o console.log for executado a Promise estará em pending ou já terá um resultado ? Execute e veja a resposta.

Como você viu, ela esta em pending, mesmo sendo resolvida imediatamente. Isso aconteceu pois, mesmo resolvendo na hora, a promise vai para sua área e sai da fila. Quando ela retorna, mesmo que de imediato, ela volta pro final da fila e o console.log está na frente, sendo executado primeiro. Para resolver esse problema existem 2 maneiras. A primeira é usar o fluxo da promise e colocar o console.log dentro do .then() . Essa solução e ótima, mas pode ficar dificil de se manter e ler a medida que o número de passos aumenta e a medida que cada passo fica mais complexo também, assim, surgiu a terceira evolução das promises, o async e o await ! */