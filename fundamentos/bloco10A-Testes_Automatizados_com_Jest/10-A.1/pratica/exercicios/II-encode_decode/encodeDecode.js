function encode(str) {
  const objEnc = {a: 1, e: 2, i: 3, o: 4, u: 5 }
  const enc = [...str].map(element => (objEnc[element]) ? objEnc[element] : element).join('');
  return enc
}
// console.log(`Encode: ${encode('hi there!')}`);
// console.log(typeof encode('hi there!'));

/* lógica: 
- na variavel enc passo a string como parâmetro, transformo ela em array usando '[]' e com o spread operator espalho ela;

- com o map em cada elemento, vejo se a chave obj[a] existe, se existir me retorna 1, se não,me retorna o elemento (a letra)

- com o join eu transformo esse array num string*/

function decode (str) {
  const objDesco = {1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u'}
  const deco = [...str].map(element => objDesco[element] ? objDesco[element] : element).join('');
  return deco;
}
// console.log(`Decode: ${decode('h3 th2r2!')}`);

module.exports = {encode, decode};