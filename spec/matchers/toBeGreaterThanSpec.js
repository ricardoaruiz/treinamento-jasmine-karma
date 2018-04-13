describe('Comparador (Matcher) toBeGreaterThan', () => {

    /*
    - Compara se um valor numérico é maior do que outro valor.

    - Realiza a conversão para valor numérico antes da comparação
      podendo o valor ser passado em formato string

    - Prefira usar "toBeGreaterThan" ao invés de "not.toBeLessThan"
      para deixar o código de mais fácil compreensão.

    - Para valores iguais utilize o "toBeEqual"
    */
    it('Validar o uso do toBeGreaterThan', () => {
        let PI = 3.1415;

        expect(4).toBeGreaterThan(PI);
        expect('5').toBeGreaterThan(PI);

        expect(2).not.toBeGreaterThan(PI);
    });

});