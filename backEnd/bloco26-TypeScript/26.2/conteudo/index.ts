import * as typeAlias from './typeAlias';

console.log('------- Type Alias ----------');
console.log(`tem asas, pena, e bico: ${typeAlias.itsBird({pena: true, bico: true, asas: true})}`);
console.log(`tem asas, mas não tem pena, nem bico: ${typeAlias.itsBird({pena: false, bico: false, asas: true})}`);
console.log();

typeAlias.makeSum({x:5, y:7});
console.log();

typeAlias.Address({rua:'Aquidaban', numero: 404, bairro: 'Perdizes'});
console.log();