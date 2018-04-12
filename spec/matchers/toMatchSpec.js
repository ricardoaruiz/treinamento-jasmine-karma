describe('Comparador (Matcher) toMatch', () => {

    /* 
    - O matcher "toMatch" realiza comparações utilizando expressões regulares.

    - Caso seja passada uma string como parâmetro, o comparador tentará encontrar
    o texto passado dentro do valor a ser comparado 
    */
    it('Deve validar o uso do toMatch', () => {

        let texto = "teste com Jasmine";

        expect(texto).toMatch("Jasmine");
        expect(texto).toMatch(/jasmine/i);
        expect("13160-000").toMatch(/^\d{5}-\d{3}$/);

    });

});