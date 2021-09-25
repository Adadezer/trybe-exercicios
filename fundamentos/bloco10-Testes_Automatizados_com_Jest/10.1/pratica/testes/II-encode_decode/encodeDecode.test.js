const encodeDecode = require('../../exercicios/II-encode_decode/encodeDecode');

describe('Para as funções encode e decode crie os seguintes testes:', () => {
    it('Teste se encode e decode são funções', () => {
        expect(typeof encodeDecode.encode).toBe('function');
        expect(typeof encodeDecode.decode).toBe('function');
    });

    it('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
        expect(encodeDecode.encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5');
    });

    it('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente', () => {
        expect(encodeDecode.decode('1, 2, 3, 4, 5')).toBe('a, e, i, o, u');
    });

    it('Teste se as demais letras/números não são convertidos para cada caso', () => {
        expect(encodeDecode.encode('bcdfgh')).toBe('bcdfgh');
        expect(encodeDecode.decode('9876')).toBe('9876');
    });

    it('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
        expect(encodeDecode.encode('hi there!').length).toBe(9);
        expect(encodeDecode.decode('hi there!').length).toBe(9);
    });
});