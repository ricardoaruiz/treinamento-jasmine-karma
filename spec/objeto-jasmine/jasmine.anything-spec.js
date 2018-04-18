/**
 * O "jasmine.anything" serve para verificar se um objeto
 * ou variável é diferente de "null" ou "undefined".
 * 
 * Ele é muito similar ao "jasmine.any" com a diferença
 * de que ele não verifica o tipo do objeto ou variável.
 * 
 * Pode ser utilizado em spies para certificar que um valor
 * foi passado como parâmetro.
 */
describe('Objeto Jasmine - jasmine.anything', () => {

    var dobro;

    beforeAll( () => {
        dobro = jasmine.createSpy("dobro");
    });

    it('Deve demonstrar o uso do jasmine.anything', () => {
        dobro(10);

        expect(dobro).toHaveBeenCalledWith(jasmine.anything());
        expect({}).toEqual(jasmine.anything());
    });

});