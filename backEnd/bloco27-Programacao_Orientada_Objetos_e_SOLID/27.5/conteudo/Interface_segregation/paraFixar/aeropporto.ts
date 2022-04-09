/* Para Fixar
  Analisando o código abaixo, o que deve ser modificado para que ele compreenda
  tanto o LSP (Liskov Substitution Principle, princípio de Substituição de Liskov)
  quanto ISP (Interface Segregation Principle, Princípio da Segregação de Interface)?
*/

// class Passageiro {
//   constructor (public nome:string, public cpf:number) { }
// }

// class ItemEnviado {
//   constructor (public nome:string, public id:number, public customerID:string) { }
// }

// class Voo {
//   constructor (public num:number, public passageiros:Passageiro[]) { }

//   Add(novoPassageiro:Passageiro): void {
//     this.passageiros .push(novoPassageiro); 
//   }

//   Remove(passageiroRemovido: Passageiro): void {
//     const index = this.passageiros.indexOf(passageiroRemovido, 0);
//     if (index > -1) {
//       this.passageiros.splice(index, 1);
//     }
//   }
// }

// class Companhia {
//   constructor (public nome:string, public voos:Voo[]) { }
//   NovoVoo(numVoo: number): void { }
//   AdicionarNoVoo(numVoo: number, Passageiro: Passageiro): void { }
//   RemoverDoVoo(numVoo: number, Passageiro: Passageiro): void { }
// }

// class CompanhiaAerea extends Companhia {
//   NovoVoo(numVoo: number): void {
//     const novoVoo = new Voo(numVoo, []);
//     this.voos.push(novoVoo);
//   }

//   AdicionarNoVoo(numVoo: number, passageiro: Passageiro): void {
//     const vooAtual = this.voos.find((v) => v.num == numVoo);
//     if (vooAtual) {
//       vooAtual.Add(passageiro);
//     }
//   }
//   RemoverDoVoo(numVoo: number, passageiro: Passageiro): void {
//     const vooAtual = this.voos.find((v) => v.num == numVoo);
//     if (vooAtual) {
//       vooAtual.Remove(passageiro);
//     }
//   }
// }

// class Transportadora extends Companhia {
//   NovoVoo(numVoo: number): void {
//     const novoVoo = new Voo(numVoo, []);
//     this.voos.push(novoVoo);
//   }

//   AddToFlight(numVoo: number, item:ItemEnviado | Passageiro): void {
//     const vooAtual = this.voos.find((v) => v.num == numVoo);
//     if (vooAtual) {
//       vooAtual.Add(item);
//     }
//   }
// }
// -----------------------------------------------------------------------------------------

class Passageiro {
  constructor (public nome:string, public cpf:number) { }
}

class Carga {
  constructor (public nome:string, public id:number, public customerID:string) { }
}

class Voo {
  // Primeiro, ajustamos o construtor da classe Voo para suportar tanto passageiros quanto cargas
  constructor (public num:number, public payload:(Passageiro | Carga)[]) { }

  // A função Add agora poderá adicionar tanto passageiros quanto cargas
  Add(newPayload:Passageiro | Carga): void {
    this.payload .push(newPayload); 
  }

  // De igual modo, a função Remove pode remover tanto passageiros quanto cargas
  Remove(passageiroRemovido: Passageiro): void {
    const index = this.payload.indexOf(passageiroRemovido, 0);
    if (index > -1) {
      this.payload.splice(index, 1);
    }
  }
}

class Companhia {
  constructor (public nome:string, public voos:Voo[]) { }

  // NovoVoo pode ser implementada aqui, já que sua funcionalidade se mantém em todas as subclasses
  NovoVoo(numVoo: number): void {
    const novoVoo = new Voo(numVoo, []);
    this.voos.push(novoVoo);
  }

  // Ajustes feitos na superclasse são transmitidos para as subclasses
  AdicionarNoVoo(numVoo: number, payload:Passageiro | Carga): void { }
  
  RemoverDoVoo(numVoo: number, payload:Passageiro | Carga): void { }
}

class CompanhiaAerea extends Companhia {
  NovoVoo(numVoo: number): void {
    const novoVoo = new Voo(numVoo, []);
    this.voos.push(novoVoo);
  }

  AdicionarNoVoo(numVoo: number, passageiro: Passageiro): void {
    const vooAtual = this.voos.find((v) => v.num == numVoo);
    if (vooAtual) {
      vooAtual.Add(passageiro);
    }
  }
  RemoverDoVoo(numVoo: number, passageiro: Passageiro): void {
    const vooAtual = this.voos.find((v) => v.num == numVoo);
    if (vooAtual) {
      vooAtual.Remove(passageiro);
    }
  }
}

class Transportadora extends Companhia {
  NovoVoo(numVoo: number): void {
    const novoVoo = new Voo(numVoo, []);
    this.voos.push(novoVoo);
  }

  AdicionarNoVoo(numVoo: number, item:Carga | Passageiro): void {
    const vooAtual = this.voos.find((v) => v.num == numVoo);
    if (vooAtual) {
      vooAtual.Add(item);
    }
  }
}