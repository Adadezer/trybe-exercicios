/* Crie uma função que obtenha o VALOR da chave de acordo com a sua posição no objeto. Por exemplo:

console.log(getValueByNumber(lesson1, 0));
Output: 'Matématica' */

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

// console.log(Object.values(lesson1)[1]);

const getValueByNumber = (obj, chave) => Object.values(obj)[chave];
console.log(getValueByNumber(lesson1, 0))

// sem arrow function

// function getValueByNumber (obj, chave) {
//     const valor = Object.values(obj)[chave]
//     return valor
// }
// console.log(getValueByNumber(lesson1, 0))