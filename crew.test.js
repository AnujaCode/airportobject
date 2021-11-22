const crewMember = require ("./crewMember")

describe ('crewMember class', () => {
    test('crewMember needs a name', () => {
        const testCrewMem = new crewMember('Anuja')
        expect(testCrewMem.name).toBe("Anuja")
    })

    test('should have position', () => {
        const testposition = new crewMember("pilot")
        expect(testposition.position).toBe("pilot")
    })    
    test('should have staff Number', () => {
        const teststaffnum = new crewMember(null, null, 101)
        expect(teststaffnum.staffNumber).toBe(101)
    })
})    