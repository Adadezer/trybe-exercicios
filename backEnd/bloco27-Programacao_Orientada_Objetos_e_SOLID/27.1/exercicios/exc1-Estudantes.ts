/* Exercício 1:
  Vamos modelar algumas partes de um software de uma escola.
  Escreva uma classe cujos objetos representarão estudantes matriculadas em uma disciplina.
  
  Cada objeto dessa classe deve conter os seguintes dados:
  - matrícula,
  - nome,
  - 4 notas de prova,
  - 2 notas de trabalho.
*/

class Estudantes {
  private _matricula: number;
  private _nome: string;
  private _notasProvas: number[];
  private _notasTrabalhos: number[];

  constructor(matricula: number, nome: string) {
    this._matricula = matricula;
    this._nome = nome;
    this._notasProvas = [];
    this._notasTrabalhos = [];
  }

  get matricula() {
    return this._matricula;
  }

  get nome() {
    return this._nome;
  }

  get nProvas(): number[] {
    return this._notasProvas;
  }

  set nProvas(value: number[]) {
    if (value.length === 4) {
      this._notasProvas = value;
    } else {
      console.log('esperado 4 notas de prova');
      console.log();
    }
  }

  get nTrabalhos(): number[] {
    return this._notasTrabalhos;
  }


  set nTrabalhos(value: number[]) {
    if (value.length === 2) {
      this._notasTrabalhos = value;
    } else {
      console.log('esperado 2 notas de trabalho');
      console.log();
    }
  }
}

const estudante1 = new Estudantes(12345, 'joao');
estudante1.nProvas = [5,8,7];
estudante1.nTrabalhos = [10];
console.log(estudante1);