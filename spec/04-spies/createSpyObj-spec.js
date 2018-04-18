/**
 * createSpyObj é uma função global Javascript do Jasmine.
 * 
 * Serve para criar um "objeto" spy do zero.
 * 
 * Ele possui todos os atributos de um objeto comun.
 * 
 * Recebe como parâmetro o nome do objeto a ser criado assim
 * como seus métodos em formato de array.
 * 
 * Deve ser utilizado quando precisa de um objeto que não se tem
 * acesso direto a ele.
 * 
 * createSpyObj permite a utilização de todos os elementos "and."
 * estudados anteriormente.
 */
describe("Spies - createSpyObj", () => {

    var Calculadora;

    beforeAll( () => {
        Calculadora = jasmine.createSpyObj("calculadora", ["somar","subtrair"]);
        Calculadora.somar.and.returnValue(10);
    });

    it("Deve demonstrar o uso do jasmine.createSpyObj", () => {
        let retorno = Calculadora.somar(1,2);
        expect(Calculadora.somar).toHaveBeenCalled();
        expect(Calculadora.somar).toHaveBeenCalledWith(1, 2);
        expect(retorno).toEqual(10);
    });

});