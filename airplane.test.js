const Airplane = require('./airplane')

describe('Airplane class # of passengers', () => {
    test('Needs a Name', () => {
        const testAirplane = new Airplane('Antanov')
        expect(testAirplane.name).toBe('Antanov')          
    })
    test('Airplane class passengers', () => {
        const testAirplane = new Airplane([])
        expect(testAirplane.passengers).toStrictEqual([])
    })
    test('Airplane class flightNumber', () => {
        const testAirplane = new Airplane(null, null, 2500)
        expect(testAirplane.flightNumber).toBe(2500)
    })
})