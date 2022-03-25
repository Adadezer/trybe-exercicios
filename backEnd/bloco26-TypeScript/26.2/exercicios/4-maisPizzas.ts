// Agora crie:

import { PizzaComum, PizzaVegetariana, PizzaDoce } from './3-interface';

// 3 pizzas do tipo comum

const Pepperoni: PizzaComum= {
    flavor: 'Pepperoni',
    slices: 8
}

console.log(Pepperoni);

const Calabresa: PizzaComum= {
  flavor: 'Calabresa',
  slices: 4
}

console.log(Calabresa);

const Frango: PizzaComum= {
  flavor: 'Frango',
  slices: 6
}

console.log(Frango);


// 2 pizzas do tipo vegetariana

const Cogumelo: PizzaVegetariana = {
    flavor: 'Cogumelo',
    slices: 6
}

console.log(Cogumelo);

const Palmito: PizzaVegetariana = {
  flavor: 'Palmito',
  slices: 8
}

console.log(Palmito);


// 1 pizza do tipo doce.

const GoQue: PizzaDoce = {
    flavor: 'Goiabada com Queijo',
    slices: 4
}

console.log(GoQue);