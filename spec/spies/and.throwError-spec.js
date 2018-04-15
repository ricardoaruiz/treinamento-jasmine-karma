/**
 * and.throwError serve para informar ao spy que determinado método
 * deve lançar uma exceção ao ser executado.
 * 
 * and.throwError deve ser aplicado ao objeto spy
 * 
 * and.throwError recebe como parâmetro uma string contendo
 * a mensagem de erro a ser lançada.
 */
describe('Spies - and.throwError', () => {

    var Calculadora = {
        somar : (n1, n2) => {
            return n1 + n2;
        }
    }

    beforeAll( () => {
        spyOn(Calculadora, "somar").and.throwError("Erro");
    })

    it('Deve verificar que o método somar lançou uma exceção', () => {
        expect( () => {Calculadora.somar(1,1) }).toThrowError("Erro");
    });

});