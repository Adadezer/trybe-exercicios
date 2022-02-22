const { expect } = require('chai');

const sinon = require('sinon');
const connection = require('../../models/connection');

const MoviesModel = require('../../models/movieModel');

describe('Insere um novo filme no BD', () => {
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  }

  before(async () => {
    const execute = [{insertId: 3}]; // retorno esperado nesse teste
    sinon.stub(connection, 'execute').resolves(execute);
  });
  
   // Restauraremos a função `execute` original após os testes.
  after(async () => {
    connection.execute.restore();
  });
  
  describe('Quando é inserido com sucesso', () => {
    it('Retorna um objeto', async () => {
      const response = await MoviesModel.create(payloadMovie);
  
      expect(response).to.be.a('object')
    });
  
    it('Tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create(payloadMovie);
  
      expect(response).to.have.a.property('id')
    });
  });
});