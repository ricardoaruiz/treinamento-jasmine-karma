/**
 * Observação o que foi feito aqui é só para efeito didático, pois não é garantido
 * que os testes serão executados sempre na mesma ordem, podendo afetar o resultado
 * esperado
 */

 /**
  * Suites podem ser aninhadas e conter outras suites dentro delas.
  * 
  * As funções específicas como "beforeAll" ou "afterAll" serão executadas
  * antes e depois de toso os testes em ordem.
  * 
  * Tome cuidado ao aninhar suites para não tornar o teste complexo e de difícil
  * compreensão.
  */
describe('Infra de testes - suites aninhadas', () => {

    var contadorExterno = 0;

    beforeEach( () => {
        contadorExterno++;
    });

    it('Deve conter 1 para contadorExterno', () => {
        expect(contadorExterno).toEqual(1);
    });

    describe('Suite interna', () => {

        var contadorInterno = 0;

        beforeEach( () => {
            contadorInterno++;
        });

        it('Deve validar o valor dos contadores', () => {
            expect(contadorInterno).toEqual(1);
            expect(contadorExterno).toEqual(2);
        });

    })

});