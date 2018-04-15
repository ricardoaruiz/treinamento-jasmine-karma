/**
 * O "calls.mostRecent" retorna os dados da última chamada do 
 * método do spy.
 * 
 * Seria o mesmo que acessar o último elemento (quantidade de itens -1)
 * da lista contida em "calls.all"
 */
describe('Spies - calls.mostRecent', () => {

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

    it('Deve demonstrar o uso do calls.mostRecent', () => {
        //Chamadas ao método a ser testado.
        let res1 = Calculadora.somar(1, 2);
        let res2 = Calculadora.somar(1, 3);
        
        // retorna os dados da última chamada realizada.
        let retorno = Calculadora.somar.calls.mostRecent();

        // pega os dados da última chamada realizada
        expect(retorno.object).toEqual(Calculadora);
        expect(retorno.args).toEqual([1,3]);
        expect(retorno.returnValue).toEqual(4);
    });

});