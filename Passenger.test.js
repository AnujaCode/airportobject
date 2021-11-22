
const passenger = require("./Passenger")

describe ('passenger class',() =>{
  it ("should have name",() =>{
    const testpassenger = new passenger("Anuja Mirji")
    expect(testpassenger.name).toBe("Anuja Mirji")
})
test('should have passportNumber', () => {
    const testpassportNum = new passenger(null,123456789, null)
    expect(testpassportNum.passportNumber).toBe(123456789)
})    
test('should have seat Number', () => {
    const testseatNum = new passenger(null,null, 101)
    expect(testseatNum.seatNumber).toBe(101)
})

})
