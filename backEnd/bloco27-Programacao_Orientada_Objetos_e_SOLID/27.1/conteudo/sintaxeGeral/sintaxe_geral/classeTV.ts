/* Para Fixar
  Utilizando o que você já aprendeu até aqui, faça os seguintes exercícios:
  
  Crie uma classe chamada Tv, com os atributos:
  - brand : marca da TV;
  - size : tamanho em polegadas;
  - resolution : resolução da tela;
  - connections : conexões disponíveis(HDMI, Ethernet, etc.);
*/

class TV {
  _brand: string;
  _size: number;
  _resolution: string;
  _connections: string[];

  constructor(b: string, s: number, r: string, con: string[]) {
    this._brand = b;
    this._size = s;
    this._resolution = r;
    this._connections = con;
  }
 // Dentro da classe Tv, crie o método turnOn , que imprimirá os atributos inicializados no construtor.
  turnOn() {
    console.log(`TV ${this._brand}, tamanho: ${this._size} polegadas, resolução: ${this._resolution} pxl, conexões: ${this._connections}`);
  }
}

// Instancie um objeto a partir da classe Tv, chame o método turnOn para imprimir seus atributos.
const tv1 = new TV('LG', 29, '4k', ['HDMI', 'Ethernet']);
tv1.turnOn();