/* 5-
  - Vamos sofisticar um pouco mais nosso script. Além de imprimir o IMC na tela,
  imprima também em qual categoria da tabela abaixo aquele IMC se enquadra:
  
  - Considere a seguinte tabela para classificar a situação do IMC:
  | IMC                                       | Situação                  |
  | ----------------------------------------- | ------------------------- |
  | Abaixo de 18,5                            | Abaixo do peso (magreza)  |
  | Entre 18,5 e 24,9                         | Peso normal               |
  | Entre 25,0 e 29,9                         | Acima do peso (sobrepeso) |
  | Entre 30,0 e 34,9                         | Obesidade grau I          |
  | Entre 35,0 e 39,9                         | Obesidade grau II         |
  | 40,0 e acima                              | Obesidade graus III e IV  |
*/

const readline = require('readline-sync');

const peso = () => {
  return readline.question('Qual seu peso? ');
}

const altura = () => {
  return readline.questionFloat('Qual sua altura? ');
}

const imc = () => {
  const calcIMC = (peso() / Math.pow(altura(), 2)).toFixed(2);

  if(calcIMC < 18.5) {
    console.log(`seu IMC é: ${calcIMC}! Abaixo do peso.(magreza)`);
  }

  if(calcIMC >= 18.5 && calcIMC <= 24.9 ) {
    console.log(`seu IMC é: ${calcIMC}! Peso normal`);
  }
 
  if(calcIMC >= 25 && calcIMC <= 29.9) {
    console.log(`seu IMC é: ${calcIMC}! Acima do peso (sobrepeso)`);
  }
  
  if(calcIMC >= 30 && calcIMC <= 34.9) {
    console.log(`seu IMC é: ${calcIMC}! Obesidade grau I `);
  }
  
  if(calcIMC >= 35 && calcIMC <= 39.9) {
    console.log(`seu IMC é: ${calcIMC}! Obesidade grau II`);
  }
  
  if(calcIMC > 40) {
    console.log(`seu IMC é: ${calcIMC}! Obesidade graus III e IV`);
  }
}

imc();