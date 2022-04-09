export default class Subject {
  private _subject!: string;

  constructor(subjectName: string) {
    this.subject = subjectName;
  }

  get subject() { return this._subject }

  set subject(value: string) {
    if (value.length < 3 ) throw new Error('A disciplina tem que possuir no mínimo 3 caracteres');

    this._subject = value;
  }
}