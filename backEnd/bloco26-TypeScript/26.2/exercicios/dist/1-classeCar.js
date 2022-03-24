"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = exports.Direction = exports.Doors = exports.Color = void 0;
var Color;
(function (Color) {
    Color["black"] = "preta";
    Color["white"] = "branca";
    Color["red"] = "vermelha";
    Color["silver"] = "prata";
})(Color = exports.Color || (exports.Color = {}));
var Doors;
(function (Doors) {
    Doors["motorista"] = "do motorista";
    Doors["passageiro"] = "do passageiro";
    Doors["atrasMotorista"] = "atr\u00E1s do motorista";
    Doors["atrasPassageiro"] = "atr\u00E1s do passageiro";
})(Doors = exports.Doors || (exports.Doors = {}));
var Direction;
(function (Direction) {
    Direction["direita"] = "a direita";
    Direction["esquerda"] = "a esquerda";
})(Direction = exports.Direction || (exports.Direction = {}));
class Car {
    constructor(brand, color, doors) {
        this._brand = brand;
        this._color = color;
        this._doors = doors;
    }
    honk() {
        return 'O carro buzinou';
    }
    openTheDoor(porta) {
        return `abriu a porta ${porta}`;
    }
    closeTheDoor(porta) {
        return `fechou a porta ${porta}`;
    }
    turnOn() {
        return `ligou o carro`;
    }
    turnOff() {
        return `desligou o carro`;
    }
    speedUp() {
        return `aumentou a velocidade do carro`;
    }
    speedDown() {
        return `diminuiu a velociade do carro`;
    }
    stop() {
        return `parou o carro`;
    }
    turn(direcao) {
        return `${direcao}`;
    }
}
exports.Car = Car;
