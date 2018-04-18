describe('Comparador (Matcher) toEqual', () => {

    /* 
    - O matcher "toEqual" verifica se os valores dos objetos são iguais e não a referência 
    */
    it("Deve validar o uso do toEqual", () => {

        let obj1 = { valor : true };
        let obj2 = { valor : true };

        expect(true).toEqual(true);
        expect('teste').toEqual('teste');
        expect(obj1).toEqual(obj2);

    });

});