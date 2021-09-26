function hydrate(str) {
  const bebidas = str.replace(/[^0-9]/g, '');
  const qtdCopos = [...bebidas].reduce((acc, element) => {
    return acc + parseInt(element, 10);
  }, 0);

  return (qtdCopos > 1) ? `${qtdCopos} copos de água` : `${qtdCopos} copo de água`;
}
console.log(typeof hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

/* lógica:
- const bebidas: pega somente os numeros da string - o replace substitui uma string pela outra, com o regex pego todo resultado q não é numero, e substituo por valor vazio

- const qtdCopos: com o spread operator coloco esses numeros num array e espalho eles, com o reduce transformo os numeros q são do tipo string, em inteiros, e em cada interação add no acuumulador*/

module.exports = hydrate;