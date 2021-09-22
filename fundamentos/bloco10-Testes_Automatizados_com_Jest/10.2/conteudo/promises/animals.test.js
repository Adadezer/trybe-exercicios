/* Promises
Para testar uma promise será usado o código abaixo. Ele possui um array ( Animals ) contendo animais com nome , idade e tipo .

A função findAnimalsByType é responsável por buscar animais contidos no array por meio de seu tipo, porém ela faz isso de maneira assíncrona, logo seu retorno será uma Promise . Quando os animais forem encontrados, a promise será resolvida ( resolve ) com um array contendo todos eles, e quando não forem, será rejeitada ( reject ) com um objeto de error. */

const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];
  
const findAnimalsByType = (type) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.type === type);

      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      }

      return reject(new Error('Não possui esse tipo de animal.'));
    }, 100);
  })
);

/* O primeiro teste desse código verificará se, ao chamar a função findAnimalsByType com Dog como parâmetro, o seu retorno será os dois cachorros do array Animals . */

describe('Quando o tipo do animal existe', () => {
  test('Retorne a lista de animais', () => ( // atenção ao uso de parenteses aqui, não chave, pois é necessário q ele retorne a promise
    findAnimalsByType('Dog').then((listDogs) => {
      expect(listDogs[0].name).toEqual('Dorminhoco');
      expect(listDogs[1].name).toEqual('Soneca');
    })
  ));
});

/* Rode o teste e verifique se ele não está dando algum falso-positivo. 
Mude o Dorminhoco para Agitado . Viu? O teste não passou, logo não possui falso-positivos. */

/* Essa promise possui dois casos: quando ela funciona, ocorre o resolve e, no erro, ocorre o reject . Como o resolve já foi testado, faltam apenas os testes do erro.

O código abaixo testa, exatamente, o caso de erro. */

describe('Quando o tipo do animal, não existe', () => {
  test('Retorne a lista de animais', () => (
    findAnimalsByType('Lion').catch((error) => (
      expect(error.message).toMatch('Não possui esse tipo de animal.')
    ))
  ));
});

/* Como o array Animals não possui nenhum com o type Lion , será disparada a reject , que retornará um objeto de erro contendo a chave message com o valor "Não possui esse tipo de animal." . 

A diferença entre esse teste e os outros é o .catch no lugar do .then . O .catch trabalha o resultado da promise quando ocorre um reject ; já o .then , quando ocorre o resolve . */