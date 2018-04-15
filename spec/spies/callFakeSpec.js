/**
 * and.callFake serve para definir uma nova implementação 
 * para um método de um spy.
 * 
 * and.callFake deve ser aplicado ao objeto spy
 * 
 * and.callFake recebe como parâmetro uma funçao com a nova
 * implementaçao a ser executada quando o método for chamado.
 */
describe('Spies - and.callFake', () => {

    var Calculadora = {
        somar : (n1, n2) => {
            return n1 + n2;
        },
        subtrair : (n1, n2) => {
            return n1 - n2;
        }
    };

    beforeAll( () => {
        spyOn(Calculadora, 'somar').and.callFake( (n1, n2) => {
            return n1 + n2 + 10;
        });
        spyOn(Calculadora, 'subtrair');
    });

    it('Deve validar se o método somar está retornando a soma mais dez', () => {
        expect(Calculadora.somar(1,1)).toEqual(12);
    });

});