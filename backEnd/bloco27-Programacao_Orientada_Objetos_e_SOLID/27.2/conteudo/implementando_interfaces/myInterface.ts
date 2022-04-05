// Crie uma interface chamada MyInterface .

interface MyInterface {
  myNumber: number; // MyInterface deve possuir um atributo myNumber do tipo number .
  myFunc(myParam: number): string; // MyInterface deve possuir um método myFunc , que recebe um parâmetro myParam do tipo number e retorna uma string
}

// Crie uma classe MyClass que implementa MyInterface

class MyClass implements MyInterface {
  constructor(public myNumber: number) { //Faça o atributo myNumber ser inicializado diretamente nos parâmetros do construtor da MyClass .
  }

  myFunc(myParam: number): string {
    return `a soma de myNumber com myParam é: ${this.myNumber + myParam}`; // Faça o método myFunc somar o myNumber com o myParam e retornar uma string qualquer que contenha a soma.
  }
}

// Crie um objeto da classe MyClass e o utilize acessando myNumber e chamando myFunc .

const objDeMyclass = new MyClass(3);
console.log('myNumber (parametro de Myclass): ', objDeMyclass.myNumber);
console.log(objDeMyclass.myFunc(7));


