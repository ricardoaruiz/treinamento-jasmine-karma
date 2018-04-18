describe('Comparador (Matcher) toThrowError', () => {

    /**
     * Veririca se uma exceção é lançada por um método.
     * 
     * Valida o tipo da exceção lançada.
     * 
     * Valida a mensagem de erro contida na exceção.
     * 
     * Suporta expressão regular na validação da mensagem de exceção.
     * 
     * Deve ser utilizada para maior controle do erro lançado.
     */
    it('Validar o uso do toThrowError', () => {

        /**
         * Soma os dois números informados desde que sejam maior que zero.
         * Caso sejam menor ou igual a zero sobe exceção TypeError.
         * @param {*} n1 
         * @param {*} n2 
         */
        let somar = (n1, n2) => {
            if(n1 <= 0 || n2 <= 0) {
                throw new TypeError('Os números devem ser maior que zero');
            }
            return n1 + n2;
        }

        //Valida se retornou uma exceção
        expect( () => {
            somar(0, 0);
        } ).toThrowError();

        //Valida a mensagem contida na exceção que retornou
        expect( () => {
            somar(0, 0);
        }).toThrowError('Os números devem ser maior que zero');

        //Valida a mensagem contida na exceção que retornou utilizando regex
        expect( () => {
            somar(0, 0);
        }).toThrowError(/maior que zero/);

        //Valida o tipo da exceção que retornou
        expect( () => {
            somar(0, 0);
        }).toThrowError(TypeError);

        //Valida o tipo da exceção que retornou e a mensagem contida.
        expect( () => {
            somar(0, 0);
        }).toThrowError(TypeError, 'Os números devem ser maior que zero');

        //Valida que não retornou exceção
        expect( () => {
            somar(1, 1);
        }).not.toThrowError();

    });

});