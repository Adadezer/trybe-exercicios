/* Quando a promise for resolvida com sucesso, retorne um array com 4 itens, sendo eles o resultado da divisão do numero resultante por 2, 3, 5 e 10. */

const promise = new Promise((resolve, reject) => { 
    const  myArr = [];
    for (let i = 0; i < 10; i += 1) {
        const numRandom = Math.floor(Math.random() * 50) + 1; 
        myArr.push(numRandom);
    }
    const quadrado = myArr.map(element => Math.pow(element, 2));
    const soma = quadrado.reduce((acc, curr) => acc + curr);

    if (soma < 8000) {
        resolve(soma);
    }
    reject(soma);
})
.then((param) => {
    const arrayDivisao = [2, 3, 5, 10];
    console.log(arrayDivisao.map((element) => element / param));
})
.catch((param) => console.log(`${param}: Promise rejeitada`))