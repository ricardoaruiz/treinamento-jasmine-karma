/**
 * and.returnValues serve para informar ao spy quais os valores
 * a serem retornados por chamada.
 * 
 * and.returnValues aceita como parâmetro um ou mais valores, separados
 * por vírgula
 * 
 * Se o número de chamadas for maior do que o de valores a serem retornados
 * será retornado "undefined"
 * 
 * and.returnValues deve ser aplicado ao objeto spy.
 */
describe('Spies - and.returnValues', () => {

    var Calculadora = {
        somar : (n1, n2) => {
            return n1 + n2;
        },
        subtrair: (n1, n2) => {
            return n1 - n2;
        }
    };

    beforeAll( () => {
        spyOn(Calculadora, 'somar').and.returnValues(20,30);
        spyOn(Calculadora, 'subtrair');
    });

    it('Deve retornar 20 para primeira chamada e 30 para a segunda chamada do método somar', () => {
        expect(Calculadora.somar(1,2)).toEqual(20);
        expect(Calculadora.somar(1,2)).toEqual(30);
        expect(Calculadora.somar(1,2)).toBeUndefined();
    });

});