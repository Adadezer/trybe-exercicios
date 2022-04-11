// Exercício 2 - B : Faça com que nossa classe professor herde da classe funcionário.

import Employee from './employee';
import Subject from './subject';

export default class Teacher extends Employee{
  private _subject!: Subject; // disciplina

  constructor(name: string, birthDate: Date, salary: number, subject: Subject) {
    super(name, birthDate, salary);
    
    this.subject = subject;
  }

  get subject(): Subject { return this._subject }

  set subject(value: Subject) {
    this._subject = value;
  }

  // Sobrescrita
  get enrollment(): string {
    return super._enrollment;
  }

  set enrollment(value: string) {
    if (value.length < 16) throw new Error('O registro do professor deve possuir pelo menos 16 caracteres');

    this._enrollment = value;
  }

  generateEnrollment(): string {
    return 'regTeacher' + Math.floor(Math.random() * ( 1000000 - 100000) + 100000) // Math.random() * (max - min) + min
  }
}