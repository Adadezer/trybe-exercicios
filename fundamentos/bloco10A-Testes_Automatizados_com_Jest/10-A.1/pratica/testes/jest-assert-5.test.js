// Compare dois objetos para verificar se são idênticos ou não

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

describe ('Compare dois objetos para verificar se são idênticos ou não', () => {
    
  it('veja se o obj1 é igual ao obj2', ()=> {
      expect(obj1).toEqual(obj2);
  });

  it('veja se o obj2 é igual ao obj3', () => {
    expect(obj2).not.toEqual(obj3);
  });

  it('veja se o obj3 é igual ao obj1', () => {
    expect(obj3).not.toEqual(obj1);
  });
});