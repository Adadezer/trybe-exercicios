// Crie uma interface Logger .

interface Logger {
  log(param: string): void;
}

// Crie uma classe ConsoleLogger que implementa Logger .
class ConsoleLogger implements Logger {
  constructor() {}

  // Você deve imaginar como o método log deve ser implementado, né? 😁.
  log(param: string): void {
    console.log('log de ConsoleLogger 1: ', param);
  }
}

// Crie uma classe ConsoleLogger2 igual à classe anterior, apenas a título de exemplo.
class ConsoleLogger2 implements Logger {
  constructor() {}

  // Você deve imaginar como o método log deve ser implementado, né? 😁.
  log(param: string): void {
    console.log('log de ConsoleLogger 2: ', param); // No console.log dentro do método log , diferencie o ConsoleLogger2 do ConsoleLogger .
  }
}

// Crie uma interface Database 
interface Database {
  atr: Logger; // Database deve possuir um atributo do tipo Logger .
  save(key: string, value: string): void; // Database deve possuir um método save , que recebe dois parâmetros, key e value , ambos strings , e não retorna nada ( void ).
}

// Crie uma classe ExampleDatabase que implementa Database
class ExampleDatabase implements Database {

  // ExampleDatabase deve receber o Logger como parâmetro do construtor, e possuir como valor padrão um ConsoleLogger 
  constructor(public atr: Logger = new ConsoleLogger()) {}

  // Dentro do método save , chame a função log do Logger passado para o database para fazer o log dos parâmetros passados para a save
  save(key: string, value: string): void {
    this.atr.log(`Salvando o valor ${value} na chave ${key}`)
  }
}

// Crie um objeto de cada um dos Loggers
const consoleLogger1 = new ConsoleLogger();
const consoleLogger2 = new ConsoleLogger2();

// Crie três objetos da ExampleDatabase , cada um dos dois primeiros recebendo um dos Loggers , e o último não recebendo nenhum

const exDataBase1 = new ExampleDatabase(consoleLogger1);
const exDataBase2 = new ExampleDatabase(consoleLogger2);
const exDataBase3 = new ExampleDatabase();

// Utilize todos eles para salvar um conteúdo fictício
exDataBase1.save('chave1', 'valor1');
exDataBase2.save('chave2', 'valor2');
exDataBase3.save('chave3', 'valor3');
