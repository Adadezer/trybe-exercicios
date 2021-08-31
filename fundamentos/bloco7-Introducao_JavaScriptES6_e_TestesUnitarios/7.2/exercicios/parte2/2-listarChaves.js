// 2. Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

const chaves = obj => Object.keys(obj);
console.log(chaves(lesson1));
