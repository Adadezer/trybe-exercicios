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

const allLessons = {
    lesson1: Object.assign({},lesson1),
    lesson2: Object.assign({},lesson2),
    lesson3: Object.assign({},lesson3)
};


// 6. Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

function totalEstudantes(params) {
    const lesson = Object.keys(params); // pego as chaves de allLessons (lesson1, lesson2, lesson3), q são os próprios objetos
    let total = 0;

    for (let i = 0; i < lesson.length; i += 1) {
        const numeroEstudantes = params[lesson[i]].numeroEstudantes; // obj[chave].valor - no caso, numero de estudantes, dentro de lesson1 2 ou 3, dentro de allLessons
        
        total += numeroEstudantes; // somo cada um dos estudantes
    }

    return total
}

console.log(totalEstudantes(allLessons));
