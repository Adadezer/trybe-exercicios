// Crie um type union que represente os estados físicos da matéria: líquido, sólido ou gasoso.

export function retornaEstado(em: "liquido" | "solido" | "gasoso") {
  return em;
}

// Crie um type union que represente o documento identificador de uma pessoa que pode receber valores numéricos ou texto. Ex: “123.567.890-12” ou 123456789012.

export function retornaCPF(cpf: number | string){
  return cpf;
}

// Crie um type union que represente sistemas operacionais: linux, mac os ou windows.

export function sistemasOperacionais(so: 'linux' | 'mac' | 'windows') {
  return so;
}

// Crie um type union que represente as vogais do alfabeto.
export function vogais(v: 'A' | 'E' | 'I' | 'O' | 'U') {
  return v;
}