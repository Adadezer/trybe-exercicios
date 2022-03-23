import * as typeAlias from './typeAlias';
import * as typeUnion from './typeUnion';

console.log('------- Type Alias ----------');
console.log(`tem asas, pena, e bico: ${typeAlias.itsBird({pena: true, bico: true, asas: true})}`);
console.log(`tem asas, mas não tem pena, nem bico: ${typeAlias.itsBird({pena: false, bico: false, asas: true})}`);
console.log();

typeAlias.makeSum({x:5, y:7});
console.log();

typeAlias.Address({rua:'Aquidaban', numero: 404, bairro: 'Perdizes'});
console.log();

console.log('------- Type Union ----------');
console.log(`o estado da matéria é: ${typeUnion.retornaEstado('solido')}`);
console.log();

console.log(`o CPF pode ser em formato string: ${typeUnion.retornaCPF('123.567.890-12')}`);
console.log(`o CPF pode ser em formato numero: ${typeUnion.retornaCPF(12356789012)}`);
console.log();

console.log(`o sistema operacinal é: ${typeUnion.sistemasOperacionais('linux')}`);
console.log();

console.log(`Qual a primeira vogal do seu nome? ${typeUnion.vogais('A')}`);