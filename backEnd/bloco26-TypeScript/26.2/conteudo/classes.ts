// Crie uma classe cujo objeto represente um Cachorro.
class Cachorro {
  _nome: string;
  _raca:string;

  constructor(nome: string, raca: string) {
    this._nome = nome;
    this._raca = raca;
  }

  latir(): void {
    console.log(`${this._nome} da raca ${this._raca} latiu`); 
  }
}

export const cachorro1 = new Cachorro('Bethoween', 'São Bernardo');
export const cachorro2 = new Cachorro('Lessie', 'Collie');


// Crie uma classe cujo objeto represente uma Casa.
class Casa {
  _comodos: number;
  _moradores: number;

  constructor(comodos: number, moradores: number) {
    this._comodos = comodos;
    this._moradores = moradores;
  }

  informar(): void {
    console.log(`A casa tem ${this._comodos} cômodos, e moram ${this._moradores} pessoas la dentro`);
  }
}

export const casa1 = new Casa(5, 4);
export const casa2 = new Casa(10, 8);

class Voo {
  _origem: string;
  _destino: string;
  _passageiros: number;

  constructor(origem: string, destino: string, passageiros: number) {
    this._origem = origem;
    this._destino = destino;
    this._passageiros = passageiros;
  }

  infoVoo(): void {
    console.log(`o voo com ${this._passageiros} passageiros sai de ${this._origem} com destino à ${this._destino}`);
  }
}

export const voo1 = new Voo('São Paulo', 'Brasília', 50);
export const voo2 = new Voo('Minas Gerais', 'Rio de Janeiro', 30);