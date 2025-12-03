const { indice } = require('./indices')

describe('Encontrando os índices', () => {
    it('maior e menor valor de um array', () => {
        const lista = [10, 5, 22, 3, 7]
        expect(indice([10, 5, 22, 3, 7])).toBe('3, 2')
    })
})
