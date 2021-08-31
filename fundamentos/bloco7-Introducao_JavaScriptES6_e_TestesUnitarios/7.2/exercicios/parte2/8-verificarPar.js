/* Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:

console.log(verifyPair(lesson3, 'turno', 'noite'));
Output: true,

console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
Output: false */

const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};
  
const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
    turno: 'noite' 
};
  
const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

function verificarPar(obj, chave, valor) {
    // return obj[chave]; // aqui retorna undefined

    if (obj[chave] && obj[chave].includes(valor)) {
        return true;
    } else {
        return false;
    }  
}
console.log(verificarPar(lesson3, 'turno', 'Matemática'));

// segunda opção

function verificarPar(obj, chave, valor) {
    const entradasObj = Object.entries(obj);

    for (index in entradasObj) {
        if (entradasObj[index][0] === chave && entradasObj[index][1] === valor) {
            return true;
        } else {
            return false; // aqui o valor pode ser q retorne undefined
        }
    }
}
console.log(verificarPar(lesson3, 'turno', 'tarde'));