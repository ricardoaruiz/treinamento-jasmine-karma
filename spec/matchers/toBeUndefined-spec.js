describe('Comparador (Matcher) toBeUndefined', () => {
    /* 
    - Realiza a comparação de um objeto como sendo 'undefined'

    - Prefira usar o 'toBeDefined' ao invés do 'not.toBeDeUndefined' para 
      deixar o código de mais fácil compreensão
    */
    it('Deve validar o uso do toBeUndefined', () => {

        let n1;
        let n2 = undefined;
        let n3 = false;

        expect(n1).toBeUndefined();
        expect(n2).toBeUndefined();

        expect(n3).not.toBeUndefined();
        expect(null).not.toBeUndefined();

    });

});