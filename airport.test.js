
const Airport = require ("./Airport")

describe('Airport class', () =>{
    test('Airport needs name',()=>{
        const testairport = new Airport("DFW")
        expect(testairport.name).toBe("DFW")
    })
}
)