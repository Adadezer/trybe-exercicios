const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../models/connection');
const MoviesModel = require('../../models/movieModel');

describe('Insere um novo filme no BD', () => {
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  }

  before(async () => {
    const execute = [{ insertId: 1 }];

    sinon.stub(connection, 'execute').resolves(execute);
  })

  after(async () => {
    connection.execute.restore();
  })

  describe('quando é inserido com sucesso', async () => {

    it('retorna um objeto', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.be.a('object')
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.have.a.property('id')
    });

  });
});

describe('Retorna o filme com o id passado', () => {
  describe('caso o filme exista', async () => {
    
    before(async () => {

      sinon.stub(MoviesModel, 'getById').resolves({
        id: 1,
        title: 'Capitao America',
        directedBy: 'Marvel Studios',
        realeaseYear: 2010,
      })
    });

    after(() => {
      MoviesModel.getById.restore();
    })

    it('retorna um objeto', async () => {
      const response = await MoviesModel.getById(1);
  
      expect(response).to.be.a('object');
    });

    it('o objeto não pode estar vazio', async () => {
      const response = await MoviesModel.getById(1);

      expect(response).to.be.not.empty;
    });

    it(`o objeto retornado possui as propriedades
    "id", "title", "directedBy", "realeaseYear"`, async () => {

      const response = await MoviesModel.getById(1);

      expect(response).to.include.all.keys('id', 'title', 'directedBy' ,'realeaseYear');
    });
  });
});