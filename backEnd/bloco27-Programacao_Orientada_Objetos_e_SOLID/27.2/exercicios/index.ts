import Person from './person';
import Student from './student';
import Employee from './employee';
import Subject from './subject';
import Teacher from './teacher';

// exercicio 1 - Para testar crie pelo menos duas pessoas.
console.log('PESSOAS:');
const pessoa1 = new Person('Jhonny', new Date('2005/05/21'));
const pessoa2 = new Person('Jhenny', new Date('1993/06/15'));

console.log(pessoa1);
console.log(pessoa2);
console.log();
console.log();

// exercicio 2 - Para testar, crie pelo menos 5 pessoas estudantes.
console.log('ESTUDANTES:');
const Joao = new Student('João', new Date('1994/06/15'));
// console.log('Joao: ', Joao);
Joao.examsGrades = [10, 6, 7, 5];
Joao.worksGrades = [8, 0];
console.log(Joao);
console.log(`soma das notas de ${Joao.name}: ${Joao.sumGrades()}`);
console.log();

const Maria = new Student('Maria', new Date('1994/09/07'));
Maria.examsGrades = [10, 8, 7, 4];
Maria.worksGrades = [8, 6];
console.log(Maria);
console.log(`soma das notas de ${Maria.name}: ${Maria.sumGrades()}`);
console.log();

const Jose = new Student('Jose', new Date('1994/08/04'));
Jose.examsGrades = [9, 8, 2, 5];
Jose.worksGrades = [0, 0];
console.log(Jose);
console.log(`soma das notas de ${Jose.name}: ${Jose.sumGrades()}`);
console.log();

const Ana = new Student('Ana', new Date('1994/01/20'));
Ana.examsGrades = [10, 1, 7, 5];
Ana.worksGrades = [2, 3];
console.log(Ana);
console.log(`soma das notas de ${Ana.name}: ${Ana.sumGrades()}`);
console.log();

const Joaquim = new Student('Joaquim', new Date('1994/11/14'));
Joaquim.examsGrades = [7, 6, 7, 5];
Joaquim.worksGrades = [0, 0];
console.log(Joaquim);
console.log(`soma das notas de ${Joaquim.name}: ${Joaquim.sumGrades()}`);
console.log();
console.log();

// exercicio 3 - teste Employee
const testeEmployee: Employee = {
  registration: 'regEmployee' + Math.floor(Math.random() * ( 10000 - 0) + 0), // Math.random() * (max - min) + min
  salary: 3000,
  admissionDate: new Date(),
  generateRegistration(): string{
    return 'regEmployee' + Math.floor(Math.random() * ( 10000 - 0) + 0) // Math.random() * (max - min) + min
  }
}
console.log('EMPLOYEE:');
console.log(testeEmployee);
console.log('generateRegistration: ', testeEmployee.generateRegistration());
console.log();
console.log();

// exercicio 4 - Para testar crie as disciplinas Matemática, História, Filosofia.
const matematica = new Subject('Matamática');
const historia = new Subject('História');
const filosofia = new Subject('Filosofia');

console.log('DISCIPLINAS:')
console.log(matematica);
console.log(historia);
console.log(filosofia);
console.log();
console.log();

// exercicio 5 - Para testar crie uma pessoa professora para cada disciplina criada no exercício anterior.
console.log('PROFESSORES:');
const profMat = new Teacher('Marcos', new Date('1980/09/25'), 4500, matematica);
const profHist = new Teacher('Roberto', new Date('1968/09/07'), 4000, historia);
const profFil = new Teacher('Phillip', new Date('1968/07/04'), 3500, filosofia);

console.log(`Nome: ${profMat.name}, professor de ${profMat.subject.subject}`);
console.log(profMat);
console.log(`Nome: ${profHist.name}, professor de ${profHist.subject.subject}`);
console.log(profHist);
console.log(`Nome: ${profFil.name}, professor de ${profFil.subject.subject}`);
console.log(profFil);