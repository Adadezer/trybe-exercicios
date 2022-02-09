/* 8-
  - Crie um arquivo index.js que pergunta qual script deve ser executado
  - O script deve ser acionado através do comando npm start .
  - Utilize o readline-sync para realizar o input de dados
  - Quando executado, o script deve exibir uma lista numerada dos scripts disponíveis.
  - Ao digitar o número de um script e pressionar enter , o script deve ser executado.
  - Você pode utilizar o require para executar o script em questão.
*/

const readline = require('readline-sync');

function escolherScript() {
  // Criamos uma lista dos scripts disponíveis
  // Utilizamos objetos com `name` e `script` para facilitar a criação da lista que será exibida
  const scripts = [
    { name: 'Calcular IMC', script: './imc.js' },
    { name: 'Calcular velocidade média', script: './velocidade.js' },
    { name: 'Jogo de adivinhação', script: './sorteio.js' },
  ];

  // Iteramos sobre os scripts para criar a lista numerada
  let mensagem = scripts.map((script, index) => `${index + 1} - ${script.name}`);

  // Adicionamos uma linha a mais no começo da mensagem
  mensagem.unshift('Escolha um número para executar o script correspondente');

  // Juntamos todos os elementos em uma string, separando-os por uma quebra de linha
  mensagem = mensagem.join('\n'); // pula uma linha cada iteração do map

  const numeroEscolhido = readline.questionInt(mensagem); // pega o numero digitado, na resposta da msg

  const scriptEscolhido = scripts[numeroEscolhido]; // acessa o index escolhido no array scripts

  if (!scriptEscolhido) return console.log('Número inválido. Saindo');

  // Chamamos o script selecionado
  // Note que, no dia a dia, é mais comum utilizarmos outras formas de executar arquivos externos
  // No entanto, para fins didáticos, o `require` nos atende por enquanto.
  require(scriptEscolhido.script);
}

escolherScript();