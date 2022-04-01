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

  turnOn() {
    console.log(`TV ${this._brand}, tamanho: ${this._size} polegadas, resolução: ${this._resolution} pxl, conexões: ${this._connections}`);
  }
}

const tv1 = new TV('LG', 29, '4k', ['HDMI', 'Ethernet']);
tv1.turnOn();