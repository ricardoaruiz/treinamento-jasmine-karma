describe('Comparador (Matcher) toBeLessThan', () => {

    /*
    - Compara se um valor numérico é menor que outro valor.

    - Realiza a conversão para valor numérico antes da comparação,
      podendo o valor se passado em formato texto.

    - Prefira usar 'toBeGreaterThan' ao invés de 'not.toBeLessThan', para
      deixar o código de mais fácil compreensão.

    - Para valores iguais utilize o 'toBeEqual'
    */
    it('Validar o uso do toBeLessThan', () => {

        let n1 = 10;
        let n2 = '20';

        expect(n1).toBeLessThan(n2);

    });

});