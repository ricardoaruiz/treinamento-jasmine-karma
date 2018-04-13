describe('Falha manual em testes "fail"', () => {

    /**
     * Falha manual permite interromper um teste lançando um erro.
     * 
     * O Jasmine possui a função "fail" para falhar manualmente um teste.
     * 
     * Utilizamos a falha manual para certificar que uma operação não
     * desejada não seja executada.
     */
    it('Validar o uso da função fail', () => {

        let operacao = (executar, callback) => {
            if(executar) {
                callback();
            }
        }

        operacao(false, () => {
            fail('não deve executar a função de callback');
        })

    });

});