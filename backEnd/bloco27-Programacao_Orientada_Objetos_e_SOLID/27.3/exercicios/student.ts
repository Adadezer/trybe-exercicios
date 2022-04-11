// Exercício 2 : Refatore nossa classe de pessoa estudante para que ela herde da nossa classe pessoa.

import Person from "./person";
import Enrollable from './enrollable';

export default class Student extends Person implements Enrollable{
  private _enrollment!: string; // matricula  // private _enrollment: string = String();
  private _examsGrades: number[] = []; // notas de provas
  private _worksGrades: number[] = []; // notas de trabalhos

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    
    this.enrollment = this.generateEnrollment();
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

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  set examsGrades(value : number[]) {
    if (value.length > 4) throw new Error('o estudante deve possuir no máximo 4 notas de prova');

    this._examsGrades = value;
  }

  get worksGrades(): number[] {
    return this._worksGrades;
  }

  set worksGrades(value: number[]) {
    if (value.length > 2) throw new Error('o estudante deve possuir no máximo 2 notas de trabalho');

    this._worksGrades = value;
  }

  sumGrades(): number {
    const exams = this.examsGrades.reduce((curr, acc) => {return curr + acc}, 0);
    const works = this._worksGrades.reduce((curr, acc) => {return curr + acc}, 0);
    const sum = exams + works;
    return sum;
  }

  sumAverageGrade(): number {
    const sumGrades = this.sumGrades();
    const divider = this.examsGrades.length + this.worksGrades.length;

    return Math.round(sumGrades / divider); // Math.round() arredonda o valor para o inteiro mais proximo
  }
}