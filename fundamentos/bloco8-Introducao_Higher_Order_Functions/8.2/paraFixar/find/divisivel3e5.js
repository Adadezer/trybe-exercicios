// Para fixar

// find percorre toda a lista, e mostra o primeiro item q satisfaça a condição

// 1 - Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5 , caso ele exista:

const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  // Adiciona seu código aqui

  const teste = numbers.find((element) =>{
      if (element % 3 === 0 && element % 5 === 0 ){
        return `${element} é divisivel por 3 e por 5!`;
      }
  })

  return teste
}

console.log(findDivisibleBy3And5());

// VERSÃO AINDA MAIS REDUZIDA

const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {return numbers.find(element => element % 3 === 0 && element % 5 === 0)};

console.log(findDivisibleBy3And5());
