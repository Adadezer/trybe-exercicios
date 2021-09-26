function techList(tecnologias, name) {

  if (tecnologias.length <= 0) {
    return 'Vazio!';
  }

  return tecnologias.sort().reduce((acc, element) => {
    const obj = {
      tech: element,
      name: name,
    }
    acc.push(obj);
    return acc;
  }, []);
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Adadezer'));

// const techList = (tecnologias, name) => tecnologias.length === 0 ? 'Vazio!' : tecnologias.sort().map((tech) => ({tech, name}));
module.exports = techList;