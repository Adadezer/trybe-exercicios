/* Exercício 1:
  Crie uma classe Car cuja o objeto representará um carro.
  
  Propriedades :
  Deve conter uma propriedade do tipo string chamada brand que representa a marca.
  Deve conter uma propriedade do tipo enum chamada color que representa a cor.
  A cor pode ser: preta, branca, vermelha ou prata.
  Deve conter uma propriedade do tipo number chamada doors que representa a quantidade de portas.
  
  Comportamentos :
  Deve possuir um método chamado honk que aciona a buzina do carro.
  Deve possuir um método chamado openTheDoor que recebe como parâmetro uma porta do tipo enum e abre.
  Deve possuir um método chamado closeTheDoor que recebe como parâmetro uma porta do tipo enum e fecha.
  Deve possuir um método chamado turnOn que liga o carro.
  Deve possuir um método chamado turnOff que desliga o carro.
  Deve possuir um método chamado speedUp que acelera o carro.
  Deve possuir um método chamado speedDown que reduz a velocidade do carro.
  Deve possuir um método chamado stop que para o carro.
  Deve possuir um método chamado turn que recebe uma direção do tipo enum e vira o carro.
*/

export enum Color {
  black = 'preta',
  white = 'branca',
  red = 'vermelha',
  silver = 'prata',
}

export enum Doors {
  motorista = 'do motorista',
  passageiro = 'do passageiro',
  atrasMotorista = 'atrás do motorista',
  atrasPassageiro = 'atrás do passageiro',
}

export enum Direction {
  direita = 'a direita',
  esquerda = 'a esquerda',
}

export class Car {
  _brand: string;
  _color: Color;
  _doors: number;

  constructor(brand: string, color: Color, doors: number) {
    this._brand = brand;
    this._color = color;
    this._doors = doors;
  }

  honk(): string {
    return 'O carro buzinou';
  }

  openTheDoor(porta: Doors): string {
    return `abriu a porta ${porta}`;
  }

  closeTheDoor(porta: Doors): string {
    return `fechou a porta ${porta}`;
  }

  turnOn(): string {
    return `ligou o carro`;
  }

  turnOff(): string {
    return `desligou o carro`;
  }

  speedUp(): string {
    return `aumentou a velocidade do carro`;
  }

  speedDown(): string {
    return `diminuiu a velociade do carro`;
  }

  stop(): string {
    return `parou o carro`;
  }

  turn(direcao: Direction): string {
    return `${direcao}`;
  }
}