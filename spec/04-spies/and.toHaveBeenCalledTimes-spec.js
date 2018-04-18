/**
 * toHaveBeenCalledTimes serve para verificar quantas vezes um método
 * do spy foi executado.
 * 
 * toHaveBeenCalledTimes possui o parâmetro que informa o número de vezes
 * que é esperado que o método tenha sido chamado.
 */
describe('Spies - toHaveBeenCalledTimes', () => {

    var Calculadora = {
        somar : (n1, n2) => {
            return n1 + n2;
        }
    };

    beforeAll( () => {
        spyOn(Calculadora, 'somar');
    });

    it('Deve chamar o método somar duas vezes', () => {
        Calculadora.somar(1, 1);
        Calculadora.somar(1, 2);
        expect(Calculadora.somar).toHaveBeenCalledTimes(2);
    });

});