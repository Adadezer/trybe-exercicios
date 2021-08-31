// 4. Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

const valores = obj => Object.values(obj);
console.log(valores(lesson3));