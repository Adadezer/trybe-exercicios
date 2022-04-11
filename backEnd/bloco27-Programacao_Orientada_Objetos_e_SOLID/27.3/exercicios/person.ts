/* Exercício 1 : A classe pessoa no nosso sistema hoje é uma classe comum,
  podendo ser instanciada, ou seja, conseguimos criar novas pessoas diretamente,
  porém isso não faz sentido, já que nossa classe pessoa é apenas uma abstração
  para ser herdada por outras classes do sistema como estudante e professor.
  Refatore nossa classe pessoa de forma que não possamos mais criar diretamente instâncias
  de pessoa, somente das classes que herdam dela.
*/

export default abstract class Person {
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