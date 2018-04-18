var meuMatcher = {
    toBeValidEmail : (util, customEqualityTesters) => {
        var emailRegex = /\S+@\S+\.\S+/;
        return {
            compare : (actual, expected) => {
                let result = {};

                if(expected === undefined) {
                    result.pass = emailRegex.test(actual);
                } else {
                    result.pass = expected.test(actual);
                }

                if(result.pass) {
                    result.message = actual + " é um email válido";
                } else {
                    result.message = actual + " não é um email válido";
                }

                return result;
            }
        }
    }
};

describe("Teste utilizando o comparador personalizado de email", () => {

    beforeEach( () => {
        jasmine.addMatchers(meuMatcher);
    });

    it("Deve verificar se um email é válido", () => {
        expect("email@dominio.com").toBeValidEmail();
        expect("email@dominio.").toBeValidEmail( /\S+@\S+\./);
        expect("email").not.toBeValidEmail();
    });

});