/**
 * Observação o que foi feito aqui é só para efeito didático, pois não é garantido
 * que os testes serão executados sempre na mesma ordem, podendo afetar o resultado
 * esperado
 */

describe('Infra de testes - afterEach', () => {

    var contador = 0;

    beforeEach( () => {
        contador++;
    });

    /*
    - Função Javascript global do Jasmine que é executada depois de cada teste.
    - Por ser executada depois de cada teste, serve para reiniciar um status.
    - Pode também executar uma ação depois de cada teste.
    */
    afterEach( () => {
        contador = 0;
    });

    it('Deve garantir que o contador possui valor um', () => {
        expect(contador).toEqual(1);
    });

    it('Deve ainda garantir que o contador possui valor um', () => {
        expect(contador).toEqual(1);
    });

});