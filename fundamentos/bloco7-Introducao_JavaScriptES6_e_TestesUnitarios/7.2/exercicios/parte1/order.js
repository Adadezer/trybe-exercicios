// Parte I
// Para os exercícios a seguir, use o seguinte código.

const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
        street: 'Rua das Flores',
        number: '389',
        apartment: '701',
    },
    order: {
        pizza: {
            marguerita: {
                amount: 1,
                price: 25,
            },
            pepperoni: {
                amount: 1,
                price: 20,
            }
        },
        drinks: {
            coke: {
                type: 'Coca-Cola Zero',
                price: 10,
                amount: 1,
            }
        },
        delivery: {
            deliveryPerson: 'Ana Silveira',
            price: 5,
        }
    },
    payment: {
        total: 60,
    },
};

// Agora você vai fazer alguns exercícios de fixação.

// 1. Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".

// . Note que o parâmetro da função já está sendo passado na chamada da função.

const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.

    return `Olá ${order.order.delivery.deliveryPerson}, entrega para ${order.name}, Telefone: ${order.phoneNumber}, ${order.address.street}, nº ${order.address.number}, AP: ${order.address.apartment}`
    
}
console.log(customerInfo(order));

// 2. Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."

// . Modifique o nome da pessoa compradora.
// . Modifique o valor total da compra para R$ 50,00.

const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    order.name = 'Luiz Silva';
    order.payment.total = 50;
    const saboresPizza = Object.keys(order.order.pizza);

    return `Olá ${order.name}, o total do seu pedido de ${saboresPizza[0]}, ${saboresPizza[1]} e ${order.order.drinks.coke.type} é R$ ${order.payment.total},00`
}

console.log(orderModifier(order));