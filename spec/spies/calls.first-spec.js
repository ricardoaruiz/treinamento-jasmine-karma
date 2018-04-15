/**
 * O "calls.first" retorna os dados da primeira chamada do 
 * método do spy.
 * 
 * Seria o mesmo que acessar o primeiro elemento (posição 0)
 * da lista contida em "calls.all"
 */
describe('Spies - calls.first', () => {

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

    it('Deve demonstrar o uso do calls.first', () => {
        //Chamadas ao método a ser testado.
        let res1 = Calculadora.somar(1, 2);
        let res2 = Calculadora.somar(1, 3);
        
        // retorna os dados da última chamada realizada.
        let retorno = Calculadora.somar.calls.first();

        // pega os dados da última chamada realizada
        expect(retorno.object).toEqual(Calculadora);
        expect(retorno.args).toEqual([1,2]);
        expect(retorno.returnValue).toEqual(3);
    });

});