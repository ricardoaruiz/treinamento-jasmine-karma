/**
 * Todo spy possui um atributo "calls" com informações sobre
 * suas chamadas
 * 
 * O "calls.any" serve para indicar se o método do spy foi chamado
 * ao menos uma vez
 * 
 * Ele não recebe parâmetros e retorna um valor booleano se 
 * ocorreu ou não a chamada ao menos uma vez.
 */
describe('Spies - calls.any', () => {

    var Calculadora = {
        somar : (n1, n2) => {
            return n1 + n2;
        }
    };

    beforeAll( () => {
        spyOn(Calculadora, 'somar');
    });

    it('Deve demonstrar o uso do calls.any', () => {
        Calculadora.somar(1, 2);
        expect(Calculadora.somar.calls.any()).toBeTruthy();
    });

});