describe('Comparador (Matcher) toBeFalsy', () => {

    /*
    - Realiza uma comparação dizendo se uma variável ou objeto
    possui um valor inválido.

    - Um valor será considerado inválido caso seja 'false', '0',
    '', 'undefined', 'null' ou 'NaN'.

    - Deve ser utilizado quando a verificação abordar valores inválidos
    distintos baseados nas opções citadas acima.

    - Prefira usar 'toBeTruthy' ao invés de usar 'not.toBeFalsy' para 
    deixar o código de mais fácil compreensão.
    */
    it('Deve validar o uso do toBeFalsy', () => {

        expect(null).toBeFalsy();
        expect(undefined).toBeFalsy();
        expect('').toBeFalsy();
        expect(false).toBeFalsy();
        expect(NaN).toBeFalsy();
        expect(0).toBeFalsy();

        expect(true).not.toBeFalsy();
        expect('string não vazia').not.toBeFalsy();

    });

})