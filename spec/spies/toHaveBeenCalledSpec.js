/**
 * toHaveBeenCalled serve para informar se um método do spy
 * foi executado ao menos uma vez.
 * 
 * toHaveBeenCalled não possui parâmetros.
 */
describe('Spies - toHaveBeenCalled', () => {

    var Calculadora = {
        somar : (n1, n2) => {
            return n1 + n2;
        }
    };

    beforeAll( () => {
        spyOn(Calculadora, 'somar');
    });

    it('Deve chamar o método somar ao menos uma vez', () => {
        Calculadora.somar(1, 1);
        expect(Calculadora.somar).toHaveBeenCalled();
    });

});