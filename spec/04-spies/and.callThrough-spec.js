/**
 * and.callTrough serve para informar o spy que o método original
 * deve ser executado.
 * 
 * Deve ser aplicado ao objeto spy
 * 
 * Nesse caso o método original será executado e todos os recursos
 * do spy serão mantidos e estarão disponíveis para verificação.
 */
describe('Spies - and.callTrough', () => {

    var Calculadora = {
        somar : (n1, n2) => {
            return n1 + n2;
        },
        subtrair: (n1, n2) => {
            return n1 - n2;
        }
    };

    beforeAll( () => {
        spyOn(Calculadora, 'somar').and.callThrough();
        spyOn(Calculadora, 'subtrair');
    });

    it('Deve executar o método executar original', () => {
        expect(Calculadora.somar(1,1)).toEqual(2);
        expect(Calculadora.subtrair(1,1)).toBeUndefined();
        
    });

});