// import Person from './person';
import Student from './student';
import Employee from './employee';
import Subject from './subject';
import Teacher from './teacher';

// // exercicio 1 - Para testar crie pelo menos duas pessoas.
// console.log('PESSOAS:');
// const pessoa1 = new Person('Jhonny', new Date('2005/05/21'));
// const pessoa2 = new Person('Jhenny', new Date('1993/06/15'));

// console.log(pessoa1);
// console.log(pessoa2);
// console.log();
// console.log();

// exercicio 2 - Para testar crie dois estudantes e dois professores.
console.log('ESTUDANTES:');
const Ana = new Student('Ana', new Date('1994/01/20'));
Ana.examsGrades = [10, 1, 7, 5];
Ana.worksGrades = [2, 3];
console.log(Ana);
console.log(`soma das notas de ${Ana.name}: ${Ana.sumGrades()}`);
console.log(`media das notas de ${Ana.name}: ${Ana.sumAverageGrade()}`);
console.log();

const Joaquim = new Student('Joaquim', new Date('1994/11/14'));
Joaquim.examsGrades = [7, 6, 7, 5];
Joaquim.worksGrades = [0, 0];
console.log(Joaquim);
console.log(`soma das notas de ${Joaquim.name}: ${Joaquim.sumGrades()}`);
console.log(`media das notas de ${Joaquim.name}: ${Joaquim.sumAverageGrade()}`);
console.log();
console.log();

const matematica = new Subject('Matamática');
const historia = new Subject('História')

console.log('DISCIPLINAS:')
console.log(matematica);
console.log(historia);
console.log();
console.log();

console.log('PROFESSORES:');
const profMat = new Teacher('Marcos', new Date('1980/09/25'), 4500, matematica);
const profHist = new Teacher('Roberto', new Date('1968/09/07'), 4000, historia);

console.log(`Nome: ${profMat.name}, professor de ${profMat.subject.subject}`);
console.log(profMat);
console.log(`Nome: ${profHist.name}, professor de ${profHist.subject.subject}`);
console.log(profHist);