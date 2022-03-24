import * as carro from './1-classeCar';

const carro1 = new carro.Car('Fiat',carro.Color.red , 3)
console.log(`
${carro1.honk()};
${carro1.openTheDoor(carro.Doors.passageiro)};
${carro1.closeTheDoor(carro.Doors.passageiro)};
${carro1.turnOn()};
${carro1.turnOff()};
${carro1.speedUp()};
${carro1.speedDown()};
${carro1.stop()};
virou ${carro1.turn(carro.Direction.direita)};
`);
