describe('Comparador (Matcher) toBeNull', () => {
 /* 
    - Realiza a comparação de um objeto como sendo 'null'

    - Usamos 'null' para dizer que uma variável não possui um valor.

    - O valor 'null' se diferencia de 'undefined' pelo fato de 'null' ser
      um tipo e 'undefined' ser uma variável ainda não definida.
 */

    it('Deve validar o uso do toBeNull', () => {

        let n1 = null;
        let n2 = undefined;
        let n3;
        let n4 = NaN;
        let n5 = 'teste';

        expect(n1).toBeNull();
        
        expect(n2).not.toBeNull();
        expect(n3).not.toBeNull();
        expect(n4).not.toBeNull();
        expect(n5).not.toBeNull();

    });

});