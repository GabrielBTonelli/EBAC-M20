const { somaMultiplos } = require('./sum_multiplos')

describe('Maior Múltiplo Comum', () => {
    it('MMC', () => {
        expect(somaMultiplos(5, 7)).toBe('156361')
    })
})
