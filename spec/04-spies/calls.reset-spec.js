/**
 * O "calls.reset" serve para limpar a lista com os dados
 * das chamadas dos métodos de um spy.
 * 
 * Pode ser útil quando tiver suites aninhadas ou mesmo
 * precisar restaurar o valor padrão das chamadas.
 */
describe('Spies - calls.reset', () => {

    // Objeto para teste
    var Calculadora = {
        somar : function (n1, n2) {
            return n1 + n2;
        }
    };

    beforeAll( () => {
        //Faz o método original ser chamado.
        spyOn(Calculadora, 'somar').and.callThrough();
    });

    it('Deve demonstrar o uso do calls.reset', () => {
        //Chamadas ao método a ser testado.
        let res1 = Calculadora.somar(1, 2);
        let res2 = Calculadora.somar(1, 3);

        expect(Calculadora.somar.calls.any()).toBeTruthy();

        Calculadora.somar.calls.reset();

        expect(Calculadora.somar.calls.any()).toBeFalsy();
    });

});