/* Agora, um passo para trás: vamos fazer, passo a passo, uma Promise
Primeiramente, instancie uma Promise */

const promise = new Promise((resolve, reject) => {
    /* Dentro dela, você deve produzir um array com dez números aleatórios de 1 a 50 e elevá-los todos ao quadrado. */
    
    const  myArr = [];
    for (let i = 0; i < 10; i += 1) {
        const numRandom = Math.floor(Math.random() * 50) + 1; //math.floor pra arredondar pra baixo e impedir casas decimais. Ex: 2.59, com o floor o resultado seria somente 2, + 1 pq se o numero ter 0 soma 1 e da 1, se der 49 (q é o maximo), soma 1 e da 50
        myArr.push(numRandom);
    }
    const quadrado = myArr.map(element => Math.pow(element, 2));

    /* Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida. Caso contrário, ela deve ser rejeitada. */
    const soma = quadrado.reduce((acc, curr) => acc + curr);
    if (soma < 8000) {
        resolve(soma);
    }
    reject(soma);
})

/* Acresça um then , com um console.log('Promise resolvida') e um catch , com um console.log('Promise rejeitada') à Promise , só para que o código funcione e possamos ver o resultado. */
.then((param) => console.log(`${param}: Promise resolvida`))
.catch((param) => console.log(`${param}: Promise rejeitada`))