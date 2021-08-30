/* Crie um código JavaScript com a seguinte especificação:
Não se esqueça de usar template literals

Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .

Exemplo:
. String determinada: "Tryber x aqui!"
. Parâmetro: "Bebeto"
. Retorno: "Tryber Bebeto aqui!" */

const string = `Tryber x aqui!`;

function stringX (param) {
    const strSplit = string.split(' ');
    for (let i = 0; i < strSplit.length; i += 1) {
        if (strSplit[i] === `x`) {
            strSplit[i] = param;     
        }
    }
    const strJoin = strSplit.join(' ');
    return strJoin;
}

console.log(stringX(`Adadezer`));

/* .Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills.

Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. 

Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. 
Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .

Exemplo: "Tryber x aqui! Minhas cinco principais habilidades são:
JavaScript;
HTML; ... #goTrybe". */

const arrSkills = ["HTML", "CSS", "JavaScript", "Git", "Github"];
function skills(params) {
    const skillsAlfabetica = arrSkills.sort();

    const concat = `${params} Minhas cinco principais habilidades são:
    ${arrSkills[0]};
    ${arrSkills[1]};
    ${arrSkills[2]};
    ${arrSkills[3]};
    ${arrSkills[4]}; #goTrybe`

    return `${concat}`;
}
console.log(skills(stringX(`Adadezer`)));