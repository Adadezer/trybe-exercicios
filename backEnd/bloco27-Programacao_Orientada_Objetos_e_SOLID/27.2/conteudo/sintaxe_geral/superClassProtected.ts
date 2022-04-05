// Com base no exemplo do exercício anterior:

class SuperclassP {
  public isSuper: boolean;
  
  constructor() {
    this.isSuper = true;
  }

  protected sayHello() { // Mude a visibilidade do método sayHello de public para protected .
    console.log('Olá mundo!');
  }
}

class SubclassP extends SuperclassP {
  public sayHello2(): void { // Crie, na Subclass , um método público chamado sayHello2 .
    this.sayHello(); // Chame o método sayHello dentro do método sayHello2 .
  }
}

// Faça a função receber não mais um objeto da Superclass , mas sim da Subclass .
const myFunctionP = (objeto: SubclassP) => {
  objeto.sayHello2(); // Ao mudar a visibilidade, o compilador (ou o vs code) vai mostrar um erro. Conserte esse erro utilizando o novo método sayHello2 .
}


const objSuperclassP = new SuperclassP();
const objSubclassP = new SubclassP(); 


// myFunction(objSuperclass); // Comente a chamada da função passando o objeto da Superclass .
myFunctionP(objSubclassP);