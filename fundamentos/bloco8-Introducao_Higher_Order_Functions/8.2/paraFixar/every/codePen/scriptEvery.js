// O método every recebe um array, e a função callback checará se todos os elementos satisfazem a condição passada (nesse exemplo, ser ímpar)

// Array que será passado para o .every
const numbers = [1, 3, 5, 7, 9, 11];

// Callback que checa se o número é ímpar
function isOdd(number) {
  return number % 2 !== 0;
}

// Função em que passamos o array numbers como parâmetro. Se todos os números são ímpares, a callback retornará true e a frase "Todos os números são ímpares". Caso contrário, o retorno da callback é false, indicando que há um número par no array.
checkIsOdd = (array) => {
  const answer = document.querySelector("#answer");
  if (array.every(isOdd)) {
    answer.innerHTML = "Todos os números são ímpares";
  } else {
    answer.innerHTML = "Pelo menos um número é par";
  }
};

const btnEvery = document.querySelector("#btn-every");

btnEvery.addEventListener("click", () => checkIsOdd(numbers));

///////////////////////////////////////////////////////////////////////////////////////////

// O exemplo abaixo usará o every para verificar se o estudante passou em todas as matérias:

const grades = {
  portugues: 'Aprovado',
  matematica: 'Reprovado',
  ingles: 'Aprovado',
};

const verifyGrades = (studentGrades) => (
  Object.values(studentGrades).every((grade) => grade === 'Aprovado')
);

console.log(verifyGrades(grades));