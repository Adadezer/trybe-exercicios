// Crie uma classe abstrata Character que tenha os métodos abstratos talk(): void e specialMove(): void .

abstract class Character {

  abstract talk(): void;
  abstract specialMove(): void;
}

// Crie a classe concreta MeleeCharacter que estenda Character e sobrescreva os métodos abstratos dessa classe.
class MeleeCharacter extends Character {
  constructor (protected name: string) {
    super(); // "Construtores para classes derivadas devem conter uma chamada 'super'", acho q isso se deve à herança, o filho tem suas caracteristicas proprias, mas herdam tbm as do pai 
  }
  
  talk() { console.log(`${this.name} é da classe Melee`); };
  specialMove() { console.log(`${this.name} usou o movimento especial da classe Melee`);};
}

// Crie a classe concreta LongRangeCharacter que estenda Character e sobrescreva os métodos abstratos dessa classe.
class LongRangeCharacter extends Character {
  constructor (protected name: string) {
    super();
  }

  talk() { console.log(`${this.name} é da classe LongRange`); };
  specialMove() { console.log(`${this.name} usou o movimento especial da classe LongRange`);};
}

// Crie uma função que receba como parâmetro character: Character e chame os métodos talk e specialMove para apresentar o personagem.

const introduce = (character: Character) => {
  character.talk();
  character.specialMove();
}

const charMelee = new MeleeCharacter('guerreiro');
const charLongRage = new LongRangeCharacter('mago');

introduce(charMelee);
introduce(charLongRage);
