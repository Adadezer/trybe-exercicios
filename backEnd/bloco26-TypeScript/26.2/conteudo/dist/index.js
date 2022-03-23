"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeAlias = __importStar(require("./typeAlias"));
const typeUnion = __importStar(require("./typeUnion"));
const classes = __importStar(require("./classes"));
console.log('------- Type Alias ----------');
console.log(`tem asas, pena, e bico: ${typeAlias.itsBird({ pena: true, bico: true, asas: true })}`);
console.log(`tem asas, mas não tem pena, nem bico: ${typeAlias.itsBird({ pena: false, bico: false, asas: true })}`);
console.log();
typeAlias.makeSum({ x: 5, y: 7 });
console.log();
typeAlias.Address({ rua: 'Aquidaban', numero: 404, bairro: 'Perdizes' });
console.log();
console.log('------- Type Union ----------');
console.log(`o estado da matéria é: ${typeUnion.retornaEstado('solido')}`);
console.log();
console.log(`o CPF pode ser em formato string: ${typeUnion.retornaCPF('123.567.890-12')}`);
console.log(`o CPF pode ser em formato numero: ${typeUnion.retornaCPF(12356789012)}`);
console.log();
console.log(`o sistema operacinal é: ${typeUnion.sistemasOperacionais('linux')}`);
console.log();
console.log(`Qual a primeira vogal do seu nome? ${typeUnion.vogais('A')}`);
console.log();
console.log('------- Classes ----------');
classes.cachorro1.latir();
classes.cachorro2.latir();
console.log();
classes.casa1.informar();
classes.casa2.informar();
console.log();
classes.voo1.infoVoo();
classes.voo2.infoVoo();
