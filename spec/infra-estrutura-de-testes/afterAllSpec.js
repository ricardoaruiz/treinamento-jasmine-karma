/**
 * Observação o que foi feito aqui é só para efeito didático, pois não é garantido
 * que os testes serão executados sempre na mesma ordem, podendo afetar o resultado
 * esperado
 */

describe('Infra de testes - afterAll', () => {

    var contador = 0;

    beforeAll( () => {
        contador = 10;
    });

    /**
     * Função Javascript global do Jasmine que é executada uma única
     * vez depois da execução de todos os testes.
     * 
     * Por ser executada depois de todos os testes, serve para limpar
     * alguns status globais.
     */
    afterAll( () => {
        contador = 0;
    });

    it('Deve garantir que o contador possui valor 10', () => {
        expect(contador).toEqual(10);
    });

    it('Deve ainda garantir que o contador possui valor 10', () => {
        expect(contador).toEqual(10);
    });

});