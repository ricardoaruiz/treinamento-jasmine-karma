/**
 * O "jasmine.arrayContaining" serve para verificar se
 * determinados valores existem em um array.
 * 
 * Ele recebe como parâmetro um array com os valores
 * a serem verificados
 */
describe('Objeto Jasmine - jasmine.arrayContaining', () => {

    var numeros;

    beforeAll( () => {
        numeros = [1,2,3,5,7,11];
    });

    it('Deve demonstrar o uso do jasmine.arrayContaining', () => {
        expect(numeros).toEqual(jasmine.arrayContaining([1]));
        expect(numeros).toEqual(jasmine.arrayContaining([2,3]));
        expect(numeros).not.toEqual(jasmine.arrayContaining([15,21]));
    });

});