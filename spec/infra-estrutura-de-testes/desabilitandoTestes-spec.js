describe('Infra de testes - desabilitando testes', () => {

    var contador = 0;

    /**
     * Uma suite pode ser desabilitada a qualquer momento renomeando a função
     * "describe" para "xdescribe"
     * 
     * Todos os testes contidos dentro da suite desabilitada serão ignorados
     * e não serão exibidos no relatório de execução
     */
    beforeEach( () => {
        contador++;
    });

    it('Deve incrementar o contador para um', () => {
        expect(contador).toEqual(1);
    });

    xit('Deve incrementar o contatdor para dois', () => {
        expect(contador).toEqual(2);
    })

})