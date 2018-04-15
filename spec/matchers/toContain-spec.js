describe('Comparador (Matcher) toContain', () => {
    /*
    - Realiza a busca por determinado item em um array.

    - Também pode ser utilizado para buscar uma substring dentro de
      uma string.

    - Não suporta busca por expressões regulares.
    */
    it('Deve validar o uso do toContain', () => {

        let meuTexto = 'Esse é um texto criado para teste';
        let textoASerEncontrado = 'criado';

        let laranja = 'laranja';
        let maca = 'maçã';
        let pera = 'pera'
        let frutas = [laranja,maca];

        expect(meuTexto).toContain(textoASerEncontrado);
        expect(meuTexto).not.toContain('Criado');
        
        expect(frutas).toContain(laranja);
        expect(frutas).not.toContain(pera);
        expect(frutas).not.toContain('Maça');
    })

});