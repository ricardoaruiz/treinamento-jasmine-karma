/**
 * Spies são objestos falsos utilizados quando queremos manipular
 * algum retorno que não faça parte do teste em si.
 * 
 * Spies são utilizados para isolar somente o bloco de código que
 * estamos testando.
 * 
 * Spies somente poderão ser criados dentro dos blocos "describe"
 * e "it".
 * 
 * Spies são removidos ao término da execução.
 */

 /**
  * spyOn serve para criar um mock (objeto falso) a ser utilizado nos testes.
  * 
  * Um objeto spy contém uma série de atributos que serão estudados ao logo do 
  * capítulo.
  * 
  * A função spyOn recebe como parâmetros o nome do objeto e do método a serem
  * utilizados como mock.
  */
describe('Spies - spyOn', () => {

    var Calculadora = {
        somar: (n1, n2) => {
            return n1 + n2;
        }
    };
    
    beforeAll( () => {
        /**
         * Ao criarmos um spie o método criado será "undefined" até que digamos a
         * ele o que deve ser feito.
         * Nesse caso só fizemos a criação de um objeto spy para o o método "somar"
         * da Calculadora.
         */
        spyOn(Calculadora, 'somar');
    });

    it('Deve possuir o método somar como não definido', () => {
        expect(Calculadora.somar(1,1)).toBeUndefined();
    });

});