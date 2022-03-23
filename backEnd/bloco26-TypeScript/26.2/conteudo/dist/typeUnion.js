"use strict";
// Crie um type union que represente os estados físicos da matéria: líquido, sólido ou gasoso.
Object.defineProperty(exports, "__esModule", { value: true });
exports.vogais = exports.sistemasOperacionais = exports.retornaCPF = exports.retornaEstado = void 0;
function retornaEstado(em) {
    return em;
}
exports.retornaEstado = retornaEstado;
// Crie um type union que represente o documento identificador de uma pessoa que pode receber valores numéricos ou texto. Ex: “123.567.890-12” ou 123456789012.
function retornaCPF(cpf) {
    return cpf;
}
exports.retornaCPF = retornaCPF;
// Crie um type union que represente sistemas operacionais: linux, mac os ou windows.
function sistemasOperacionais(so) {
    return so;
}
exports.sistemasOperacionais = sistemasOperacionais;
// Crie um type union que represente as vogais do alfabeto.
function vogais(v) {
    return v;
}
exports.vogais = vogais;
