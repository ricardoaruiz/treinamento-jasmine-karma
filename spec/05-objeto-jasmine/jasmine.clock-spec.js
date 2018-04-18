/**
 * O "jasmine.clock" serve para tornar síncrono as chamadas
 * do "setTimetou" e "setInterval".
 * 
 * Deve ser instalado antes da chamada com "jasmine.clock().install"
 * 
 * Deve ser removido ao término do teste/suite com "jasmine.clock().uninstall".
 * 
 * Executa a operação de chamada com "jasmine.clock().tick" recebendo
 * como parâmetro o número de milisegundos.
 */
describe('Objeto Jasmine - jasmine.clock', () => {

    var dobro;

    beforeEach( () => {
        jasmine.clock().install();
    });

    afterEach( () => {
        jasmine.clock().uninstall();
    });

    beforeAll( () => {
        dobro = jasmine.createSpy("dobro");
    });

    it('Deve demonstrar o uso do jasmine.clock com o setTimeout', () => {
        setTimeout( () => {
            dobro(10);
        }, 1000);

        // O tempo do tick deve ser maior ou igual a definida no setTimeout
        jasmine.clock().tick(1000);

        expect(dobro).toHaveBeenCalled();
    });

    it('Deve demonstrar o uso do jasmine.clock com o setInterval', () => {
        setInterval( () => {
            dobro(10);
        }, 1000);

        jasmine.clock().tick();

        expect(dobro).toHaveBeenCalled();
    });

});