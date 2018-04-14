describe('Infra de testes', () => {

    var contador = 0;

    /* 
    - Função do Javascript global do Jasmine que é executada antes de cada teste.
    - Pode ser executada antes de cada teste, serve para inicializar ou reiniciar um status.
    - Pode também executar uma ação antes de cada teste.

    - Nesse caso antes de cada teste o contador é incrementado em um.
    */
    beforeEach( () => {
        contador++;
    });

    it('Deve incrementar o contador para 1', () => {
        expect(contador).toEqual(1);
    });

    it('Deve incrementar o contatdor para 2', () => {
        expect(contador).toEqual(2);
    })

})