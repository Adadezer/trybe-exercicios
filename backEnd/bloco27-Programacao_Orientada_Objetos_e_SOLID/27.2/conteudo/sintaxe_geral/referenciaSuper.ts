// Com base no final do primeiro exercício de fixação.

class SuperclassSup {
  public isSuper: boolean;
  
  constructor() {
    this.isSuper = true;
  }

  public sayHelloSuP() {
    console.log('Olá mundo!');
  }
}

class SubclassSup extends SuperclassSup {
  public isSuper: boolean;
  
  constructor() { // No construtor da Subclass , o atributo isSuper deve ser setado como false . Você vai precisar utilizar o super .
    super();
    this.isSuper = false;
  }
} 

const myFunctionSup = (objeto: SuperclassSup) => {
  objeto.sayHelloSuP();

  // Dentro da função que recebe um objeto da Superclass como parâmetro, cheque o valor do atributo isSuper e imprima no console "Super!" se for true e "Sub!" se for false ;
  if (objeto.isSuper) {
    console.log('Super!');
  } else {
    console.log('Sup!');
  }
}


const objSuperclassSup = new SuperclassSup();
const objSubclassSup = new SubclassSup(); 


myFunctionSup(objSuperclassSup);
myFunctionSup(objSubclassSup);