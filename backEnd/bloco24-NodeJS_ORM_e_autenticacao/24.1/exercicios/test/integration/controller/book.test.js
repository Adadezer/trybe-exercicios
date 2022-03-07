const chai = require('chai');
const { stub } = require('sinon');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

const app = require('../../../index');
const { Book } = require('../../../models');

describe('Busca todos os livros', () =>{
  describe('quando não existe nenhum livro', () => {
    const findAllStub = stub(Book, 'findAll');

    before(() => {
      findAllStub.resolves([]);
    });

    after(() => {
      findAllStub.restore();
    });

    it('chamo Book.findAll', async () => {
      await chai.request(app).get('/book');

      expect(Book.findAll.calledOnce).to.be.equals(true);
    });

    it('retorna status 200', async () => {
      const result = await chai.request(app).get('/book');
      expect(result.status).to.be.equals(200); 
    });

    it('se retorna um array vazio', async () => {
      const result = await chai.request(app).get('/book');
      expect(result.body).to.be.empty; 
    });
  });
});