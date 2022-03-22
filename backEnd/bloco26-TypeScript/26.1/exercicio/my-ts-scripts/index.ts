import * as length from './length';
import * as mass from './mass';

console.log('---- 1 -----');
console.log(`1 Quilômetro tem ${length.convert(1, 'km', 'm')}m`);
console.log(`1 Hectômetro tem ${length.convert(1, 'hm', 'm')}m`);
console.log(`1 Decâmetro tem ${length.convert(1, 'dam', 'm')}m`);
console.log(`1 Metro tem ${length.convert(1, 'm', 'm')}m`);
console.log(`1 Decímetro tem ${length.convert(1, 'dm', 'm')}m`);
console.log(`1 Centímetro tem ${length.convert(1, 'cm', 'm')}m`);
console.log(`1 Milímetro tem ${length.convert(1, 'mm', 'm')}m`);
console.log();

console.log('---- 2 -----');
console.log(`1 Quilograma tem ${mass.convert(1, 'kg', 'g')}g`);
console.log(`1 Hectograma tem ${mass.convert(1, 'hg', 'g')}g`);
console.log(`1 Decagrama tem ${mass.convert(1, 'dag', 'g')}g`);
console.log(`1 Grama tem ${mass.convert(1, 'g', 'g')}g`);
console.log(`1 Decigrama tem ${mass.convert(1, 'dg', 'g')}g`);
console.log(`1 Centigrama tem ${mass.convert(1, 'cg', 'g')}g`);
console.log(`1 Miligrama tem ${mass.convert(1, 'mg', 'g')}g`);
console.log();