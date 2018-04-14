/**
 * Observação o que foi feito aqui é só para efeito didático, pois não é garantido
 * que os testes serão executados sempre na mesma ordem, podendo afetar o resultado
 * esperado
 */

describe('Infra de testes - beforeAll', () => {

    var contador = 0;

    /**
     * Função Javascript global do Jasmine que é executada uma única vez antes
     * da execução dos testes.
     * 
     * Por ser executada antes de todos os testes, serve para inicializar um status
     * ou criar objetos.
     */
    beforeAll( () => {
        contador = 10;
    });

    beforeEach( () => {
        contador++;
    })

     it('Deve garantir que o contador tenha valor 11', () => {
        expect(contador).toEqual(11);
     });

     it('Deve garantir que o contador tenha valor 12', () => {
         expect(contador).toEqual(12);
     })

});