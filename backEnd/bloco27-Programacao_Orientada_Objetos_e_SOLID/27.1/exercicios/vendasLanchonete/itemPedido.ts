// O item do pedido deve conter o nome do pedido (ex. "Batatas fritas"; "Açaí") e o preço;

export default class ItemPedido {
  private _itemPedido: string;
  private _preco: number;

  constructor(item: string, preco: number) {
    this._itemPedido = item;
    this._preco = preco;
  }

  get itemPedido() {
    return this._itemPedido;
  }

  set itemPedido(value: string) {
    this._itemPedido = value;
  }

  get preco() {
    return this._preco;
  }

  set preco(value: number) {
    this._preco = value;
  }
}