// find percorre toda a lista, e mostra o primeiro item q satisfaça a condição

// 2 - Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  // Adicione seu código aqui:

    return names.find((element) => element.length === 5);
}

console.log(findNameWithFiveLetters());