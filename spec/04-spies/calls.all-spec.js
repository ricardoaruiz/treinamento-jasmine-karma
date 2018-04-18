/**
 * O "calls.all" contém e retorna toas as informações
 * de chamadas de um método spy.
 * 
 * As informações armazenadas são do tipo de objeto (object),
 * os parâmetros de chamada (args) e os valores de retorno
 * (returnValue).
 * 
 * Os itens acima são agrupados em uma lista e são referenciados
 * por número de chamada.
 */
describe('Spies - calls.all', () => {

    var Calculadora = {
        somar : function (n1, n2) {
            return n1 + n2;
        }
    };

    beforeAll( () => {
        //Faz o método original ser chamado.
        spyOn(Calculadora, 'somar').and.callThrough();
    });

    it('Deve demonstrar o uso do calls.all', () => {
        Calculadora.somar(1, 2);
        Calculadora.somar(1, 3);
        
        // retorna um array com os dados de todas as chamadas.
        let retorno = Calculadora.somar.calls.all();

        // pega os dados da segunda chamada realizada
        expect(retorno[1].object).toEqual(Calculadora);
        expect(retorno[1].args).toEqual([1,3]);
        expect(retorno[1].returnValue).toEqual(4);
    });

});