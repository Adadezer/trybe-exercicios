"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const length = __importStar(require("./length"));
const mass = __importStar(require("./mass"));
const capacity = __importStar(require("./capacity"));
const area = __importStar(require("./area"));
const volume = __importStar(require("./volume"));
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
console.log('---- 3 -----');
console.log(`1 Quilolitro tem ${capacity.convert(1, 'kl', 'l')}l`);
console.log(`1 Hectolitro tem ${capacity.convert(1, 'hl', 'l')}l`);
console.log(`1 Decalitro tem ${capacity.convert(1, 'dal', 'l')}l`);
console.log(`1 Litro tem ${capacity.convert(1, 'l', 'l')}l`);
console.log(`1 Decilitro tem ${capacity.convert(1, 'dl', 'l')}l`);
console.log(`1 Centilitro tem ${capacity.convert(1, 'cl', 'l')}l`);
console.log(`1 Mililitro tem ${capacity.convert(1, 'ml', 'l')}l`);
console.log();
console.log('---- 4 -----');
console.log(`1 Quilômetro quadrado tem ${area.convert(1, 'km', 'm')}m²`);
console.log(`1 Hectômetro quadrado tem ${area.convert(1, 'hm', 'm')}m²`);
console.log(`1 Decâmetro quadrado tem ${area.convert(1, 'dam', 'm')}m²`);
console.log(`1 Metro quadrado tem ${area.convert(1, 'm', 'm')}m²`);
console.log(`1 Decímetro quadrado tem ${area.convert(1, 'dm', 'm')}m²`);
console.log(`1 Centímetro quadrado tem ${area.convert(1, 'cm', 'm')}m²`);
console.log(`1 Milímetro quadrado tem ${area.convert(1, 'mm', 'm')}m²`);
console.log();
console.log('---- 5 -----');
console.log(`1 Quilômetro cúbico tem ${volume.convert(1, 'km', 'm')}m³`);
console.log(`1 Hectômetro cúbico tem ${volume.convert(1, 'hm', 'm')}m³`);
console.log(`1 Decâmetro cúbico tem ${volume.convert(1, 'dam', 'm')}m³`);
console.log(`1 Metro cúbico tem ${volume.convert(1, 'm', 'm')}m³`);
console.log(`1 Decímetro cúbico tem ${volume.convert(1, 'dm', 'm')}m³`);
console.log(`1 Centímetro cúbico tem ${volume.convert(1, 'cm', 'm')}m³`);
console.log(`1 Milímetro cúbico tem ${volume.convert(1, 'mm', 'm')}m³`);
console.log();
