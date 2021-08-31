// 3. Crie uma função para mostrar o tamanho de um objeto.

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

const tamanho = obj => Object.entries(obj).length; // pode ser keys, ou values tbm
console.log(tamanho(lesson3));