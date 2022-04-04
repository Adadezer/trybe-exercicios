/* O pedido deve conter o cliente, os itens consumidos,
  a forma de pagamento (ex: "cartão", "dinheiro")
  e o percentual em decimal de desconto para o pedido (ex: 0.1 para 10%, 0.3 para 30%),
  o pedido pode ou não possuir desconto.
*/

import Cliente from './cliente';
import ItemPedido from './itemPedido';

class Pedido {
  private _cliente: Cliente;
  private _itensPedido: ItemPedido[];
  private _formaPag: 'dinheiro' | 'cartão';
  private _desconto?: 0 | 10 | 30;

  constructor(cliente: Cliente, itensPedido: ItemPedido[], formaPagamento: 'dinheiro' | 'cartão', desconto?: 0 |10 | 30 ) {
    this._cliente = cliente;
    this._itensPedido = itensPedido;
    this._formaPag = formaPagamento;
    this._desconto = desconto;
  }

  get clientes() {
    return this._cliente;
  }

  get itensPedido() {
    return this._itensPedido
  }

  get formaPagamento() {
    return this._formaPag;
  }

  get desconto() {
    if (this._desconto) {
      return this._desconto;
    }

    return this._desconto = 0;
  }

  set desconto(value: number) {
    const decimal = value / 100;
    console.log('decimal: ', decimal);
    if (this._desconto) {
      this._desconto -= decimal
    }
  }

  /*
    Agora vamos adicionar às nossas classes do exercício anterior os comportamentos.
    A classe que representa o pedido deverá ter dois métodos:
    - um que calcula o total do pedido
    - um que calcula o total aplicando o valor de desconto.
  */

  totalPedido() {
    const total = this.itensPedido.reduce((curr, acc) => { return curr + acc.preco }, 0);
    console.log('o total do pedido do cliente ', this._cliente.nome, 'é: ', total);
  }

  descontoPedido() {
    const totalPedido = this.itensPedido.reduce((curr, acc) => { return curr + acc.preco }, 0);

    if (this._desconto) {
      const descPedido = (totalPedido * this._desconto) / 100;
      console.log('o total do pedido do cliente ', this._cliente.nome, '(com desconto) é: ', descPedido);
    } else {
      const descPedido = totalPedido;
      console.log('o total do pedido do cliente ', this._cliente.nome, 'é: ', descPedido);
    }
  }
}

const cliente1 = new Cliente('João');
const item1Pedido1 = new ItemPedido('Batata Frita', 5);
const item2Pedido1 = new ItemPedido('Açai', 10);

const cliente2 = new Cliente('Maria');
const item1Pedido2 = new ItemPedido('feijoada', 35);
const item2Pedido2 = new ItemPedido('Açai', 10);


const pedido1 = new Pedido(cliente1, [item1Pedido1, item2Pedido1], 'cartão');
const pedido2 = new Pedido(cliente2, [item1Pedido2, item2Pedido2], 'dinheiro', 30);

pedido1.totalPedido();
pedido2.descontoPedido();

console.log(pedido1);
console.log(pedido2);

