// Exercício 2 - A: Transforme nossa INTERFACE Funcionário em uma CLASSE Funcionário que herda da nossa classe pessoa

import Person from './person';
import Enrollable from './enrollable';

export default class Employee extends Person implements Enrollable {
  protected _enrollment!: string; // matricula  // private _enrollment: string = String();
  private _salary: number = Number(); // valor do salário
  private _admissionDate: Date = new Date(); // data de admissão

  constructor(name: string, birthDate: Date, salary: number) {
    super(name, birthDate);

    this.enrollment = this.generateEnrollment();
    this.salary = salary;
    this.admissionDate = new Date();
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    if (value.length < 16) throw new Error('A matricula deve possuir pelo menos 16 caracteres');

    this._enrollment = value;
  }

  generateEnrollment(): string {
    const date = new Date();
    const year = date.getFullYear();
    const mounth = String(date.getMonth() + 1).padStart(2, '0'); // https://www.horadecodar.com.br/2021/04/03/como-pegar-a-data-atual-com-javascript/
    const random = year + mounth + Math.floor(Math.random() * ( 100000000000 - 1000000000) + 1000000000) // Math.random() * (max - min) + min
    return random;
  }

  get salary(): number { return this._salary }

  set salary(value: number) {
    if (value < 0) throw new Error('O salário não pode ser negativo.');

    this._salary = value;
  }

  get admissionDate(): Date {
    return this._admissionDate;
  }

  set admissionDate(value: Date) {
    if (value.getTime() > new Date().getTime()) throw new Error('A data de admissão não pode ser uma data no futuro.');

    this._admissionDate = value;
  }
}