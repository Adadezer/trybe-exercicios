/* Utilize a estrutura a seguir nos exercícios dessa seção:

  - Character define os atributos básicos de um personagem de um videogame de luta,
  com o nome do personagem ( name ) e de seu movimento especial ( specialMove ):
  - DbCharacter estendo os atributos da classe Character
  para incluir aqueles existentes no banco de dados.
*/

interface CharacterT {
  nameT: string;
  specialMoveT: string;
}

interface DbCharacterT extends CharacterT {
  idT: number;
}

const dbT: DbCharacterT[] = [];

// 1- Crie uma interface chamada IModel que defina as operações básicas de um CRUD para a entidade Character .
interface IModelT {
  create: (character: CharacterT) => Promise<DbCharacterT>;
  update: (id: number, character: CharacterT) => Promise<DbCharacterT>;
  delete: (id: number) => Promise<boolean>;
  getAll: () => Promise<DbCharacterT[]>;
  getById: (id: number) => Promise<DbCharacterT>;
}

// 2- Crie uma classe LocalDbModel que implemente a interface IModel .
class LocalDbModelT implements IModelT {

  async create(character: CharacterT) {
    const lastId = dbT.length > 0 ? dbT[dbT.length - 1].idT : 0;
    const newCharacter = { idT: lastId + 1, ...character };
    dbT.push(newCharacter);
    return newCharacter;
  };

  async update(id: number, character: CharacterT) {
    const idToUpdate = dbT.findIndex((char) => char.idT === id);

    if (idToUpdate < 0) throw new Error('Character not found');

    dbT[idToUpdate] = {...dbT[idToUpdate], ...character };

    return dbT[idToUpdate];
  }

  async delete(id: number) {
    const idToDelete = dbT.findIndex((character) => character.idT === id);
    if (idToDelete < 0) throw new Error('Character not found');

    const deletedItem = dbT.splice(idToDelete, 1);
    if (deletedItem.length > 0) return true;
    return false;
  };

  async getAll() {
    return dbT;
  }

  async getById(id: number) {
    const idToGet = dbT.findIndex((character) => character.idT === id);
    if (idToGet < 0) throw new Error('Character not found');
    return dbT[idToGet];
  }
}

// 3- Crie uma classe CharacterService que recebe como dependência em seu construtor uma instância do tipo LocalDbModel e a utilize em sua lógica de negócio.

/*
  class CharacterServiceT {
    constructor(readonly model: LocalDbModelT) {}

    async getAll() {
      const allCharacter = await this.model.getAll();
      return ({ status: 200, data: allCharacter });
    }

    async getById(id: number) {
      const character = await this.model.getById(id);
      return ({ status: 200, data: character });
    }

    async create(character: CharacterT) {
      const newCharacter = await this.model.create(character);
      return ({ status: 201, data: newCharacter });
    }

    async update(id: number, character: CharacterT) {
      const updatedCharacter = await this.model.update(id, character);
      return ({ status: 200, data: updatedCharacter });
    }

    async delete(id: number) {
      const deletedCharacter = await this.model.delete(id);
      return ({ status: 200, data: 'deletado o character: ' + deletedCharacter });
    }
  }
*/

// 4- Refatore CharacterService para que possa receber uma instância de qualquer classe que implemente a interface IModel .

class CharacterServiceT {
  constructor(readonly model: IModelT) {}

  async getAll() {
    const allCharacter = await this.model.getAll();
    return ({ status: 200, data: allCharacter });
  }

  async getById(id: number) {
    const character = await this.model.getById(id);
    return ({ status: 200, data: character });
  }

  async create(character: CharacterT) {
    const newCharacter = await this.model.create(character);
    console.log('character criado: ', newCharacter.nameT);
    return ({ status: 201, data: newCharacter });
  }

  async update(id: number, character: CharacterT) {
    const updatedCharacter = await this.model.update(id, character);
    console.log('character atualizado: ', updatedCharacter.nameT);
    return ({ status: 200, data: updatedCharacter });
  }

  async delete(id: number) {
    const deletedCharacter = await this.model.delete(id);
    console.log('character deletado:', deletedCharacter);
    return ({ status: 200, data: deletedCharacter });
  }
}

// 5- Crie uma classe MockedDbModel que implemente IModel com uma versão mock .
class MockDbModelT implements IModelT {
  async create(character: CharacterT) {
    console.log('character created');
    return { idT: 1, nameT: 'Peach', specialMoveT: 'Toad' };
  };

  async update(id: number, character: CharacterT) {
    console.log('character updated');
    return { idT: 1, nameT: 'Yoshi', specialMoveT: 'Egg Lay' };
  };

  async delete(id: number) {
    console.log('character deleted');
    return true;
  };

  async getAll() {
    return [
      { idT: 1, nameT: 'Samus', specialMoveT: 'Charge Shot' },
      { idT: 2, nameT: 'Kirby', specialMoveT: 'Inhale' }
    ];
  }

  async getById(id: number) {
    return { idT: 1, nameT: 'Mario', specialMoveT: 'Fireball' };
  }
}

// 6- Verifique que a classe CharacterService pode receber uma instância tanto de LocalDbModel como de MockedDbModel .

const A = new CharacterServiceT(new LocalDbModelT());
A.getAll().then(console.log);

A.create({nameT: 'adadezer', specialMoveT:'programar'});
A.create({nameT: 'iwazaki', specialMoveT:'codar'});

A.getById(2).then(console.log);

A.update(2, {nameT: 'suhita', specialMoveT:'codar'})
A.getById(2).then(console.log);

const B = new CharacterServiceT(new MockDbModelT());
B.getAll().then(console.log);