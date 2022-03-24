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

  honk(): void {
    console.log(`O carro buzinou`);
  }

  openTheDoor(porta: Doors): void {
    console.log(`abriu a porta ${porta}`);
  }

  closeTheDoor(porta: Doors): void {
    console.log(`fechou a porta ${porta}`);
  }

  turnOn(): void {
    console.log(`ligou o carro`);
  }

  turnOff(): void {
    console.log(`desligou o carro`);
  }

  speedUp(): void {
    console.log(`aumentou a velocidade do carro`);
  }

  speedDown(): void {
    console.log(`diminuiu a velociade do carro`);
  }

  stop(): void {
    console.log(`parou o carro`);
  }

  turn(direcao: Direction): void {
    console.log(`o carro virou ${direcao}`);
  }
}