/* Exercício 2:
  Vamos agora utilizar a classe Car que criamos no exercício anterior.
  Uma pessoa motorista de aplicativo ira fazer uma viagem para pegar sua nova pessoa passageira.
  Ele então entra em seu volkswagen gol prata de 4 portas, liga seu carro e começa o trajeto:

  Siga em frente;
  Em 600 metros vire a esquerda;
  Vire a esquerda;
  Em 200 metros na rotatória pegue a segunda saída a direita;
  Mantenha em frente pelos próximos 1,2 quilômetros;
  Em 300 metros vire a direita;
  Vire a direita;
  Em 400 metros você chegará ao seu destino;
  Você chegou ao seu destino.

  Pronto a pessoa motorista para a pessoa passageira entra pela porta de trás do lado do carona,
  e a viagem continua.

  Siga em frente;
  Em 300 metros vire a direita;

  Vire a direita;
    Mantenha em frente pelos próximos 2 quilômetros;
    Em 200 metros vire a esquerda;
    Vire a esquerda;
    Em 400 metros vire a direita;
    Vire a direita;
    Em 100 metros você chegará ao destino.
    Você chegou ao destino.
    A pessoa passageira desce do veículo e a pessoa motorista segue para a próxima corrida.
    Agora você deve desenvolver um script capaz de automatizar todo o cenário descrito.
*/


import * as carro from './1-classeCar';

const carro2 = new carro.Car('volkswagen gol',carro.Color.silver , 4)

console.log(`o motorista entra em seu ${carro2._brand}, ${carro2._color}, ${carro2._doors}`);
console.log(`
  Siga em frente
  Em 600 metros vire ${carro2.turn(carro.Direction.esquerda)}
  Vire ${carro2.turn(carro.Direction.esquerda)}
  Em 200 metros na rotatória pegue a segunda saída ${carro2.turn(carro.Direction.direita)}
  Mantenha em frente pelos próximos 1,2 quilômetros
  Em 300 metros vire ${carro2.turn(carro.Direction.direita)}
  Vire ${carro2.turn(carro.Direction.direita)}
  Em 400 metros você chegará ao seu destino;
`);


// carro2.honk();
// carro2.openTheDoor(carro.Doors.passageiro);
// carro2.closeTheDoor(carro.Doors.passageiro);
// carro2.turnOn();
// carro2.turnOff();
// carro2.speedUp();
// carro2.speedDown();
// carro2.stop();
// carro2.turn(carro.Direction.direita);