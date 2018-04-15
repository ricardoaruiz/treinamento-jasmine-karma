/**
 * and.returnValue serve para informar ao spy o valor
 * de retorno de determinado método
 * 
 * and.returnValue deve ser aplicado ao objeto spy
 */
describe('Spies - and.returnValue', () => {

    var Calculadora = {
        somar : (n1, n2) => {
            return n1 + n2;
        },
        subtrair: (n1, n2) => {
            return n1 - n2;
        }
    };

    beforeAll( () => {
        spyOn(Calculadora, 'somar').and.returnValue(20);
        spyOn(Calculadora, 'subtrair');
    });

    it('Deve retornar 20 para o método somar', () => {
        expect(Calculadora.somar(1,2)).toEqual(20);
    });

});