// Crie um type para um objeto que represente um pássaro.

type passaro = {
  pena: boolean;
  bico: boolean;
  asas: boolean;
}

export function itsBird(p: passaro) {
  if (p.pena === true && p.bico === true && p.asas === true) return 'é um pássaro';
  return 'não é um pássaro';
}

// Crie um type que represente uma função que recebe 2 valores numéricos e retorna a soma dos dois.

type soma = {
  x: number;
  y: number;
}

export function makeSum(s: soma) {
  console.log(`o valor da soma é ${s.x + s.y}`); 
}

// Crie um type para um objeto que represente um endereço.

type endereco = {
  rua: string;
  numero: number;
  bairro: string;
}

export function Address(e: endereco) {
  console.log(`Rua: ${e.rua} número ${e.numero}, bairro: ${e.bairro}`);
}