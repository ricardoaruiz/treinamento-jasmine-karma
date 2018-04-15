describe('Comparador (Matcher) toThrow', () => {

    /**
     * Verifica se uma exceção é lançada por um método.
     * 
     * Não realiza a validação em detalhe o tipo da exceção lançada,
     * apenas certifica que um erro ocorreu na execução da função
     * 
     * Deve ser utilizado quando deseja apenas certificar que um erro
     * ocorreu, sem se preocupar com detalhes como tipo ou mensagem
     * de erro.
     */
    it('Validar o uso do toThrow', () => {

        /**
         * Essa função lança uma exceção pois a
         * variável 'numero' não foi definida
         */
        function multiplicar() {
            return numero * 10;
        }

        /**
         * Essa função não retorna exceção
         * @param {*} n1 
         * @param {*} n2 
         */
        function somar(n1, n2) {
            return n1 + n2;
        }

        expect(multiplicar).toThrow();
        expect(somar).not.toThrow();

    });

});