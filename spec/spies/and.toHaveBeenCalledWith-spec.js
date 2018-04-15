/**
 * toHaveBeenCalledWith serve para verificar com quais parâmetros
 * um método do spy foi chamado
 * 
 * toHaveBeenCalledWith recebe como parâmetro os valores da chamada do método
 * do spy separados por vírgula.
 */
describe('Spies - toHaveBeenCalledWith', () => {

    var Calculadora = {
        somar : (n1, n2) => {
            return n1 + n2;
        }
    };

    beforeAll( () => {
        spyOn(Calculadora, 'somar');
    });

    it('Deve chamar o método com os parâmetros válidos', () => {
        Calculadora.somar(1, 1);
        Calculadora.somar(1, 2);
        expect(Calculadora.somar).toHaveBeenCalledWith(1,1);
        expect(Calculadora.somar).toHaveBeenCalledWith(1,2);
    });

});