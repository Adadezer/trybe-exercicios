// import Person from './person';
import Student from './student';

// const pessoa1 = new Person('João', new Date('1995/06/15'));
// const pessoa2 = new Person('Maria', new Date('2005/09/07'));

// console.log(pessoa1);
// console.log(pessoa2);

const Joao = new Student('João', new Date('1994/06/15'));
// console.log('Joao: ', Joao);
Joao.examsGrades = [10, 6, 7, 5];
Joao.worksGrades = [8, 0];
console.log('Joao: ', Joao);
console.log('soma grades: ', Joao.sumGrades());

const Maria = new Student('Maria', new Date('1994/09/07'));
Maria.examsGrades = [10, 8, 7, 4];
Maria.worksGrades = [8, 6];
console.log('Maria: ', Maria);
console.log('soma grades: ', Maria.sumGrades());

const Jose = new Student('Jose', new Date('1994/08/04'));
Jose.examsGrades = [9, 8, 2, 5];
Jose.worksGrades = [0, 0];
console.log('Jose: ', Jose);
console.log('soma grades: ', Jose.sumGrades());

const Ana = new Student('Ana', new Date('1994/01/20'));
Ana.examsGrades = [10, 1, 7, 5];
Ana.worksGrades = [2, 3];
console.log('Ana: ', Ana);
console.log('soma grades: ', Ana.sumGrades());

const Joaquim = new Student('Joaquim', new Date('1994/11/14'));
Joaquim.examsGrades = [7, 6, 7, 5];
Joaquim.worksGrades = [0, 0];
console.log('Joaquim: ', Joaquim);
console.log('soma grades: ', Joaquim.sumGrades());