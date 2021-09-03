// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

function HOFsorteio(numApostado, callback) {
    const numSorteado = Math.floor(Math.random() * 5 + 1);
    return callback(numApostado, numSorteado);

}
console.log(HOFsorteio(3, verificacao));

// verificacao(3, 4)
function verificacao(numApostado, numSorteado) {
    if (numApostado === numSorteado) {
        return 'Parabéns você ganhou';
    } else {
        return 'Tente novamente'
    }
}
