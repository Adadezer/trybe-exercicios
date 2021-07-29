// 1
// Como vimos no vídeo acima, uma das grandes vantagens dos arrays é o armazenamento de várias informações em uma mesma estrutura. Veja o exemplo e pratique:
let tasksList = ['tomar café', 'Reunião', 'Brincar com o cachorro'];
console.log('1:')
console.log(tasksList);
console.log('');
// 2
// Sempre que precisar armazenar várias informações, o Array é uma boa alternativa e será uma ferramenta muito útil. Observamos que por meio do .length , conseguimos ter acesso à quantidade de elementos contidos nele. Agora, como podemos acessar essas informações? Veja este exemplo:
let searchForTasks = tasksList[0];
console.log('2:')
console.log(searchForTasks);
console.log('');

// 2.1
// Como podemos observar, é possível acessar os arrays pelo seu índice. O fato curioso é que a primeira posição do array é representada pelo número 0 . Desse modo, para acessarmos o último elemento da estrutura, devemos pegar a quantidade de seus elementos utilizando o .length e subtrair 1 .

// aqui a estrutura é: tasksList[numero do indice], nessa logica o tamanho da lista (3), menos 1, é igual a 2, ou seja ele retorna o indice 2 do array (q no caso é o ultimo item)
let searchForLastTasks = tasksList[tasksList.length -1];
console.log('2.1:')
console.log(searchForLastTasks);
console.log('');

// 3
// Vamos agora adicionar uma nova atividade para nossa lista de arrays. Veja e pratique com o exemplo a seguir:
let tasksListAdd = ['tomar café', 'Reunião', 'Brincar com o cachorro'];
tasksListAdd.push('Fazer exercícios da Trybe'); //adiciona mais uma tarefa
console.log('3:')
console.log(tasksListAdd);
console.log('');

// 3.1
// Legal, né!? Repare que o método .push() adiciona um novo item no final do array. Se precisarmos adicionar no início, podemos usar o .unshift() . Teste em seu console e veja o resultado.
let tasksListAddFirst = ['tomar café', 'Reunião', 'Brincar com o cachorro'];
tasksListAddFirst.unshift('Fazer exercícios da Trybe');
console.log('3.1:')
console.log(tasksListAddFirst);
console.log('');

// 4
// Bacana, já aprendemos a estruturar nosso array, acessar algumas informações e adicionar itens. Espero que esteja animado e se perguntando: "Ok. Agora como faço para remover?" . Simples, veja este exemplo:
let remover = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];
remover.pop(); // remove a última tarefa
console.log('4:')
console.log(remover);
console.log('');

// 4.1
// O método .pop() nos permite remover o último item do array. Agora, se precisarmos remover o primeiro item da lista, podemos usar o .shift() . Faça em seu console e veja o resultado.
let removeFirst = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];
removeFirst.shift(); // remove a primeira tarefa
console.log('4.1:')
console.log(removeFirst);
console.log('');

// 5
// Outra importante ferramenta é o indexOf() , usado para procurar o índice de um item no Array.(procura o indece, o numero, não oq tem dentro dele). Veja o exemplo:

let searchForIndex = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];
let indexOfTasks = searchForIndex.indexOf('Reunião');
console.log('5:')
console.log(indexOfTasks);
console.log('');