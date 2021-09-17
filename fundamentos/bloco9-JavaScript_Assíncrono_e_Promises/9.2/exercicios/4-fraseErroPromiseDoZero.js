/* Quando a Promise for rejeitada, imprima, via console.log , a frase "É mais de oito mil! Essa promise deve estar quebrada!" */

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
.catch(() => console.log(`É mais de oito mil! Essa promise deve estar quebrada!`))