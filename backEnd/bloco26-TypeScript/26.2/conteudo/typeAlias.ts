type passaro = {
  pena: boolean;
  bico: boolean;
  asas: boolean;
}

export function itsBird(p: passaro) {
  if (p.pena === true && p.bico === true && p.asas === true) return 'é um pássaro';
  return 'não é um pássaro';
}