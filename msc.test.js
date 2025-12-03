
const { mdc } = require('./msc')

describe('Máximo divisor comum', () => {
    it('MDC', () => {
        expect(mdc(20, 28)).toBe('4')
    })
})
