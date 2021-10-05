/* Embora o código animals pareça estar correto, ele testa somente casos em que a função se comporta adequadamente e lança o erro. 

O que aconteceria se a implementação da função findAnimalsByType estivesse incorreta? Vamos testar.

Mude a função para em vez de usar o reject também usar o resolve quando o animal não for encontrado: */
const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalsByType = (type) => (
  new Promise((resolve) => { // linha alterada
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.type === type);

      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      }

      return resolve(new Error('Não possui esse tipo de animal.')); // linha alterada
    }, 100);
  })
);

/*  Agora rodamos novamente o teste e... Passou?!
Isso acontece porque como a promise retornada pela função não foi rejeitada o código dentro do catch (onde estão nossas asserções) não foi executado, logo nenhuma delas teve a chance de falhar, fazendo que por padrão o teste passe.

Para contornar este problema, o jest tem a função expect.assertions() , com ela podemos especificar quantas vezes esperamos que o teste faça asserções. Dessa forma, garantimos que todas elas foram executadas, e caso não sejam, o teste falha por outro motivo (quantidade de asserções). Vamos modificar o teste: */

describe('Quando o tipo do animal, não existe', () => {
  test('Retorne a lista de animais', () => {
    expect.assertions(1);
    return findAnimalsByType('Lion').catch((error) => (
      expect(error.message).toMatch('Não possui esse tipo de animal.')
    ));
  });
});

/* Execute-o novamente e agora repare que ele falha com uma mensagem dizendo que era esperada uma asserção, porém não houve nenhuma. 

Se você desfazer alterações na função findAnimalsByType e rodar o teste mais uma vez, ele deverá passar normalmente. */