
const Bag = require ("./bag")

describe('Bag class', () =>{
    test('bag needs a weight',()=>{
        const testBag = new Bag(16)
        expect(testBag.weight).toBe(16)
    })
}
)