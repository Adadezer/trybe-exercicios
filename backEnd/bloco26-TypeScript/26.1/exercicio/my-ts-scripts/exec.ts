var readlineSync = require('readline-sync');

function makeError(unity: string) {
  throw new Error(`A unidade ${unity} não é uma unidade válida.`)
}

function convert(valor :number, unidadeBase :string, unidadeCoversao :string) {
  const unidades = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];

  if (!unidades.includes(unidadeBase)) makeError(unidadeBase); // se a unidade base não for válida lançamos um erro
    if (!unidades.includes(unidadeCoversao)) makeError(unidadeCoversao); // se a unidade para a conversão não for válida lançamos um erro

  const indiceUnBase = unidades.indexOf(unidadeBase);
  const indiceUnConversao = unidades.indexOf(unidadeCoversao);

  const diferencaUnidades = indiceUnConversao - indiceUnBase;
  
  return valor * Math.pow(10, diferencaUnidades) // base, expoente
}

export function execLength() {
  const valor = readlineSync.question('Qual é o valor para converter?');
  const unBase = readlineSync.question('Qual é a unidade base?');
  const unConversao = readlineSync.question('Qual unidade o valor base será convertido?');

  const unidadeMedida = ['Quilômetro', 'Hectômetro', 'Decâmetro', 'Metro', 'Decímetro', 'Centímetro', 'Milímetro'];
  const unidades = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
  let medida = '';

  switch (unBase) {

    case unidades[0]:
      medida = unidadeMedida[0]
      break;

    case unidades[1]:
      medida = unidadeMedida[1]
        break;

    case unidades[2]:
      medida = unidadeMedida[2]
      break;

    case unidades[3]:
      medida = unidadeMedida[3]
      break;

    case unidades[4]:
      medida = unidadeMedida[4]
      break;

    case unidades[5]:
      medida = unidadeMedida[5]
      break;
      
    case unidades[6]:
      medida = unidadeMedida[6]
  }

  console.log(`1 ${medida} tem ${convert(valor, unBase, unConversao)}${unConversao}`);
}
  
  