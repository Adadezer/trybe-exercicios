// Exercício 1 : Crie uma nova classe cujos objetos representarão uma pessoa no nosso sistema.

export default class Person {
  private _name: string = String();
  private _birthDate: Date = new Date();

  constructor(name: string, birthDate: Date) {
    this.name = name;
    this.birthDate = birthDate;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.length < 3) throw new Error('o nome deve ter pelo menos 3 caracteres');
    
    this._name = value;
  }

  get birthDate() {
    return this._birthDate
  }

  static getAge(value: Date): number {
    const diff = Math.abs(new Date().getTime() - value.getTime()); // diferença em milissegundos entre a data atual e a data passada por parâmetro
    const yearMs = 31_536_000_000; // 1 ano = 31536000000 milissegundos
    return Math.floor(diff / yearMs);
  }

  set birthDate(value: Date) {
    if (value.getTime() > new Date().getTime()) {
      throw new Error('A data de nascimento não pode ser uma data no futuro.');
    }

    if (Person.getAge(value) > 120) throw new Error('A pessoa deve ter no máximo 120 anos.');

    this._birthDate = value;
  }
}