/**
 * O "jasmine.stringMatching" serve para verificar por uma porção
 * de texto dentro de uma string.
 * 
 * Ele suporta o uso de expressões regulares.
 * 
 * Também pode ser utilizado com spies.
 * 
 * Recebe como parâmetro a porção de texto ou expressão
 * regular utilizada no teste.
 */
describe('Objeto Jasmine - jasmine.stringMatching', () => {

    var exibirTexto;

    beforeAll( () => {
        exibirTexto = jasmine.createSpy("exibirTexto");
    });

    it('Deve demonstrar o uso do jasmine.stringMatching', () => {
        exibirTexto("Curso de Jasmine");

        expect(exibirTexto).toHaveBeenCalledWith(
            jasmine.stringMatching('Jasmine')
        );

        //Regular expression
        expect(exibirTexto).toHaveBeenCalledWith(
            jasmine.stringMatching(/jasmine/i)
        );

        expect("Texto avulso").toEqual(jasmine.stringMatching("Texto"));
        //Regular expression
        expect("Texto avulso").toEqual(jasmine.stringMatching(/texto/i));
    });

});