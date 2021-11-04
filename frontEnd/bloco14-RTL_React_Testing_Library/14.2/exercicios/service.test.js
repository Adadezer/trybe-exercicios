const service = require('./service');

// . Desenvolva os testes para essa função.
// . Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada. 

test("Teste se a função foi chamada", () => {
    service.randomNumber = jest.fn();
    service.randomNumber();
    expect(service.randomNumber).toHaveBeenCalled();
});

// . Utilize o mock e defina o retorno padrão como 10.
test("Teste qual seu retorno", () => {
    service.randomNumber = jest.fn().mockReturnValue(10);
    expect(service.randomNumber()).toBe(10);
});

test("Teste quantas vezes foi chamada", () => {
    service.randomNumber = jest.fn();
    service.randomNumber();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
});