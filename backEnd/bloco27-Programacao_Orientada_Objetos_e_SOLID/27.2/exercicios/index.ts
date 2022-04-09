import Person from './person';
import Student from './student';
import Employee from './employee';
import Subject from './subject';

// exercicio 1 - Para testar crie pelo menos duas pessoas.
const pessoa1 = new Person('Jhonny', new Date('2005/05/21'));
const pessoa2 = new Person('Jhenny', new Date('1993/06/15'));

console.log(pessoa1);
console.log(pessoa2);

// exercicio 2 - Para testar, crie pelo menos 5 pessoas estudantes.
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

// exercicio 3 - teste Employee
const testeEmployee: Employee = {
  registration: 'regEmployee' + Math.floor(Math.random() * ( 10000 - 0) + 0), // Math.random() * (max - min) + min
  salary: 3000,
  admissionDate: new Date(),
  generateRegistration(): string{
    return 'regEmployee' + Math.floor(Math.random() * ( 10000 - 0) + 0) // Math.random() * (max - min) + min
  }
}

console.log(testeEmployee);
console.log('generateRegistration: ', testeEmployee.generateRegistration());

// exercicio 4 - Para testar crie as disciplinas Matemática, História, Filosofia.
const matematica = new Subject('Matamática');
const historia = new Subject('História');
const filosofia = new Subject('Filosofia');

console.log(matematica);
console.log(historia);
console.log(filosofia);

