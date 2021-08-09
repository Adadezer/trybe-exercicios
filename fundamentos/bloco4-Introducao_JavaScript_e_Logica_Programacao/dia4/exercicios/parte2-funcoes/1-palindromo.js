// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
// Exemplo de palíndromo: arara .
// verificaPalindrome('arara') ;
// Retorno esperado: true
// verificaPalindrome('desenvolvimento') ;
// Retorno esperado: false

function palindromo(string) {
    let split = string.split(''); // transforma a string em array
    let reverse = split.reverse(); // inverte as posições do array (da variavel, e da original)
    let join = reverse.join(''); // converte esse array invertido em string
    if (join == string) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(palindromo('arara')); //true
  console.log(palindromo('desenvolvimento')); //false