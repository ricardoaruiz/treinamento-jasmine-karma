/**
 * O "calls.argsFor" armazena e retorna uma lista (array)
 * contendo os parâmetros utilizados em cada chamada do método
 * spy
 * 
 * Ele recebe como parâmetro o índice da chamada a ser retornada.
 * 
 * É bastante útil para validar se um método foi chamado com
 * os parâmetros corretos.
 */
describe('Spies - calls.argsFor', () => {

    var Calculadora = {
        somar : (n1, n2) => {
            return n1 + n2;
        }
    };

    beforeAll( () => {
        spyOn(Calculadora, 'somar');
    });

    it('Deve demonstrar o uso do calls.count', () => {
        Calculadora.somar(1, 2);
        Calculadora.somar(1, 3);
        expect(Calculadora.somar.calls.argsFor(0)).toEqual([1, 2]);
        expect(Calculadora.somar.calls.argsFor(1)).toEqual([1, 3]);
    });

});