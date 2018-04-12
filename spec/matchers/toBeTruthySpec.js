describe('Comparador (Matcher) toBeTruthy', () => {

    /*
     - Realiza uma comparação dizendo se uma variável ou objeto
     possui um valor válido.

     - Um valor é considerado valido caso ele possua um valor
     diferente de 'false', '0', '', 'undefined', 'null' ou 'NaN'

     - Deve ser utilizado quando a verificação abordar valores
     inválidos distintos, baseados nas operações citadas acima.

     - Prefira usar 'toBeFalsy' ao invés de 'not.toBeTruthy' 
     para deixar o código mais fácil de compreender.
    */

    it('Deve validar o uso do toBeTruthy', () => {

        let n0 = 'teste';
        let n1 = false;
        let n2 = 0;
        let n3 = '';
        let n4 = undefined;
        let n5 = null;
        let n6 = NaN;
        let n7;

        expect(n0).toBeTruthy();
        expect(true).toBeTruthy();
        expect("string não vazia").toBeTruthy();

        expect(n1).not.toBeTruthy();
        expect(n2).not.toBeTruthy();
        expect(n4).not.toBeTruthy();
        expect(n5).not.toBeTruthy();
        expect(n6).not.toBeTruthy();
        expect(n7).not.toBeTruthy();

    });

});