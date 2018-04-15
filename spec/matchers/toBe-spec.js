describe("Comparador (Matcher) toBe", () => {

    /* 
    - O matcher "toBe" verifica se um objeto seja o outro objeto mesma referência 
    */
    it("Deve validar o uso do toBe", () => {

        let obj1 = { valor : true };
        let obj2 = { valor : true };

        expect(true).toBe(true);
        expect('teste').toBe('teste');

        expect(obj1).not.toBe(obj2);
    });

});