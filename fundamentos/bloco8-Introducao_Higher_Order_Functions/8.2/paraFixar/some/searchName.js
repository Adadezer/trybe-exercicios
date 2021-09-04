// Para fixar

// Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false , use some ;

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  //Adicione seu código aqui

    return arr.some(element => element === name);

    //   const result = arr.some((element) => element === name);

    //   if (result) {
    //     return `No array existe o nome ${name}`
    //   } else {
    //     return `No array não existe o nome ${name}`
    //   }
}

console.log(hasName(names, 'Ana'));