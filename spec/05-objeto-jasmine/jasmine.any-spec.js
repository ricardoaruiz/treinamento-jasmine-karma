/**
 * O "jasmine.any" serve para verificar se um valor
 * é de um determinado tipo.
 * 
 * Pode ser usado para comparar valores reais ou valores
 * utilizados em spies.
 * 
 * Em spies é muito útil quando deseja verificar se um método
 * foi chamado com um argumento de determinado tipo sem se importar
 * com o seu valor real.
 */
describe('Objeto Jasmine - jasmine.any', () => {

    var dobro;

    beforeAll( () => {
        dobro = jasmine.createSpy("dobro");
    });

    it('Deve demonstrar o uso do jasmine.any', () => {
        dobro(10);
        expect(dobro).toHaveBeenCalledWith(jasmine.any(Number));
    });

});