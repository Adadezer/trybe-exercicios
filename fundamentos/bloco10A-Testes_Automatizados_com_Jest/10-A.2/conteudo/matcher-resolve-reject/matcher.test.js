/* Matcher .resolves / .rejects

No Jest 20.0.0, para simplificar ainda mais os testes, foram adicionados os matchers .resolves e .rejects .

O .resolves espera a promise ser resolvida. Caso a promise seja rejeitada, o teste automaticamente irá falhar.

O .rejects espera a promise ser rejeitada. Caso a promise seja resolvida, o teste automaticamente irá falhar. */

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


describe('Testando promise - findAnimalsByType', () => {
  describe('Quando o tipo do animal existe', () => {
    test('Retorne a lista de animais', () => {
      const listDogs = [
        { name: 'Dorminhoco', age: 1, type: 'Dog' },
        { name: 'Soneca', age: 2, type: 'Dog' },
      ];
      return expect(findAnimalsByType('Dog')).resolves.toEqual(listDogs);
    });
  });

  describe('Quando o tipo de animal não existe', () => {
    test('Retorna um erro', () => (
      expect(findAnimalsByType('Lion'))
        .rejects.toEqual(new Error('Não possui esse tipo de animal.'))
    ));
  });
});

/* Observe que desta forma não é necessário utilizar o expect.assertions , pois os matchers verificam o estado da promise. 

Experimente mudar a implementação da função findAnimalsByType como fizemos anteriormente (trocando o reject por resolve no caso onde o animal não é encontrado) e verifique que agora o teste irá falhar identificando que foi recebida uma promise resolvida, quando deveria ser rejeitada.

Da mesma forma que retornávamos a promise, também devemos retornar o resultado do expect. */