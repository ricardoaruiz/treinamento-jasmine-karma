/**
 * O "calls.count" armazena e retorna o número de vezes
 * que um método do spy foi chamado.
 * 
 * Ele não possui parâmetros e retorna o número de chamadas
 * do método.
 */
describe('Spies - calls.count', () => {

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
        expect(Calculadora.somar.calls.count()).toEqual(2);
    });

});