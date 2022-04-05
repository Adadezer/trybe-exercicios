// Crie uma classe chamada Superclass 

class Superclass {
  public isSuper: boolean; // A Superclass deve possuir um atributo público isSuper
  
  constructor() {
    this.isSuper = true; // isSuper deve ser setado como true na inicialização.
  }

  public sayHello() {
    console.log('Olá mundo!'); // A Superclass deve possuir um método público chamado sayHello , que deve imprimir um "Olá mundo!".
  }
}

class Subclass extends Superclass {} // Crie uma classe chamada Subclass que herda da Superclass .

const myFunction = (objeto: Superclass) => { // Crie uma função fora do escopo da Subclass que recebe um objeto da Superclass .
  objeto.sayHello(); // Dentro da função, chame o método sayHello do objeto passado como parâmetro.
}

// Crie um objeto da Superclass e outro da Subclass .
const objSuperclass = new Superclass();
const objSubclass = new Subclass(); 

// Chame a função 2 vezes, passando os objetos criados.
myFunction(objSuperclass);
myFunction(objSubclass);