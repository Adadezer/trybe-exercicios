// Crie uma interface cujo objeto represente um Automóvel.
interface Automovel {
  nome: string;
  marca: string;
  cor: string;
  ligar(): string;
}

export const carro: Automovel = {
  nome: 'Strada',
  marca: 'Fiat',
  cor: 'Vermelho',
  ligar(): string {
    return `o ${this.nome} ${this.cor} foi ligado`
  }
}


// Crie uma interface cujo objeto represente um Felino.
interface Felino {
  especie: string;
  subfamilia: string;
  rugir(): string;
}

export const leao: Felino = {
  especie: 'Leão',
  subfamilia: 'Pantherinae',
  rugir(): string {
    return `o ${this.especie} rugiu`
  }
}


// Crie uma interface cujo objeto represente uma Aeronave.
interface Aeronave {
  companhia: string;
  modelo: string;
  decolar(): string;
}

export const aviao: Aeronave = {
  companhia: 'Azul',
  modelo: '12 Embraer 190',
  decolar(): string {
    return `o avião ${this.modelo} da ${this.companhia} acabou de decolar`
  }
}