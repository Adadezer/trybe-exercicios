/* 2 . Crie uma função que receba uma frase e retorne qual a maior palavra.
Exemplo:
longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu' */

const maiorPalavra = palavra => {
    const arrPalavra = palavra.split(' ');
    let maior = ' ';
    for (let i = 0; i < arrPalavra.length; i += 1) {
        if (maior.length < arrPalavra[i].length) {
            maior = arrPalavra[i];
        }
    }
    return maior;
}
console.log(maiorPalavra("Antônio foi no banheiro e não sabemos o que aconteceu"));