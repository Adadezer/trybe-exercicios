// Exercício 5 : Crie uma classe cujos objetos representem um professor.
import Person from './person';
import Employee from './employee';
import Subject from './subject';

export default class Teacher extends Person implements Employee{
  private _subject!: Subject; // disciplina
  private _registration: string = String(); // numero do registro
  private _salary: number = Number();
  private _admissionDate: Date = new Date();

  constructor(name: string, birthDate: Date, salary: number, subject: Subject) {
    super(name, birthDate);
    this.registration = this.generateRegistration();
    this.salary = salary;
    this.admissionDate = new Date();
    this.subject = subject;
  }

  get registration(): string { return this._registration }
  
  set registration(value: string) {
    if (value.length < 16) throw new Error('O registro deve possuir no mínimo 16 caracteres');

    this._registration = value;
  }

  generateRegistration(): string {
    return 'regEmployee' + Math.floor(Math.random() * ( 100000 - 10000) + 10000) // Math.random() * (max - min) + min
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

  get subject(): Subject { return this._subject }

  set subject(value: Subject) {
    this._subject = value;
  }
}