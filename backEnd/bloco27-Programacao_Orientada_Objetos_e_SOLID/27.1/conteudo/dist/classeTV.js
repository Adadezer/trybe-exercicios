"use strict";
class TV {
    constructor(b, s, r, con) {
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
