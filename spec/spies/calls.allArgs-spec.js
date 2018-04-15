/**
 * O "calls.allArgs" retorna uma lista com todos os argumentos
 * de todas as chamadas aos métodos de um spy.
 * 
 * Ele não recebe nenhum argumento como parâmetro.
 * 
 * Prefira utilizar o "calls.argsFor" quando precisar
 * verificar um item em específico.
 */
describe('Spies - calls.allArgs', () => {

    var Calculadora = {
        somar : (n1, n2) => {
            return n1 + n2;
        }
    };

    beforeAll( () => {
        spyOn(Calculadora, 'somar');
    });

    it('Deve demonstrar o uso do calls.allArgs', () => {
        Calculadora.somar(1, 2);
        Calculadora.somar(1, 3);
        expect(Calculadora.somar.calls.allArgs()).toEqual([ [1, 2], [1, 3] ]);
    });

});