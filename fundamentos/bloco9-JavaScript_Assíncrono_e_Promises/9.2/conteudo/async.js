/* async e await
O async é uma mão na roda. Essa funcionalidade transforma qualquer função em uma promise. Para começar a usá-la, basta colocar o async antes da definição da função. 
Agora é só transformar o que é resolve em return e o que é reject em throw e BOOM! Sua promise com async está pronta. Vamos refatorar a função verifiedFetch para usar async : */

const fetch = require('node-fetch');

async function verifiedFetch(url) {
  if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
    return fetch(url)
    .then((r) => r.json())
    .then((r) => r.value);
  }
  throw new Error('endpoint não existe');
}

/* A funcionalidade async sozinha é fantástica mas não resolve nosso problema com a função sendJokeToFriend . Assim, junto com ela vem um bônus, o await . O await só pode ser usado dentro de uma função com async e ela faz exatamente o que diz, faz com o que a função espere uma resposta para continuar sua execução. Vamos refatorar sendJokeToFriend : */

async function sendJokeToFriend(name) {
    const message = await verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then((joke) => `Oi ${name}, ouve essa: ${joke}`)
    .catch((err) => err);
    console.log(message);
}
  
sendJokeToFriend("Anna");

/* Pronto! Usando o await , o sendJokeToFriend espera a verifiedFetch terminar toda sua execução (até o ultimo .then() ou . catch() ) para só depois executar o console.log() . Assim novamente, a função fica muito mais concisa e fácil de ler. */
