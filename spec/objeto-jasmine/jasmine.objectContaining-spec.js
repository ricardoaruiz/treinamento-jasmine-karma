/**
 * O "jasmine.objectContaining" serve para verificar se
 * determinada entrada (chave ou valor) existe em um objeto.
 * 
 * Ele recebe como parâmetro o bloco a ser verificado em um objeto.
 */
describe('Objeto Jasmine - jasmine.objectContaining', () => {

    var carro;

    beforeAll( () => {
        carro = {
            "ano" : 2017
        }
    });

    it('Deve demonstrar o uso do jasmine.objectContaining', () => {
        expect(carro).toEqual(jasmine.objectContaining({
            "ano" : 2017
        }));

        expect(carro).not.toEqual(jasmine.objectContaining({
            "ano" : 2016
        }));
    });

});