/* Para Fixar
  Utilizando o mesmo código dos exercícios de fixação anteriores:
*/

// Altere a visibilidade dos atributos definidos na classe Tv para private .
class TVEncap {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo!: string;

  constructor(b: string, s: number, r: string, con: string[]) {
    this._brand = b;
    this._size = s;
    this._resolution = r;
    this._connections = con;
  }

  turnOn() {
    console.log(`TV ${this._brand}, tamanho: ${this._size} polegadas, resolução: ${this._resolution} pxl, conexões: ${this._connections}`);
  }

  /*
    Crie um método getter e um setter para o atributo _connectedTo , da classe Tv.

    O setter deverá verificar se o valor definido está entre as conexões disponíveis ( _connections ) e:
      Em caso positivo, definir este valor para o atributo _connectedTo ;
      Em caso negativo, imprimir no console a mensagem "Sorry, connection unavailable!"
  */
  get connectedTo() {
    return this._connectedTo;
  }

  set connectedTo(connection: string) {

      if (this._connections.includes(connection)) {
        this._connectedTo = connection;
        // console.log(this._connectedTo);
      } else {
        console.log('Sorry, connection unavailable!');
      }
      
  }
}

// Defina um valor para o atributo _connectedTo por meio do método setter criado e imprima seu valor.
const tvEncap1 = new TVEncap('LG', 29, '4k', ['HDMI', 'Ethernet']);
tvEncap1.turnOn();
tvEncap1.connectedTo = 'HDMI';
console.log('Connected to: ', tvEncap1.connectedTo);
