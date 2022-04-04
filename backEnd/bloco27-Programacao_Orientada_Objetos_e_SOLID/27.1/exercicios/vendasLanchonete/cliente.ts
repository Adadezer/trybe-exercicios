// O cliente deverá conter o nome;

export default class Cliente {
  private _nome: string;

  constructor(nome: string) {
    this._nome = nome;
  }

  get nome() {
    return this._nome;
  }

  set nome(value: string) {
    if (value.length === 0) console.error('nome não pode ser vazio');

    this._nome = value;
  }
}