/**
 * createSpy é uma função global Javascript do Jasmine.
 * 
 * Serve para criar um spy do zero
 * 
 * Ele possui todos os atributos de um objeto comun
 * 
 * Recebe como parâmetro o nome da função a ser criado o spy
 * 
 * Deve ser utilizado quando precisa de um objeto que não se tem
 * acesso direto a ele.
 * 
 * createSpy possui a limitação de não permitir implementar o método
 * declarado assim como somente permite a criação de um método.
 */
describe("Spies - createSpy", () => {

    var somar;

    beforeAll( () => {
        somar = jasmine.createSpy("somar");
    });

    it("Deve demonstrar o uso do jasmine.createSpy", () => {
        somar(1, 2);
        expect(somar).toHaveBeenCalled();
        expect(somar).toHaveBeenCalledWith(1, 2);
    });

});